/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳等
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
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
    formatDate: function() {
        return formatDate;
    },
    parseDate: function() {
        return parseDate;
    },
    sleep: function() {
        return sleep;
    }
});
var _instanceof = require("@swc/helpers/lib/_instanceof.js").default;
var formatDate = function(date, fmt) {
    var _loop = function(i) {
        fmt = fmt.replace(new RegExp("".concat(i, "+"), "g"), function(m) {
            var val = "".concat(obj[i]);
            if (i === "w") return (m.length > 2 ? "星期" : "周") + week[val];
            for(var j = 0, len = val.length; j < m.length - len; j++)val = "0".concat(val);
            return m.length === 1 ? val : val.substring(val.length - m.length);
        });
    };
    if (!date) return "";
    if (typeof date === "number") // 1687682453445
    date = new Date(date);
    else if (typeof date === "string") {
        if (/^\d{12,13}$/g.test(date)) // '1687682453445'
        date = new Date(parseInt(date, 10));
        else if (/^.{10}T.{8,12}Z?$/g.test(date)) // '2019-01-01T00:00:00.000Z'
        date = new Date(date);
        else return date;
    }
    if (!_instanceof(date, Date)) throw new Error("formatDate error: not date.");
    if (isNaN(date === null || date === void 0 ? void 0 : date.getFullYear())) throw new Error("formatDate error: invalid date.");
    fmt = fmt || "yyyy-MM-dd HH:mm:ss";
    var obj = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        q: Math.floor((date.getMonth() + 3) / 3),
        w: date.getDay(),
        H: date.getHours(),
        h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        m: date.getMinutes(),
        s: date.getSeconds(),
        S: date.getMilliseconds()
    };
    var week = [
        "天",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六"
    ];
    // eslint-disable-next-line guard-for-in
    for(var i in obj)_loop(i);
    return fmt;
};
var parseDate = function(str, fmt) {
    fmt = fmt || "yyyy-MM-dd";
    var obj = {
        y: 0,
        M: 1,
        d: 0,
        H: 0,
        h: 0,
        m: 0,
        s: 0,
        S: 0
    };
    fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function(m, $1, $2, $3, $4) {
        str = str.replace(new RegExp("".concat($1, "(\\d{").concat($2.length, "})").concat($4)), function(_m, _$1) {
            obj[$3] = parseInt(_$1);
            return "";
        });
        return "";
    });
    obj.M--; // 月份是从0开始的，所以要减去1
    var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
    if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
    return date;
};
var sleep = function(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms || 0);
    });
};
