---
title: 使用WebSocket推送消息，客户端报错
date: 2023-10-27
updated: 2023-10-27
categories: 计算机网络
tags:
  - 消息编码
excerpt_type: text
---

今天一天时间，解决了一个问题，写下此篇博客进行复盘。

<!-- more -->

我使用 WS 协议推消息，该消息使用二进制+ proto 编码，推送后，在服务端没有报任何错，但是在客户端报错：
::: danger

The remote party closed the WebSocket connection without completing the close handshake.

::: 

proto 消息的数据结构为 `Map[int]string`，当 int 为 1 或 100 时，客户端不会报错，当 int 为 999 或 1000 时就会报错。


我从客户端的报错信息判断是服务端关闭了 ws 的连接，因此，我在关闭 ws 的函数中打断点，并没有进去。
随后我查看了 proto 编码出来的数据，发现如果数据中出现了**乱码**，客户端就会报错，为了避免乱码，我使用 base64 进行了加密，推送仍然失败，此时 base64 加密后的消息，没有任何乱码。

此时，我怀疑是封包问题，查看了 WS 文档，发现 WS 底层使用了 base64 加密，也就可能是我使用 base64 加密的原因，我又将消息体换成了 md5，客户端仍然无法收到包。

我的协议设计为 `data_len+route+message`，此时我尝试仅加密数据部分，即 `data_len+route+base64(message)+<<<EOF(自定义结束符)`，客户端接收消息成功。
当我以为万事大吉的时候，我发现 data_len 从 uint32 变为二进制后，出现了乱码！导致客户端又出现了同样的报错。

继续查看 WS 文档，发现 WS 协议的底层，对于文本，会使用 UTF-8 进行解码，解码失败，就会断开连接，我在代码中，对发送的数据进行 UTF-8 的校验，果然，发送失败的数据，校验结果是 false，成功的校验都是 true。
难道我要把协议中的 data_len 和 route 都封装成 string ？这显然不可能，网关收发消息，随时都在使用，我使用 string 的方式时，客户端也需要进行反射，额外增加了 6 次操作。

继续看文档，发现 WS 支持二进制模式和文本模式，我**将 WS WriteMessage 的 type 修改为二进制**，并将之前的 base64 加密代码删除，客户端成功接收消息并解码。