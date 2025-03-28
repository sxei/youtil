/**
 * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
 * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
 * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
 * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
 * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */
export declare const getParam: (name: string, url?: string) => string;
/**
 * 从URL中获取int参数
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */
export declare const getParamInt: (name: string, url?: string) => number;
/**
 * 获取某个URL的全部参数
 * getParams('?a=1&b=2#cc') // {a: '1', b: '2'}
 * @param url
 * @returns 参数对象
 */
export declare const getParams: (url?: string) => any;
/**
 * 给URL设置参数，如果已经存在，替换之，兼容hash存在的情况
 * setParam('a', '123', '?a=1&b=2&a=3#d') // '?a=123&b=2&a=123#d'
 * setParam('d', '444', '?a=1&b=2&a=3#d') // '?a=1&b=2&a=3&d=444#d'
 * @param {Object} name 参数名
 * @param {Object} value 参数值
 * @param {Object} url 如果不传默认当前页面URL
 */
export declare const setParam: (name: string, value: string | number, url?: string) => string;
/**
 * 删除URL中某个参数
 * delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
 * delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
 * delParam('a', '?a=1#d') // '#d'
 * @param name 参数名
 * @param url 要删除的URL，默认当前页面URL
 * @returns 处理完后的URL
 */
export declare const delParam: (name: string, url: string) => string;
/**
 * 将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值
 * @param data 一个普通对象，如果对象嵌对象则会被自动转为JSON
 * @returns 返回类似 a=1&b=2 的字符串
 */
export declare const toUrlParams: (data: any) => string;
