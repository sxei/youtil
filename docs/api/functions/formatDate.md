[**youtil**](../README.md)

***

[youtil](../globals.md) / formatDate

# Function: formatDate()

> **formatDate**(`date`?, `fmt`?): `string`

Defined in: [time.ts:8](https://github.com/sxei/youtil/blob/4936310865aaa40dd41c31152e8edb0efd2f9277/src/time.ts#L8)

将日期格式化成指定格式的字符串

## Parameters

### date?

要格式化的日期，不传时默认当前时间，也可以是一个时间戳等

`string` | `number` | `Date`

### fmt?

`string`

目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss

## Returns

`string`

返回格式化后的日期字符串
