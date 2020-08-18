<!--
 * @LastEditors: misitebao
 * @Description: 请添加文档头注释！！！
--> 
# 快速开始

## 框架简介
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

## 环境搭建
- 因为使用了`async/await`,所以版本`>=v7.6.0`即可
- 推荐使用长期支持版 https://nodejs.org/zh-cn/
- 推荐使用`nvm` nodejs版本管理工具 https://github.com/nvm-sh/nvm/releases

## 安装Koa
```
初始化package.json
npm init

安装koa2 
npm install koa
```
## Hello World
新建main.js文件，写入下面代码
```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'Hello World Koa'
})

app.listen(3000)
console.log('服务已运行于端口 3000')
```
## 启动程序
```
node main.js
```
浏览器访问`localhost:3000`，效果如下

【缺图】

