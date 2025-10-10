---
toc: content
title: calculate
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / calculate

# Function: calculate()

> **calculate**(`exp`, `toFixedDigits`?): `any`

Defined in: [number.ts:30](https://github.com/sxei/youtil/blob/b47ef7b1757ff0687608f2a4a60408b636b14d73/src/number.ts#L30)

不会丢失精度的计算数学表达式
注意，由于 youtil 承诺不会在代码中依赖任何第三方模块，调用前需要确保 window.Big 存在

## Parameters

### exp

`string`

计算表达式，例如 '3.14+8.99'，注意仅支持单次运算

### toFixedDigits?

`number`

对结果进行四舍五入需要保留的小数点，不传忽略四舍五入

## Returns

`any`

返回字符串
