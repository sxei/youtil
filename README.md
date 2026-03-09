## youtil

`youtil`，发音同`util`，中文可以叫做`油梯`，一个与框架（`Vue`、`React`等）、环境（`Nodejs`、`Browser`等）无关的小巧、精简、实用、不依赖任何第三方库的`JavaScript`高质量函数库，作者多年精心维护并持续迭代，最新版完整代码`gzip`后仅`7kb`，可放心使用。官网：[https://youtil.haoji.me](https://youtil.haoji.me)。

目前收录的函数包括但不限于日期时间处理、字符串处理、数学运算、cookie、枚举、网络请求、消息通信、事件、编解码、身份证校验、web增强等，并持续更新。

> * 少数方法可能依赖浏览器环境，例如`showLoading`，注意甄别；
> * 【文档】部分仅对部分核心方法进行单独示例演示，很多简单函数未在此做一一介绍，完整函数列表请前往[【API】](https://youtil.haoji.me/api/globals#functions)页面单独查看，

## 如何使用

### npm安装

安装：`npm i youtil -S`

使用示例：

```js
import { formatDate } from youtil;
console.log(formatDate(Date.now()));
```

### CDN引入

```html
<script src="https://unpkg.shop.jd.com/youtil/dist/index.umd.js"></script>
<script>
    const { formatDate } = youtil;
    console.log(formatDate(Date.now()));
</script>
```

## 项目工程介绍

推荐`>=node@22`环境，执行`cnpm run dev`将自动打开本地预览。

### 脚手架

* 采用`typedoc`生成API文档；
* 采用`esbuild`构建源代码；
* 文档系统采用`dumi`；

### 目录结构介绍

* src: 源文件；
* scripts: 少数构建需要的文件；
* markdown: 文档源文件
* markdown/api: `typedoc`自动生成的API源文件；
* test: 测试用例；
* docs: 构建后的文档；
* dist: 构建产物；

### 代码提交顺序

* 更新代码；
* 更新`package.json`和`CHANGELOG.md`；
* `npm publish`；
* `npm run build:docs`，然后合并master；
