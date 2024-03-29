# qidian_novel_optimization
![Static Badge](https://img.shields.io/badge/build-passing-blue)
![Static Badge](https://img.shields.io/badge/License-MIT-green)


起点小说优化|AI续写追更|VIP章节免费阅读|支持本章说显示|自动翻页|简洁风格：提供多功能的起点小说网站优化插件，支持多书源、本章说、翻译、净化等功能
[直接安装](https://greasyfork.org/zh-CN/scripts/420724)
## 起点中文网阅读优化脚本介绍

*   支持绝大部分小说的VIP章节自动解锁，带给您非常舒心的阅读体验。媲美原版付费阅读效果，支持显示本章说，完美兼容字体切换。
*   支持**"键盘小说网","读书阁","笔趣阁","得奇小说网","石头小说网（繁体中文支持）"**等多个书源站，小说找不到资源可手动在脚本设置中指定其他书源。
*   我们还增强了有趣且实用的功能：AI续写，如果您阅读到了小说作者更新的最后一章，不妨看看后面的剧情的N种可能性吧！支持GPT4、文心4.0、星火3.0大模型
*   除此之外，我们还准备了其他阅读增强辅助：阅读页净化、书籍详情页去广告、去月票信息等
*   最强大的是，我们实现了所有功能的插件化（14+个功能/书源插件），你可以在设置中任意开启其中一个或者多个功能，组合打造成你想要的起点中文网！
*   有任何问题或建议，欢迎发送邮件至**officalbyone@gmail.com**或在评论区留言。

## 版本更新说明

🎉新年快乐！2024重构版本，引入插件形式的任意页面Patch，兼容小说书源优化、页面调整修改的多功能瑞士军刀。

*   1.5.1、1.5.2 修复体验
*   1.5.0 新增了AI功能，新增了在线插件更新检测，修复了一些可能引发书源异常的问题（这版基本可以养老了～）
*   1.4.5.5 修复了本章说的一些问题（感谢 @Charles Chiu 和 @lilyg 的反馈）
*   1.4.5.3开始兼容同系列的[纵横小说优化插件](https://greasyfork.org/zh-CN/scripts/487789-%E7%BA%B5%E6%A8%AA%E5%B0%8F%E8%AF%B4%E4%BC%98%E5%8C%96-%E8%A7%A3%E9%94%81vip%E7%AB%A0%E8%8A%82)，欢迎体验，还是原来的味道～
*   1.4.5插件设置中新增可开启功能：启用本章说，同时更新了作用域，起点全站支持，计划更新：首页显示对应书的可用书源、一键解析下载全本txt、游客书架、移动端适配
*   1.4.3插件设置中新增可开启功能：指定网站书源、解锁起点灰色目录、自动翻页/滚动、网页净化、快捷跳转
*   1.4增加了在线插件板块，可以加载别人发布的书源啦！欢迎大家分享书源代码到评论区或者邮箱，我也会定期更新
*   1.4版本新增特性：
-多书源切换
-自定义添加书源（实验版）
-清爽化阅读体验。

## AI功能说明

AI功能需要用到OpenAI提供的ChatGPT接口，您可在官网自行获取，是一串开头是“sk-”的文本，在Google上搜索“如何获得OPENAI APIKEY”；也可以使用作者提供的接口代理站（[https://openai-proxy.51coolplay.cc](https://openai-proxy.51coolplay.cc)），已支持GPT3.5和4，以及文心4.0、讯飞星火3.0等人工智能大模型，注册即赠送5000Tokens，价格同步OpenAI官方。在使用AI功能之前，系统会弹窗提示你输入APIKEY。

如果你有ChatGPT账户，也可以用你自己的ApiKey，无需魔法

## 脚本插件开发说明

### 插件API支持：

1、readBookName() - 取书籍名； 

2、readChapterName() - 取章节名；  

3、readContent() - 取正文；  

4、writeContent() - 写正文；  

5、parseDocFromAjax() - 从页面取内容；  

6、calculateTextSimilarity() - 取文本相似度；  

7、getAIReply() - 获取AI回复；  

8、request() - fetch风格的http请求；  

更多API和用法参考脚本代码


我们的项目精神依赖于你们的支持，无论金额多少，我们都非常感谢你的打赏！
[新做的分发站，免费体验讯飞星火、ChatGPT、文心一言的 4.0 接口！注册送 5000 Tokens，并有 iOS 和 Android 版AI App！](https://openai-proxy.51coolplay.cc/)
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Admin6016/qidian_novel_optimization&type=Date)](https://star-history.com/#Admin6016/qidian_novel_optimization&Date)

