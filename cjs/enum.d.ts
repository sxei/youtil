type EnumItem<K extends string, V extends string | number> = {
    label: string;
    value: V;
    key: K;
    [key: string]: any;
};
type EnumType<T extends ReadonlyArray<EnumItem<string, string | number>>> = T & {
    [K in T[number]['key']]: Extract<T[number], {
        key: K;
    }>['value'];
} & {
    pick: (keyOrValue: string | number) => T[number] | undefined;
    pickLabel: (keyOrValue: string | number) => T[number]['label'] | undefined;
    pickValue: (keyOrValue: string | number) => T[number]['value'] | undefined;
    pickKey: (keyOrValue: string | number) => T[number]['key'] | undefined;
};
/**
 * 创建一个枚举，支持多种高级用法：
 * const enums = createEnum([{ key: 'MAN', label: '男', value: 1 }])
 * console.log(enums.MAN) // 1
 * console.log(enums.pick('MAN')) // 对象
 * console.log(enums.pick(1)) // 对象
 * console.log(enums.pickLabel('MAN')) // 男
 * console.log(enums.pickValue('MAN')) // 1
 * console.log(enums) // 数组对象
 * @param items
 * @returns
 */
export declare function createEnum<T extends ReadonlyArray<EnumItem<string, string | number>>>(items: T): EnumType<T>;
export {};
