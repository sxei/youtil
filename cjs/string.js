/**
 * 格式化一段JSON字符串，支持解析非标准JSON
 * 不同于绝大多数格式化工具，本方法支持设置缩进方式以及左大括号是否换行
 * @start 2016-08-24
 * @param {Object} json 要格式化的json串
 * @param {Object} indent 缩进方式，可以是若干个空格和tab，默认tab缩进，如 2个空格："  "、4个空格："	"、tab："	"
 * @param {Object} leftBracesInSameLine 左大括号是否保持在同一行，默认 false
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
    formatJson: function() {
        return formatJson;
    },
    getRandom: function() {
        return getRandom;
    },
    getRandomStr: function() {
        return getRandomStr;
    },
    toUnderline: function() {
        return toUnderline;
    },
    toHump: function() {
        return toHump;
    }
});
var _instanceof = require("@swc/helpers/lib/_instanceof.js").default;
var formatJson = function(json, indent, leftBracesInSameLine) {
    var getIndentStr = function getIndentStr(level) {
        var str = "";
        for(var i = 0; i < level; i++)str += indent || "	";
        return str;
    };
    function format(obj, level) {
        level = level === undefined ? 0 : level;
        var result = "";
        // 如果是object或者array
        if (typeof obj === "object" && obj != null) {
            var isArray = _instanceof(obj, Array);
            var idx = 0;
            result += "".concat(isArray ? "[" : "{", "\n");
            for(var i in obj){
                result += idx++ > 0 ? ",\n" : ""; // 如果不是数组或对象的第一个内容，追加逗号
                var nextIsObj = typeof obj[i] === "object" && obj[i] != null;
                var indentStr = getIndentStr(level + 1);
                result += isArray && nextIsObj ? "" : indentStr; // 如果当前是数组并且子项是对象，无需缩进
                result += isArray ? "" : '"'.concat(i, '": ').concat(nextIsObj && !leftBracesInSameLine ? "\n" : "");
                result += !nextIsObj || nextIsObj && leftBracesInSameLine && !isArray ? "" : indentStr;
                result += format(obj[i], level + 1); // 递归调用
            }
            result += "\n".concat(getIndentStr(level)).concat(isArray ? "]" : "}");
        } else {
            // 如果是 null、number、boolean、string
            var quot = typeof obj === "string" ? '"' : ""; // 是否是字符串
            result += "".concat(quot).concat(obj).concat(quot);
        }
        return result;
    }
    // eslint-disable-next-line no-eval
    return format(eval("(".concat(json, ")"))); // 使用eval的好处是可以解析非标准JSON
};
var getRandom = function(start, end) {
    if (typeof start === "number") {
        if (typeof end === "undefined") {
            end = start;
            start = 0;
        }
        return start + Math.floor(Math.random() * (end - start));
    } else if (_instanceof(start, Array)) {
        if (typeof end === "undefined") {
            if (start.length === 0) return null;
            if (start.length === 1) return start[0];
            return start[Math.floor(Math.random() * start.length)];
        } else {
            start.sort(function() {
                return Math.random() > 0.5 ? 1 : -1;
            });
            return start.slice(0, end);
        }
    }
    return Math.random();
};
var getRandomStr = function(length, type) {
    length = length || 18;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz0123456789".split("");
    if (type === "number") chars = "0123456789".split("");
    var result = "";
    for(var i = 0; i < length; i++)result += getRandom(chars);
    return result;
};
var toUnderline = function(str, flag) {
    return str.replace(/([A-Z])/g, function(m, $1) {
        return "".concat(flag || "_").concat($1.toLowerCase());
    });
};
var toHump = function(str, flag) {
    return str.replace(new RegExp("".concat(flag || "_", "(\\w)"), "g"), function(_m, $1) {
        return $1.toUpperCase();
    });
};
