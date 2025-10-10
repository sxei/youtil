---
toc: content
title: parseDate
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / parseDate

# Function: parseDate()

> **parseDate**(`str`, `fmt`?): `Date`

Defined in: [time.ts:69](https://github.com/sxei/youtil/blob/b47ef7b1757ff0687608f2a4a60408b636b14d73/src/time.ts#L69)

将字符串解析成日期

## Parameters

### str

`string`

输入的日期字符串，如'2014-09-13'

### fmt?

`string`

字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q

## Returns

`Date`

解析后的Date类型日期
