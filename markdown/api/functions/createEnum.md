---
toc: content
title: createEnum
---
[**youtil**](../README.md)

***

[youtil](../globals.md) / createEnum

# Function: createEnum()

> **createEnum**\<`T`\>(`items`): `EnumType`\<`T`\>

Defined in: [enum.ts:29](https://github.com/sxei/youtil/blob/b488c7f70ed7c3406efe20a0ac6e98bf131225b1/src/enum.ts#L29)

创建一个枚举，支持多种高级用法：
const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])
console.log(enums.MAN) // 1
console.log(enums.pick('MAN')) // 对象
console.log(enums.pick(1)) // 对象
console.log(enums.pickLabel('MAN')) // 男
console.log(enums.pickValue('MAN')) // 1
console.log(enums) // 数组对象

## Type Parameters

### T

`T` *extends* readonly `EnumItem`\<`string`, `string` \| `number`\>[]

## Parameters

### items

`T`

## Returns

`EnumType`\<`T`\>
