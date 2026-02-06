---
toc: content
title: formatNumber
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / formatNumber

# Function: formatNumber()

> **formatNumber**(`number`?, `options`?): `any`

Defined in: [format.ts:53](https://github.com/sxei/youtil/blob/61594afa3671728b8ff4a347dd6d485914ed84a4/src/format.ts#L53)

将数字格式化成更易读取的格式，例如 189、3.8万、427万、29亿

## Parameters

### number?

要格式化的数字

`string` | `number`

### options?

其它配置项

`string` |

\{ `style`: `"short"` \| `"fin"` \| `"en-fin"`; `toFixed`: `number`; \}

其它配置项

#### style?

`"short"` \| `"fin"` \| `"en-fin"`

格式化风格，short 类似48万 这种，fin 类似 3,4531 ，en-fin 类似 34,531

#### toFixed?

`number`

要保留的小数点，不传不做任何处理

## Returns

`any`

返回格式化后的数字
