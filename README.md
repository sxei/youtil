# youtil

`youtil`，发音同`util`，中文可以叫做`油梯`，一个与框架（Vue、React等）、环境（Nodejs、Web等）无关的小巧、精简、实用、不依赖任何第三方库的`JavaScript`工具库。

> 代码还在不断扩充，敬请期待！

## 如何使用

安装：`npm i youtil -S`

使用示例：

```js
import { formatDate, parseDate } from youtil;
console.log(formatDate(Date.now()));
conssole.log(parseDate('2023-02-14', 'yyyy-MM-dd'));
```

## API

参见[index.d.ts](https://github.com/sxei/youtil/blob/master/esm/index.d.ts);

## 关于命名

之前想了很多名字，包括`autil`、`zutil`、`feutil`等，从a-z试下来只有几个没有被注册，但是不好记，最后才取了这个名字，因为比较好记。

## 代码提交顺序

* 修改代码；
* 更新changelog和package.json
* npm publish
* git push

## 附录

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
