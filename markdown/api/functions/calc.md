---
toc: content
title: calc
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / calc

# Function: calc()

> **calc**(`exp`, `toFixedDigits`?): `string` \| `number`

Defined in: [number.ts:94](https://github.com/sxei/youtil/blob/219118a9936c982e04baae7ef49de50bd83b27a7/src/number.ts#L94)

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
