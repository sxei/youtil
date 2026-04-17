---
toc: content
title: calculate
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / calculate

# ~~Variable: calculate~~

> `const` **calculate**: (`exp`, `toFixedDigits?`) => `string` \| `number` = `calc`

Defined in: [number.ts:123](https://github.com/sxei/youtil/blob/cdf086a3320f6f7142b4bcac73a2aebe78c926d2/src/number.ts#L123)

支持【加、减、乘、除、求余、括号】运算、不丢失精度、支持运算优先级的万能通用数学表达式计算函数

## Parameters

### exp

`string`

合法的数学计算表达式，支持过滤空格，例如 (-0.2+3/(4-1)*4)%3 输出 0.8

### toFixedDigits?

`number`

是否需要对结精度进行四舍五入，不传原样返回number，传了返回字符串

## Returns

`string` \| `number`

## Deprecated

请使用 calc
