[**youtil**](../README.md)

***

[youtil](../globals.md) / createEnum

# Function: createEnum()

> **createEnum**\<`T`\>(`items`): `EnumType`\<`T`\>

Defined in: [enum.ts:29](https://github.com/sxei/youtil/blob/4999cb04c9c5f142b047826e2208c5a9abceefdb/src/enum.ts#L29)

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
