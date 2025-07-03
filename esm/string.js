/**
 * 格式化一段JSON字符串，支持解析非标准JSON
 * 不同于绝大多数格式化工具，本方法支持设置缩进方式以及左大括号是否换行
 * @start 2016-08-24
 * @param {Object} json 要格式化的json串
 * @param {Object} indent 缩进方式，可以是若干个空格和tab，默认tab缩进，如 2个空格："  "、4个空格："	"、tab："	"
 * @param {Object} leftBracesInSameLine 左大括号是否保持在同一行，默认 false
 */ import _instanceof from "@swc/helpers/src/_instanceof.mjs";
export var formatJson = function(json, indent, leftBracesInSameLine) {
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
/**
 * 获取各种随机数，支持如下几种调用方式：
 * getRandom() 返回0-1的随机小数，等同于Math.random()，0 <= result < 1
 * getRandom(start, end) 返回start-end的随机整数，start <= result < end
 * getRandom(end) 返回0-end的随机整数，0 <= result < end
 * getRandom(array) 随机返回数组中的某一个内容
 * getRandom(array, count) 随机从数组中返回长度为count的不重复内容组成的新数组，如果不足count个，返回全部 并乱序
 * @param {Object} start
 * @param {Object} end
 * @return {Object} 
 */ export var getRandom = function(start, end) {
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
/**
 * 获取随机字符串
 * @param length 字符串长度
 * @param type all 表示所有，number表示仅数字，默认所有
 * @return string
 */ export var getRandomStr = function(length, type) {
    length = length || 18;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz0123456789".split("");
    if (type === "number") chars = "0123456789".split("");
    var result = "";
    for(var i = 0; i < length; i++)result += getRandom(chars);
    return result;
};
/**
 * 字符串转下划线形式，示例：getParam 转 get_param
 * @param str 要转换的字符串
 * @param flag 默认下划线-，也可以传其它字符
 */ export var toUnderline = function(str, flag) {
    return str.replace(/([A-Z])/g, function(m, $1) {
        return "".concat(flag || "_").concat($1.toLowerCase());
    });
};
/**
 * 字符串转驼峰形式
 * 示例一： toHump('get_param')，返回getParam
 * 示例二： toHump('font-size','-')，返回fontSize
 * @param str
 * @param 分割的标志，默认为“_”
 */ export var toHump = function(str, flag) {
    return str.replace(new RegExp("".concat(flag || "_", "(\\w)"), "g"), function(_m, $1) {
        return $1.toUpperCase();
    });
};
