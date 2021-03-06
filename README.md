# JS
汇总js主要的知识点


#其他一些git指令：

```
$ git init                    #把当前目录变成git可以管理的仓库
$ git add readme.txt          #添加一个文件，也可以添加文件夹
$ git add -A                  #添加全部文件
$ git commit -m "备注"        #提交修改
$ git status                  #查看是否还有未提交
$ git log                     #查看最近日志
$ git reset --hard HEAD^      #版本回退一个版本
$ git reset --hard HEAD^^     #版本回退两个版本
$ git reset --hard HEAD~100   #版本回退多个版本
$ git remote add origin +地址 #远程仓库的提交（第一次链接）
$ git push -u origin master   #仓库关联
$ git push                    #远程仓库的提交（第二次及之后）
```

[https://www.w3.org/TR/]: https://www.w3.org/TR/
[https://www.ecma-international.org/publications/standards/Ecma-262.htm]: https://www.ecma-international.org/publications/standards/Ecma-262.htm


#前端知识体系
如何梳理前端知识点
很早之前写过一篇博客[《自己总结的web前端知识体系大全》]( http://www.cnblogs.com/wangfupeng1988/p/4649709.html)，如今有将近10万浏览量

前端开发到底需要哪些基础知识，它都有哪些内容，是一个什么样的体系。提到“体系”这个词你也不必害怕，其实内容不是特别多，而且跟着我的思路来，保证你不会混乱。

学习计算机编程，你会经常听到“标准”或者“协议”这些词汇，他俩表达的一个意思，就是确保双方沟通的格式的一致性。前端开发中需要哪些标准或者协议呢？

- W3C 标准
如 HTML CSS JS-WEB-API（如 DOM BOM 操作） HTTP 等等。官网：https://www.w3.org/TR/

- ECMA 262 标准
ES基础语法（变量、原型、闭包、异步等语法）。官网：https://www.ecma-international.org/publications/standards/Ecma-262.htm

另外，还有我们需要重点了解的知识

- 开发环境
代码版本管理，代码架构方式、如模块化、工程化等

- 运行环境
浏览器或者app中的webview

## 前端知识体系
总结来说，前端知识体系中，与 JS 相关的基础知识有：

- ES 基础语法
- JS-WEB-API
- 开发环境
- 运行环境
- 其他综合性问题，如性能优化
> 咱们常说的 javascript 其实可以拆分成 ES基础语法 和 JS-WEB-API 两部分来看待，而且这两部分属于两个标准体系。

以上基础知识可以涵盖所有的 JS 基础面试题，本教程后面会使用常见面试题目配合以上知识做详细的讲解。因此，从题目到知识，再从知识反推到题目，才是最正确、高效的学习方式。


