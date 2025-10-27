---
toc: content
title: calculate
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / calculate

# Variable: ~~calculate()~~

> `const` **calculate**: (`exp`, `toFixedDigits`?) => `any` = `calc`

Defined in: [number.ts:53](https://github.com/sxei/youtil/blob/694ab8493a838606110abf86b5e5d35bb7326cbe/src/number.ts#L53)

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

默认情况返回 number ，设置了 toFixed 后返回字符串

## Deprecated

请使用 calc
