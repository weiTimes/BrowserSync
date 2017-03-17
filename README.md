# 基于browser-sync的静态资源脚手架

## Why use?

* 在需要写demo的时候可以快速地开始与进行
* 可以在所以打开服务器的浏览器上同步展示(设备连接同一个内网，输入内网的服务地址，如: http://192.168.1.104:3000)
* UI是browser-sync的web界面，在其中可以看到所开启服务器的内部地址、外部地址以及打开新标签页、重置等功能选项
* UI界面的Remote Debug 可以通过chrome进行远程调试，还可以开启css outlining等等这样的功能，便于更快速的布局
* --tunnel 可以生成一个外网链接，即使不在同一个局域网下也可以访问并且同步看到页面的修改情况
* --proxy 设置代理，可以同步访问其它服务器(可运行php等)，并且使用同步功能
* 可以整合到gulp，达到一个自动化
* 集成了babel，可以使用ES6语法和JSX格式

## How to use?

* npm install || yarn 安装开发所需的依赖 
* gulp
* npm run build 如果使用了ES6语法

