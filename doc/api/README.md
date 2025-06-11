**youtil**

***

# youtil

`youtil`，发音同`util`，中文可以叫做`油梯`，一个与框架（`Vue`、`React`等）、环境（`Nodejs`、`Browser`等）无关的小巧、精简、实用、不依赖任何第三方库的`JavaScript`工具库。

> 1. 代码还在不断补充完善，敬请期待！
> 2. 少数方法可能依赖DOM，例如`showLoading`；

## 如何使用

安装：`npm i youtil -S`

使用示例：

```js
import { formatDate, parseDate } from youtil;
console.log(formatDate(Date.now()));
conssole.log(parseDate('2023-02-14', 'yyyy-MM-dd'));
```

## API

参见[API文档](https://youtil.haoji.me/api/globals);

## 关于命名

之前想了很多名字，包括`autil`、`zutil`、`feutil`等，从a-z试下来只有几个没有被注册，但是不好记，最后才取了这个名字，因为比较好记。

## 模块开发

依赖`node@18`环境，执行`cnpm run dev`将自动打开本地预览。

### 目录结构介绍

* src： 源文件；
* docs： 文档；
* test：测试用例；
* dist：供浏览器直接使用的bundle模式产物；
* esm：供其他项目引入；
* build：文档之类的构建产物；

### 代码提交顺序

* 更新代码；
* 更新`package.json`和`changelog`；
* `npm publish`；
* `npm run after-publish`务必不能漏了！
* `git push`；

注意：@ice/pkg和@swc/helpers 升级到0.5.0以上版本时其他业务可能报错，非常坑！目前写死版本

### 关于@swc/helper的版本

`@swc/helper`在升级到0.5.0之后有一些兼容性问题，一些老工程（如node14+webpack4）构建会失败。

目前没有问题的版本：

* `@swc/helper`写死`0.4.14`（部分构建产物：`import _instanceof from "@swc/helpers/src/_instanceof.mjs"`）；
* `@ice/pkg`写死`1.5.5`；

有问题的版本：

* `@swc/helper`写死`^0.5.0`（部分构建产物：`import { _ as _instanceof } from "@swc/helpers/_/_instanceof"`）；
* `@ice/pkg`写死`^1.5.5`；

### 附录

仓库脚手架来源：

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
