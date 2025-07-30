export type EnumItem<K extends string, V extends string | number> = {
    /** 显示出来的名称 */
    label: string;
    /** 实际传递的值 */
    value: V;
    /** 方便记忆的英文别名，可选 */
    key?: K;
    [key: string]: any;
};
export type EnumType<T extends ReadonlyArray<EnumItem<string, string | number>>> = T & {
    [K in T[number]['key']]: Extract<T[number], {
        key: K;
    }>['value'];
} & {
    /** 根据 key 或者 value 查找整个对象 */
    pick: (keyOrValue: string | number) => T[number] | undefined;
    /** 根据 key 或者 value 查找 label */
    pickLabel: (keyOrValue: string | number) => T[number]['label'] | undefined;
    /** 根据 key 查找 value */
    pickValue: (keyOrValue: string | number) => T[number]['value'] | undefined;
    /** 根据 value 查找 key */
    pickKey: (keyOrValue: string | number) => T[number]['key'] | undefined;
    /** 根据 label 查找整个对象 */
    pickByLabel: (label: string) => T[number] | undefined;
};
/**
 * 创建一个枚举，支持多种高级用法：<br>
 * const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])<br>
 * console.log(enums.MAN) // 1<br>
 * console.log(enums.pick('MAN')) // 对象<br>
 * console.log(enums.pick(1)) // 对象<br>
 * console.log(enums.pickLabel('MAN')) // 男<br>
 * console.log(enums.pickValue('MAN')) // 1<br>
 * console.log(enums) // 数组对象
 * @param items
 * @returns
 */
export declare function createEnum<T extends ReadonlyArray<EnumItem<string, string | number>>>(items: T): EnumType<T>;
