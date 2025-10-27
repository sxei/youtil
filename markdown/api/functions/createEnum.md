---
toc: content
title: createEnum
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / createEnum

# Function: createEnum()

> **createEnum**\<`T`\>(`items`): [`EnumType`](../type-aliases/EnumType.md)\<`T`\>

Defined in: [enum.ts:38](https://github.com/sxei/youtil/blob/af6f491cb17306b7a3da8a0d38d7e2a76b38fa40/src/enum.ts#L38)

创建一个枚举，支持多种高级用法：<br>
const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])<br>
console.log(enums.MAN) // 1<br>
console.log(enums.pick('MAN')) // 对象<br>
console.log(enums.pick(1)) // 对象<br>
console.log(enums.pickLabel('MAN')) // 男<br>
console.log(enums.pickValue('MAN')) // 1<br>
console.log(enums) // 数组对象

## Type Parameters

### T

`T` *extends* `EnumItem`\<`string`, `string` \| `number`\>[]

## Parameters

### items

`T`

## Returns

[`EnumType`](../type-aliases/EnumType.md)\<`T`\>
