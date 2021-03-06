---
title: 在 Mac（Intel Core） 上安装 Ubuntu 22.04 虚拟机
date: 2022-07-01
---
本篇博客主要向读者介绍如下内容。
- Mac 搭建虚拟机环境。

你可以在 Mac 上获得一台这样的虚拟机。
- 它可上外网。
- 宿主机可通过终端与它连接。

同时你还可以自定义 VirtualBox 分辨率大小。

![效果图][1]
## 1.1 虚拟机
主流虚拟机软件屈指可数，推荐 Oracle 的 [VirtualBox][2]。免费、大厂背书、历史悠久，难得的精品软件。
如果你是第一次安装 VirtualBox，需要在 Mac -> 系统偏好设置 -> 安全性与隐私 -> 通用 中检查是否有隐私审核申请，通过即可。随后**需要重启 Mac**，否则可能出现错误 `Kernel driver not installed (rc=-1908)` 。

![][3]

## 1.2 操作系统
我们的主要目的是学习，所以易用性应该是首要关注点，推荐 [Ubuntu 22.04 desktop-amd64][4] ，它有足够新的特性，非常适合运行 Kubernetes，内置的浏览器、终端等工具也很方便我们的调试和测试。
> 💡如果阿里云下载较慢，可以使用[清华大学开源软件镜像站下载][5]。
![][6]

## 2.1 安装
（1）打开应用文件夹，单击 VirtualBox 应用图标启动 VirtualBox。
（2）输入 Mac 用户密码，这样程序可以获取到构建程序所需的权限。
（3）点击新建，名称栏自定义，文件夹默认，类型选择 Linux，版本选择 Ubuntu(64-bit)，单击继续。
![][7]

（4）内存大小修改为 4096 MB，单击`继续`。
（5）虚拟硬盘选择`现在创建虚拟硬盘`，单击`创建`。
（6）虚拟硬盘文件类型选择`VDI(VirtualBox 磁盘映像)`，单击继续。
（7）存储在物理硬盘上选择`动态分配`，单击继续。
（8）文件位置和大小，修改为 20 GB，单击创建。
（9）在`工具 - 网络`中，创建一个“Host-only”的网络，单击创建，DHCP 勾选启用。

![][8]

（10）选中刚才创建的虚拟机，右键，单击`设置`。

![][9]

（11）选择`存储`，单击`没有盘片`，然后单击右侧的蓝色小光盘，单击`选择或创建一个虚拟光盘文件`。

![][10]

（12）单击`注册`，在文件系统中找到之前下载的 ubuntu 系统，以 .iso 结尾的文件，单击`选择`。

![][11]

（13）选择`网络`，分别设置`网卡1`和`网卡2`，`网卡1`就设置成刚才创建的“Host-only”网络，它是我们在本地终端登录和联网时用的；`网卡2`是“网络地址转换（NAT）”，用来上外网。

![][12]

（14）现在可以开始安装 ubuntu 了，双击启动虚拟机，进入 ubuntu 引导程序，选择语言为 `中文`，单击 `安装 Ubuntu`。
（15）键盘布局默认，单击继续。
（16）选择 `最小安装`，取消勾选 `安装 Ubuntu`时更新，同时**物理断网**，避免下载升级包，单击继续。
（17）选择`清理整个磁盘并安装 Ubuntu`，单击现在安装。
（18）设置用户名与密码，单击安装。
（19）操作系统安装完成后，会强制重启。接下来我们需要安装自定义分辨率插件，点击顶部`设备`->`安装增强功能`。

![][13]

（20）打开终端，`$ cd /media/你的用户名/VBox_GAs_xxx`，接着执行 `$ ./autorun.sh`，安装完成后重启，就可以调整分辨率了。
> 💡此时虚拟机中的操作系统有明显卡顿，需要提高显存大小，在 VirtualBox 中选中虚拟机，进入设置，单击`显示`。

![][14]

（21）进一步做一些环境的初始化操作，打开终端，用 apt 从 Ubuntu 的官方软件仓库安装 git、vim、curl 等常用工具。
```
$ sudo apt update
$ sudo apt install -y git vim curl jq openssh-server

```
（22）安装完成后，点击右上角的`设置`，点击`网络`，然后点击`以太网 enp0s3`旁的小齿轮即可查看 ip 地址。在宿主机上通过如下命令验证是否可以连接虚拟机。
```
$ ssh 你的用户名@你的ip地址
```

![][15]

（23）备份当前系统，点击`控制`，再点击`生成备份`。

![][16]

## 3.1 参考文献
- 《Kubernetes 入门实战课》

  [1]: http://rebotrhdq.hd-bkt.clouddn.com/img/%E6%88%AA%E5%B1%8F2022-07-01%2010.45.51.png
  [2]: https://www.virtualbox.org/wiki/Downloads
  [3]: http://rebotrhdq.hd-bkt.clouddn.com/img/WeChatb0ff7b449793f246f72754b6a2374501.png
  [4]: https://developer.aliyun.com/mirror/
  [5]: https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/20.04/ubuntu-20.04.4-desktop-amd64.iso
  [6]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701121022.png
  [7]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701121119.png
  [8]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701174813.png
  [9]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701173511.png
  [10]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701153948.png
  [11]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701175533.png
  [12]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701180011.png
  [13]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701182547.png
  [14]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701182444.png
  [15]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701183209.png
  [16]: http://rebotrhdq.hd-bkt.clouddn.com/img/20220701183859.png