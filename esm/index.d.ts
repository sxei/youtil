interface IShowLoadingConfig {
    hasMask?: boolean;
    maskColor?: string;
    cancelInline?: boolean;
    onCancel?: Function;
    id?: string;
}
declare const _default: {
    /**
     * 将日期格式化成指定格式的字符串
     * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳等
     * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
     * @returns 返回格式化后的日期字符串
     */
    formatDate(date?: Date | number | string, fmt?: string): string;
    /**
     * 将字符串解析成日期
     * @param str 输入的日期字符串，如'2014-09-13'
     * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
     * @returns 解析后的Date类型日期
     */
    parseDate(str: string, fmt?: string): Date;
    /**
     * 显示全局loading
     * @param {*} text
     * @param {*} seconds
     * @param {*} options
     */
    showLoading(text?: string, seconds?: number, config?: IShowLoadingConfig): void;
    hideLoading(): void;
    /**
     * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
     * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
     * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
     * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
     * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
     * @param {*} name 参数名
     * @param {*} url 要获取的URL，默认当前地址
     */
    getParam(name: string, url?: string): string;
    /**
     * 从URL中获取int参数
     * @param {*} name 参数名
     * @param {*} url 要获取的URL，默认当前地址
     */
    getParamInt(name: string, url?: string): number;
    /**
     * 获取某个URL的全部参数
     * getParams('?a=1&b=2#cc') // {a: '1', b: '2'}
     * @param url
     * @returns 参数对象
     */
    getParams(url?: string): any;
    /**
     * 给URL设置参数，如果已经存在，替换之，兼容hash存在的情况
     * setParam('a', '123', '?a=1&b=2&a=3#d') // '?a=123&b=2&a=123#d'
     * setParam('d', '444', '?a=1&b=2&a=3#d') // '?a=1&b=2&a=3&d=444#d'
     * @param {Object} name 参数名
     * @param {Object} value 参数值
     * @param {Object} url 如果不传默认当前页面URL
     */
    setParam(name: string, value: string | number, url?: string): string;
    /**
     * 删除URL中某个参数
     * delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
     * delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
     * delParam('a', '?a=1#d') // '#d'
     * @param name 参数名
     * @param url 要删除的URL，默认当前页面URL
     * @returns 处理完后的URL
     */
    delParam(name: string, url: string): string;
    /**
     * 休息一段时间，单位毫秒
     * 示例：await sleep(200); // 休息200毫秒
     * @param time 要休息的时间，单位毫秒，不传默认0
     * @returns
     */
    sleep: (time?: number) => Promise<unknown>;
    /**
     * 基于JSON的简单深拷贝
     * @param obj 要复制的对象，非对象格式会直接返回
     * @returns
     */
    deepCopy: (obj: any) => any;
    /**
     * HTML编码，例如将 【"】 变成 【&quot;】
     * @param {*} html 待编码的原始字符串，如果传入对象会遍历处理
     * @returns
     */
    encodeHtml(html: string | any): any;
    /**
     * HTML解码，例如将 【&quot;】 变成 【"】
     * @param {*} html 已经被HTML编码过的字符串，如果传入对象会遍历处理
     * @returns
     */
    decodeHtml(html: string | any): any;
};
export default _default;
