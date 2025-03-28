/**
 * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
 * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
 * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
 * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
 * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */ import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
export var getParam = function(name) {
    var url = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.search;
    return (new RegExp("(^|\\?|&)".concat(name, "=(.*?)(?=&|#|$)"), "g").exec(url) || [])[2];
};
/**
 * 从URL中获取int参数
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */ export var getParamInt = function(name) {
    var url = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.search;
    return parseInt(getParam(name, url) || "0", 10);
};
/**
 * 获取某个URL的全部参数
 * getParams('?a=1&b=2#cc') // {a: '1', b: '2'}
 * @param url 
 * @returns 参数对象
 */ export var getParams = function() {
    var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : location.search;
    var search = ((url || "").split("?").pop() || "").split("#")[0] || "";
    var params = {};
    search.split("&").map(function(item) {
        return item.split("=");
    }).forEach(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
        params[key] = value || "";
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
 */ export var setParam = function(name, value, url) {
    url = url || "".concat(location.pathname).concat(location.search);
    // 如果参数已经存在，替换之
    if (getParam(name, url) !== undefined) return url.replace(new RegExp("(^|\\?|&)".concat(name, "=(.*?)(?=&|#|$)"), "g"), "$1".concat(name, "=").concat(value));
    var _url_split = _sliced_to_array(url.split("#"), 2), pathname = _url_split[0], hash = _url_split[1]; // 处理存在hash的情况
    return "".concat(pathname).concat(pathname.indexOf("?") < 0 ? "?" : "&").concat(name, "=").concat(value).concat(hash ? "#" : "").concat(hash || "");
};
/**
 * 删除URL中某个参数
 * delParam('a', '?a=1&b=2&a=3#d') // '?b=2#d'
 * delParam('b', '?a=1&b=2&a=3#d') // '?a=1&a=3#d'
 * delParam('a', '?a=1#d') // '#d'
 * @param name 参数名
 * @param url 要删除的URL，默认当前页面URL
 * @returns 处理完后的URL
 */ export var delParam = function(name, url) {
    url = url || "".concat(location.pathname).concat(location.search);
    return url.replace(new RegExp("(^|\\?|&)".concat(name, "=.*?(&|#|$)"), "g"), function(_m, $1, $2) {
        return $2 === "&" ? $1 : $2;
    });
};
/**
 * 将一个普通对象转为 a=1&b=2 的URL格式，会自动过滤undefined的值
 * @param data 一个普通对象，如果对象嵌对象则会被自动转为JSON
 * @returns 返回类似 a=1&b=2 的字符串
 */ export var toUrlParams = function(data) {
    return Object.keys(data || {}).filter(function(key) {
        return data[key] !== undefined;
    }).map(function(key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
    }).join("&");
};
