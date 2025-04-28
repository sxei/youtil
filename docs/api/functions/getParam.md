[**youtil**](../README.md)

***

[youtil](../globals.md) / getParam

# Function: getParam()

> **getParam**(`name`, `url`): `string`

Defined in: [param.ts:10](https://github.com/sxei/youtil/blob/d651a480a157140911b201985e6146ba23662439/src/param.ts#L10)

从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined

## Parameters

### name

`string`

参数名

### url

`string` = `location.search`

要获取的URL，默认当前地址

## Returns

`string`
