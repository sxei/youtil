---
toc: content
order: 3
---
# 枚举 createEnum

## createEnum 枚举工具函数

你是否遇到过这样的烦恼？定义好了一个`[{ label: '成功', value: 1 }]`数组，有时候需要根据`label`找value，有时候需要根据`value`找label、或者找整个对象，有时候value太多了无意义需要取一个别名，使用`createEnum()`函数可以终结上述烦恼。

```tsx preview
/**
 * defaultShowCode: true
 */
import { createEnum } from 'youtil';

// 使用示例，注意一定不要忘了结尾的 as const
const genders = createEnum([
	{ label: '男', value: 1, key: 'MAN', others: 123 },
    // value 可以是数字也可以是字符串
	{ label: '女', value: '2', key: 'WOMAN' },
] as const);
console.log(genders.MAN); // 支持鼠标悬停显示值为 1
console.log(genders.pick('MAN')); // 返回MAN的完整对象
console.log(genders.pick(1)); // 返回MAN的完整对象
console.log(genders.pickLabel(1)); // 返回 男
console.log(genders.pickValue('MAN')); // 返回 1
console.log(genders.pickKey(1)); // 返回MAN的完整对象
console.log(genders.pickByLabel('男')); // 返回MAN的完整对象
console.log(genders[0]); // 返回MAN的完整对象
console.log(genders); // 输出完整数组
console.log([...genders]); // 去除附加属性，还原为纯数组
console.log(genders.length); // 输出2

export default () => '请查看控制台'
```

## API

点此查看[API](/api/functions/create-enum)文档。