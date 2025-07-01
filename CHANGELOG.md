# 变更历史

## 3.0.4 (2025-07-01)

* 修复`baseUrl`未兼容`url`已经是`//`开头的情况；
* 兼容`blob:`模式下`//`开头地址`protocol`不正确的问题；

## 3.0.3 (2025-06-11)

* 修复`mergeOptions`中可能会把`fetchOptions`覆盖的问题；
* 修复`baseUrl`未兼容`url`已经是`http`开头的情况；

## 3.0.2 (2025-06-11)

* 新增`request.create(options)`方法，原来的`new Request()`废弃；

## 3.0.0 (2025-06-11)

鉴于之间的未合并的esm格式在很多工程里会有奇奇怪怪的问题，所有后面默认的`module`指向合并的esm而不是`transform`的esm文件，同时对输出文件命名做了比较大的调整。

* `module`默认指向`es/index.mjs`（即原来的`dist/index.esm.es5.production.js`）;
* `dist/index.umd.es5.production.js`重命名为`umd/index.js`；
* `docs`重命名为`doc`，`docs`改为构建后的文档目录（由于github pages必须叫这个名字）；
* 新增`createEnum`、`initWindowMessage`方法；
* 完善`showLoading`相关代码，修复mask不生效问题； 

## 2.1.0 (2025-04-29)

`request`破坏更新：

* 新增`onFetchResponse`配置，且默认逻辑改为仅`status==200`的时候才返回`resp.json()`，其它直接抛出异常；
* catch情况下`errorHandler`的第二个参数修改为`e.response`；

其它普通更新：

* `feature`: 新增`formData`参数；


## 2.0.5 (2025-04-28)

* `bugfix`: 修复`fetchOptions`由于引用类型导致的严重bug；
* `bugfix`: 修复`GET`模式下`headers`未生效问题；
* `feature`: 优化`GET`模式下参数拼接`?`兼容问题；

## 2.0.4 (2025-04-02)

* 支持`cjs`，完善导出兼容性；

## 2.0.1 (2025-03-28)

* 修复`request`始终返回any问题；
* `Request`支持传入第2个参数；

## 2.0.0 (2025-03-28)

* 全新版本，支持`tree-shaking`，新增`request`；

## 1.0.13 (2024-03-01)

* feature: `copyTextToClipboard`改名`copyToClipboard`并优化内部实现，不向下兼容；

## 1.0.12 (2024-02-29)

* bugfix: 修复上个版本因将`@swc/helper`升级至`^0.5.0`后不兼容老工程的问题；
* feature: 所有`this`全部替换成`youtil`，避免不必要的问题出现；

## 1.0.11 (2024-02-29)

* feature: 新增`copyTextToClipboard`方法；

## 1.0.10 (2024-01-23)

* bugfix: 修复`1.0.7`版本因缺失cjs导致部分应用构建报错问题；

## 1.0.7 (2024-01-23)

* 脚手架更新，代码无实际更新；

## 1.0.6 (2023-06-25)

* 修改`formatDate`方法，支持部分string类型作为日期入参；

## 1.0.0 (2023-02-09)

* release第一个版本；
