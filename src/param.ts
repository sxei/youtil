/**
 * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
 * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
 * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
 * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
 * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */
export const getParam = (name: string, url: string = location.search) => {
    return (new RegExp(`(^|\\?|&)${name}=(.*?)(?=&|#|$)`, 'g').exec(url) || [])[2];
};

/**
 * 从URL中获取int参数
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */
export const getParamInt = (name: string, url: string = location.search) => {
    return parseInt(getParam(name, url) || '0', 10);
};

/**
 * 获取某个URL的全部参数
 * getParams('?a=1&b=2#cc') // {a: '1', b: '2'}
 * @param url 
 * @returns 参数对象
 */
export const getParams = (url = location.search) => {
    const search = ((url || '').split('?').pop() || '').split('#')[0] || '';
    const params: any = {};
    search.split('&').map(item => item.split('=')).forEach(([key, value]) => {
        params[key] = value || '';
    });
    return params;
};

/**
 * 给URL设置参数，如果已经存在，替换之，兼容hash存在的情况
 * setParam('a', '123', '?a=1&b=2&a=3#d') // '?a=123&b=2&a=123#d'
 * setParam('d', '444', '?a=1&b=2&a=3#d') // '?a=1&b=2&a=3&d=444#d'
 * @param {Object} name 参数名
 * @param {Object} value 参数值
 * @param {Object} url 如果不传默认当前页面URL
 */
export const setParam = (name: string, value: string | number, url?: string) => {
    url = url || `${location.pathname}${location.search}`;
    // 如果参数已经存在，替换之
    if (getParam(name, url) !== undefined) {
        return url.replace(new RegExp(`(^|\\?|&)${name}=(.*?)(?=&|#|$)`, 'g'), `$1${name}=${value}`);
    }
    const [pathname, hash] = url.split('#'); // 处理存在hash的情况
    return `${pathname}${pathname.indexOf('?') < 0 ? '?' : '&'}${name}=${value}${hash ? '#' : ''}${hash || ''}`;
};

/**
 * 删除URL中某个参数
 * delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
 * delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
 * delParam('a', '?a=1#d') // '#d'
 * @param name 参数名
 * @param url 要删除的URL，默认当前页面URL
 * @returns 处理完后的URL
 */
export const delParam = (name: string, url: string) => {
    url = url || `${location.pathname}${location.search}`;
    return url.replace(new RegExp(`(^|\\?|&)${name}=.*?(&|#|$)`, 'g'), (_m, $1, $2) => $2 === '&' ? $1 : $2);
};

/**
 * 将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值
 * @param data 一个普通对象，如果对象嵌对象则会被自动转为JSON
 * @returns 返回类似 a=1&b=2 的字符串
 */
export const toUrlParams = (data: any) => {
    return Object.keys(data || {})
        .filter(key => data[key] !== undefined)
        .map((key) => {
            const value = typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key];
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&');
};

