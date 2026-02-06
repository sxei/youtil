---
toc: content
title: parseDate
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / parseDate

# Function: parseDate()

> **parseDate**(`str`, `fmt`?): `Date`

Defined in: [time.ts:9](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/time.ts#L9)

将字符串或数字解析成日期

## Parameters

### str

输入的日期字符串，如'2014-09-13'，也可以是一个时间戳

`string` | `number` | `Date`

### fmt?

`string`

字符串格式，支持如下：y、M、d、H、m、s、S，不支持w和q，不传时会根据str的格式尽量自动判断

## Returns

`Date`

解析后的Date类型日期
