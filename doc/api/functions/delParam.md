[**youtil**](../README.md)

***

[youtil](../globals.md) / delParam

# Function: delParam()

> **delParam**(`name`, `url`): `string`

Defined in: [param.ts:65](https://github.com/sxei/youtil/blob/4999cb04c9c5f142b047826e2208c5a9abceefdb/src/param.ts#L65)

删除URL中某个参数
delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
delParam('a', '?a=1#d') // '#d'

## Parameters

### name

`string`

参数名

### url

`string`

要删除的URL，默认当前页面URL

## Returns

`string`

处理完后的URL
