[**youtil**](../README.md)

***

[youtil](../globals.md) / setParam

# Function: setParam()

> **setParam**(`name`, `value`, `url`?): `string`

Defined in: [param.ts:46](https://github.com/sxei/youtil/blob/d651a480a157140911b201985e6146ba23662439/src/param.ts#L46)

给URL设置参数，如果已经存在，替换之，兼容hash存在的情况
setParam('a', '123', '?a=1&b=2&a=3#d') // '?a=123&b=2&a=123#d'
setParam('d', '444', '?a=1&b=2&a=3#d') // '?a=1&b=2&a=3&d=444#d'

## Parameters

### name

`string`

参数名

### value

参数值

`string` | `number`

### url?

`string`

如果不传默认当前页面URL

## Returns

`string`
