/**
 * 从URL中获取某个参数，如果不存在返回 undefined ，如果存在多个同名参数，返回第一个匹配值
 * getParam('a', '?a=1&b=&c=3&c=33#abc') // '1'
 * getParam('b', '?a=1&b=&c=3&c=33#abc') // ''
 * getParam('c', '?a=1&b=&c=3&c=33#abc') // 3
 * getParam('d', '?a=1&b=&c=3&c=33#abc') // undefined
 * @param {*} name 参数名
 * @param {*} url 要获取的URL，默认当前地址
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getParam: function() {
        return getParam;
    },
    getParamInt: function() {
        return getParamInt;
    },
    getParams: function() {
        return getParams;
    },
    setParam: function() {
        return setParam;
    },
    delParam: function() {
        return delParam;
    },
    toUrlParams: function() {
        return toUrlParams;
    }
});
var _slicedToArray = require("@swc/helpers/lib/_sliced_to_array.js").default;
var getParam = function(name) {
    var url = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.search;
    return (new RegExp("(^|\\?|&)".concat(name, "=(.*?)(?=&|#|$)"), "g").exec(url) || [])[2];
};
var getParamInt = function(name) {
    var url = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.search;
    return parseInt(getParam(name, url) || "0", 10);
};
var getParams = function() {
    var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : location.search;
    var search = ((url || "").split("?").pop() || "").split("#")[0] || "";
    var params = {};
    search.split("&").map(function(item) {
        return item.split("=");
    }).forEach(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
        params[key] = value || "";
    });
    return params;
};
var setParam = function(name, value, url) {
    url = url || "".concat(location.pathname).concat(location.search);
    // 如果参数已经存在，替换之
    if (getParam(name, url) !== undefined) return url.replace(new RegExp("(^|\\?|&)".concat(name, "=(.*?)(?=&|#|$)"), "g"), "$1".concat(name, "=").concat(value));
    var _url_split = _slicedToArray(url.split("#"), 2), pathname = _url_split[0], hash = _url_split[1]; // 处理存在hash的情况
    return "".concat(pathname).concat(pathname.indexOf("?") < 0 ? "?" : "&").concat(name, "=").concat(value).concat(hash ? "#" : "").concat(hash || "");
};
var delParam = function(name, url) {
    url = url || "".concat(location.pathname).concat(location.search);
    return url.replace(new RegExp("(^|\\?|&)".concat(name, "=.*?(&|#|$)"), "g"), function(_m, $1, $2) {
        return $2 === "&" ? $1 : $2;
    });
};
var toUrlParams = function(data) {
    return Object.keys(data || {}).filter(function(key) {
        return data[key] !== undefined;
    }).map(function(key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
    }).join("&");
};
