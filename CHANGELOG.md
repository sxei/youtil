# 变更历史

## 3.2.1 (2026-04-17)

* feat: 新增`getImageSize`方法，支持通过图片URL或Blob对象获取图片尺寸信息，自动处理跨域问题；

## 3.2.0 (2026-03-09)

* `big.js`直接内置，更新`calc`函数，支持复杂表达式；
* 移动`formatNumber`和`formatPercent`2个方法位置；
* 文档更新：完善`markdown/guide/number.md`文档，补充`formatNumber`和`formatPercent`函数的详细说明、参数说明和使用示例;

## 3.1.15 (2026-02-06)

* feat: 新增`makeDownload`、`selectFile`、`loadScript`方法和文档；

## 3.1.14 (2026-02-04)

* fix: 完善`onMessageListener`的`TS`定义；

## 3.1.13 (2026-01-28)

* 更新`getMonthDays`内部实现逻辑，同时简化参数含义：

## 3.1.12 (2025-12-11)

* 更新`parseDate`方法：
  * 取消 fmt 默认值；
  * 如果不传 fmt ，会尝试尽可能自动解析；
* 更新`formatDate`方法，内部调用`parseDate`；
* 新增`formatFriendlyDate`方法；
* 文档：完善时间工具文档，新增`formatFriendlyDate`、`formatDuration`、`sleep`说明，补充`parseDate`自动解析示例与函数签名。
* 测试：补全时间相关单测，覆盖`parseDate`、`formatFriendlyDate`、`formatDuration`、`sleep`等场景。

## 3.1.11 (2025-11-06)

* 更新`formatNumber`方法，支持传入`options`，支持按照`fin|en-fin|short`设置风格，默认`short`；

## 3.1.10 (2025-10-27)

* `calc`支持`%`求余；

## 3.1.9 (2025-10-27)

* `calculate`更名为`calc`，原名称标记为过时；兼容内部包含空格写法；默认返回值从`string`修改为`number`；
* 为了兼容小数点精度问题，`formatDuration`内部修改为`big.js`实现；

## 3.1.8 (2025-10-24)

* `message`支持debug；

## 3.1.7 (2025-10-21)

* `message`更新：新增`offMessage`方法；

## 3.1.6 (2025-10-01)

🇨🇳国庆快乐！

* `enums`更新，从之前的`ReadonlyArray`改成普通`Array`，避免部分组件严格TS校验导致告警；
* `format`：新增`formatNumber`、`formatPercent`方法；
* `number`：新增`initBigJs`、`calculate`、`toFixed`方法；
* 文档更新：更新`request`文档，新增`日期解析`、`数学运算`文档；

## 3.1.5 (2025-09-02)

* `request`更新：
  * 支持`mock`，新增`mockRequest`、`configMock`、`resetMock`3个方法；
  * 新增`signal`以支持`abort`；

## 3.1.4 (2025-08-27)

* 新增`openNewTab`、`formatDuration`、`isLeapYear`、`getMonthDays`方法；
* 新增`getCookie`、`setCookie`、`delCookie`方法；
* 更新：支持`formatDate('2025-08-12 12:23:44')`格式；

## 3.1.2 (2025-08-04)

* 增加`index.cjs`构建产物；

## 3.1.1 (2025-07-30)

* 枚举增加`pickByLabel`方法；
* 完善文档；

## 3.1.0 (2025-07-24)

* 脚手架重大更新，废弃`ice-pkg`，直接采用`esbuild`构建，仅输出`dist/index.mjs`和`dist/index.umd.js`2个文件，不再支持`cjs`以及`transform`模式；

## 3.0.6 (2025-07-23)

* `request`方法重大更新：
    * 新增`setLoading`方法，代替经典的`const afterRequest = () => setLoading(false)`；
    * 新增`overrideMessage`，负责统一处理自定义异常文案逻辑，可以用于覆盖默认的`resp.message`；
    * `errorHandler`增加第3个参数`options`，解决自定义`errorHandler`时无法获取到`options.silent`的问题；
    * 为消除歧义，`errorMessage`更名为`defaultErrorMessage`，`errorMessage`标记为过期；
    * 不兼容更新：`resp.message || resp.msg`更改为`resp.message`，不再兼容不标准返回；
    * 不兼容更新：发生异常时`error.response._response`改为`{ ..._response }`；

## 3.0.5 (2025-07-03)

* 新增`getIdCardLastChar`、`validateIdCard`、`keyCodes`；
* 新增字符串系列方法，如`formatJson`、`getRandom`等5个方法；

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
