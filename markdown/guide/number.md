---
toc: content
order: 6
---

# 数学运算

基于`big.js`进行二次封装的适合金融等严肃场景的数学运算系列函数，精度问题参考：[https://blog.haoji.me/js-float.html](https://blog.haoji.me/js-float.html)。

## 万能数学表达式计算 calc

支持【加、减、乘、除、求余、括号】运算、不丢失精度、支持运算优先级的万能通用数学表达式计算函数。

```js
import { calc } from 'youtil';

// 基本运算
calc('0.1+0.2'); // 0.3
calc('3-1'); // 2
calc('3*4'); // 12
calc('8.8/100'); // 0.088

// 复杂表达式
calc('(-0.2+3/(4-1)*4)%3'); // 0.8

// 保留指定小数位
calc('8.8/100', 1); // 保留1位小数 0.1
calc('3.83433+4', 0); // 保留0位小数 8
```

## 精确的四舍五入 toFixed

可以100%替代浏览器自带`toFixed`，会进行正确的四舍五入。

```js
import { toFixed } from 'youtil';
toFixed('0.338', 2); // 0.34
toFixed(3.14159, 3); // 3.142
```

## 数字格式化 formatNumber

将数字格式化成更易读取的格式，支持多种风格。

### 参数说明
- **number** `number | string` 可选。要格式化的数字，如果为空或非数字则返回空字符串
- **options** `string | object` 可选。格式化配置项，可以是字符串（指定style）或对象
  - **style** `'short' | 'fin' | 'en-fin'` 可选。格式化风格，默认为'short'
    - `short`: 简写格式，如 3.8万、427万、2.9亿
    - `fin`: 金融格式，每4位用逗号分隔，如 123,4567.89
    - `en-fin`: 英文金融格式，每3位用逗号分隔，如 1,234,567.89
  - **toFixed** `number` 可选。要保留的小数位数，不传不做处理

### 使用示例
```js
import { formatNumber } from 'youtil';

// 简写格式（默认）
formatNumber(189); // 189
formatNumber(38000); // 3.8万
formatNumber(4270000); // 427万
formatNumber(290000000); // 2.9亿

// 金融格式（千位分隔符）
formatNumber(1234567.89, 'fin'); // 123,4567.89
formatNumber(1234567.89, { style: 'fin' }); // 123,4567.89

// 英文金融格式（千位分隔符）
formatNumber(1234567.89, 'en-fin'); // 1,234,567.89
formatNumber(1234567.89, { style: 'en-fin' }); // 1,234,567.89

// 指定小数位
formatNumber(1234567.89, { style: 'short', toFixed: 2 }); // 123.46万
```

## 百分比格式化 formatPercent

将小数格式化成百分比。

### 参数说明
- **num** `number | string` 可选。要格式化的小数，如果为空或非数字则返回空字符串
- **toFixedValue** `number` 可选。精确到小数点数量，默认为2

### 使用示例
```js
import { formatPercent } from 'youtil';

formatPercent(0.1234); // 12.34%
formatPercent(0.1234, 1); // 12.3%
formatPercent(0.1234, 0); // 12%
```

## 演练场

```jsx preview
import { formatNumber, calc, toFixed, formatPercent } from 'youtil';

export default () => {
    return <div>
        <div>calc('0.1+0.2') = {calc('0.1+0.2')}</div>
        <div>formatNumber(1234567.89) = {formatNumber(1234567.89)}</div>
        <div>formatNumber(1234567.89, 'en-fin') = {formatNumber(1234567.89, 'en-fin')}</div>
        <div>formatPercent(0.1234) = {formatPercent(0.1234)}</div>
        <div>toFixed(3.14159, 2) = {toFixed(3.14159, 2)}</div>
    </div>;
}
```

## 已废弃的API

### ~~calculate~~

`calculate` 函数已废弃，请使用 `calc` 替代。

### ~~big.js初始化~~

从`3.2.0`开始，`big.js`直接内置，无需手动初始化！