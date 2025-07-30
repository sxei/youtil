---
toc: content
title: createEnum
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / createEnum

# Function: createEnum()

> **createEnum**\<`T`\>(`items`): [`EnumType`](../type-aliases/EnumType.md)\<`T`\>

Defined in: [enum.ts:38](https://github.com/sxei/youtil/blob/3b581c08fcff87306a01ca309f1a64565d5e1e6a/src/enum.ts#L38)

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

`T` *extends* readonly [`EnumItem`](../type-aliases/EnumItem.md)\<`string`, `string` \| `number`\>[]

## Parameters

### items

`T`

## Returns

[`EnumType`](../type-aliases/EnumType.md)\<`T`\>
