[**youtil**](../README.md)

***

[youtil](../globals.md) / parseDate

# Function: parseDate()

> **parseDate**(`str`, `fmt`?): `Date`

Defined in: [time.ts:67](https://github.com/sxei/youtil/blob/4999cb04c9c5f142b047826e2208c5a9abceefdb/src/time.ts#L67)

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
