---
title: 掀起你的盖头来，让我看看HTTP的内容协商
date: 2024-03-22 21:27
updated: 2024-03-22 21:27
categories: 计算机网络
tags:
  - HTTP
  - 应用层
---

## 数据类型与编码

HTTP 协议必须要告诉上层应用，传输的是什么数据类型，否则上层应用只能“猜”传输的数据是什么类型。

HTTP 协议通过 Multipurpose Internet Mail Extensions，多用途互联网邮件扩展，简称 MIME，来做这件事。

MIME 把数据归类到八大类，每个大类下又细分了子类，形式是 `type/subtype` 的字符串，常见的有：
- image/gif，图像文件；
- text/html，表示了超文本文档；
- application/json，数据格式不确定，必须由上层应用程序来解释。

HTTP 在传输时为了节约带宽，有时还会压缩数据，为了不让上层应用继续“猜”，还需要有一个 Encoding Type，告诉上层应用，数据是用的什么编码格式，这样对方才能正确解压缩，得到原始的数据。

比起 MIME Type 来说，Encoding type 就少了很多，常用的只有三种：gzip、deflate、br。

### 数据类型与编码使用的头字段

HTTP 协议通过两个 Accept 请求头字段和两个 Content 实体头字段，来标记 MIME Type 和 Encoding Type，完成客户端和服务器的**内容协商**。

客户端用 Accept 字段，告诉服务器希望接收的数据，服务器用 Content 字段，告诉客户端实际发送的数据。

Accept 字段标记值，可以用 `,` 做分隔符，列出多个类型，让服务器有更多选择的余地，例如：

`Accept: text/html,application/xml`

这就是告诉服务器：我能够看懂 HTML、XML 的文本，可以给我这两类格式的数据。

相应的，服务器会在响应报文里，用 Content-Type 字段告诉客户端，实际发送的数据是什么类型，例如：

`Content-Type: text/html`

Accept-Encoding 和 Content-Ecoding 字段可以忽略，Accept-Encoding 字段标记的是客户端支持的压缩格式，同样也可以用`,`列出多个，服务器可以选择其中一种来压缩数据，实际使用的压缩格式放在响应头字段 Content-Encoding 里。

## 语言类型与编码

MIME type 和 Encoding type 解决了计算机理解数据的问题，但不同国家的人使用了不同的语言，虽然都是 text/html，但如何让浏览器显示出每个人都可阅读的自然语言？

HTTP 采用了与数据类型相似的解决方案，又引入了两个概念：语言类型与字符集。

所谓的`语言类型`就是人类使用的自然语言，例如：英语、汉语、日语等，而这些自然语言可能还有下属的地区性方言，使用`type-subtype`的形式表示，例如：en 表示任意的英语，en-US 表示美式英语，en-GB 表示英式英语。

关于自然语言，还有一个东西，叫`字符集`。在计算机发展的早期，各个国家发明了不同的字符编码方式来处理文字，比如英语使用 ASCII，汉语使用 GBK。同样的一段文字，用一种编码显示正常，换另一种编码后就乱码。

后来就出现了 Unicode 和 UTF-8，把世界上所有的语言都容纳在一种编码方案里。

### 语言类型与编码使用的头字段
Accept-Language 字段，标记客户端可理解的自然语言，用`,`做分隔符列出多个类型，例如：

`Accept-Language: zh-CN, zh, en`

这个请求头会告诉服务器：最好给我 zh-CN 的汉语文字，如果没有就用其他的汉语方言，如果还没有就给英文。

字符集在 HTTP 里使用的请求头字段是 Accept-Charset，服务器响应放在 Content-Type 字段，用`charset=xxx`来表示，例如：
```
Accept-Charset: gbk, utf-8

Content-Type: text/html; charset=utf-8
```
## 协商内容的质量值

在 HTTP 协议里用 Accept、Accept-Encoding、Accept-Language 等请求头字段进行内容协商的时候，还可以用`q`参数表示权重来设定优先级，这里的 `q` 是 Quality Factor 的意思。

权重的最大值是 1，最小值是 0.01，默认值是 1，如果值是 0 就表示拒绝。

表现形式是在数据类型或语言代码后面加一个`;`，然后是 `q=value`。在 HTTP 的内容协商里，`;` 的意断句语气小于 `,`，例如：

`Accept: text/html,application/xml;q=0.9,\*/\*;q=0.8`

它表示浏览器最希望使用的是 HTML 文件，权重是 1，其次是 XML 文件，权重是 0.9，最后是任意数据类型，权重是 0.8。服务器收到请求头后，就会计算权重，再根据自己的实际情况优先输出 HTML 或者 XML。

### 内容协商的结果

Vary 字段，记录服务器在内容协商时参考的请求头字段，例如：

`Vary: Accept-Encoding,User-Agent,Accept`

表示服务器依据了 Accept-Encoding、User-Agent 和 Accept 这三个头字段，然后决定了发回的响应报文。

每当 Accept 等请求头变化时，Vary 也会随着响应报文一起变化。也就是说，同一个 URI 可能会有多个不同的“版本”，主要用在传输链路中间的代理服务器实现缓存服务。
