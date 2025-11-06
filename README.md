# youtil

`youtil`，发音同`util`，中文可以叫做`油梯`，一个与框架（`Vue`、`React`等）、环境（`Nodejs`、`Browser`等）无关的小巧、精简、实用、不依赖任何第三方库的`JavaScript`高质量函数库，最新版完整代码仅`7kb`，作者多年精心维护并持续迭代，可放心使用。官网：[https://youtil.haoji.me](https://youtil.haoji.me)。

目前收录的函数包括但不限于日期时间处理、字符串处理、数字处理、cookie、枚举、网络请求、消息通信、事件、编解码、身份证校验等，并持续更新。

> * 少数方法可能依赖浏览器环境，例如`showLoading`，注意甄别；
> * 【文档】部分仅对部分核心方法进行单独示例演示，很多简单函数未在此做一一介绍，完整函数列表请前往[【API】](https://youtil.haoji.me/api/globals#functions)页面单独查看，
> * 关于命名，之前想了很多名字，包括`autil`、`zutil`、`feutil`等，从a-z试下来只有几个没有被注册，但是都不好记，最后才取了`youtil`这个名字。

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

## 贡献代码

依赖`node@20`环境，执行`cnpm run dev`将自动打开本地预览。

### 目录结构介绍

* src： 源文件；
* docs： 文档；
* test：测试用例；
* dist：各种构建产物
* build：文档之类的构建产物；

### 代码提交顺序

* 更新代码；
* 更新`package.json`和`changelog`；
* `npm publish`；
* `npm run build:docs`，然后合并master；

注意：@ice/pkg和@swc/helpers 升级到0.5.0以上版本时其他业务可能报错，非常坑！目前写死版本

### 关于脚手架

注意：本仓库脚手架已全部重新搭建，文档系统基于`dumi`，生产构建基于`esbuild`。

以下内容全部失效，不用关注。

#### 关于@swc/helper的版本

`@swc/helper`在升级到0.5.0之后有一些兼容性问题，一些老工程（如node14+webpack4）构建会失败。

目前没有问题的版本：

* `@swc/helper`写死`0.4.14`（部分构建产物：`import _instanceof from "@swc/helpers/src/_instanceof.mjs"`）；
* `@ice/pkg`写死`1.5.5`；

有问题的版本：

* `@swc/helper`写死`^0.5.0`（部分构建产物：`import { _ as _instanceof } from "@swc/helpers/_/_instanceof"`）；
* `@ice/pkg`写死`^1.5.5`；

#### 脚手架来源

~~仓库脚手架来源~~：

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm init @ice/pkg youtil # 选择前端类库
# 默认不支持文档预览，需手动开启
cnpm i @ice/pkg-plugin-docusaurus react react-dom -D
# 参考 https://pkg.ice.work/guide/preview 进行 build.config.mts 配置
cd youtil
mkdir docs
vim index.md
cnpm start
```
