/**
 * 基于JSON的简单深拷贝
 * @param obj 要复制的对象，非对象格式会直接返回
 * @returns
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
    deepCopy: function() {
        return deepCopy;
    },
    encodeHtml: function() {
        return encodeHtml;
    },
    decodeHtml: function() {
        return decodeHtml;
    },
    copyToClipboard: function() {
        return copyToClipboard;
    },
    getIdCardLastChar: function() {
        return getIdCardLastChar;
    },
    validateIdCard: function() {
        return validateIdCard;
    },
    keyCodes: function() {
        return keyCodes;
    }
});
var deepCopy = function(obj) {
    if (!obj || typeof obj !== "object") return obj;
    return JSON.parse(JSON.stringify(obj));
};
var encodeHtml = function(html) {
    if (typeof html === "string") {
        var div = document.createElement("div");
        div.innerText = html;
        return div.innerHTML;
    } else if (typeof html === "object" && html) for(var i in html)html[i] = encodeHtml(html[i]);
    return html;
};
var decodeHtml = function(html) {
    if (typeof html === "string") {
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.innerText;
    } else if (typeof html === "object" && html) for(var i in html)html[i] = decodeHtml(html[i]);
    return html;
};
var copyToClipboard = function(text, onFailure, supportSilent) {
    if (!text) throw new Error("text can not be empty.");
    onFailure = onFailure || function(msg) {
        return console.error("复制到剪贴板失败：".concat(msg || ""));
    };
    // 优先采用现代化API
    if (navigator.clipboard && !supportSilent) // 注意 writeText API 要求：文档被激活 & 页面已启用HTTPS
    return navigator.clipboard.writeText(text).catch(function(e) {
        onFailure(e.message);
        throw e;
    });
    // execCommand 原本是一个同步API，这里为了和 writeText 保持一致统一包成proimse
    return new Promise(function(resolve, reject) {
        var input = document.createElement("input");
        input.value = text;
        input.style.cssText = "position:fixed;left:0;top:0;opacity:0;";
        document.body.appendChild(input);
        input.select();
        try {
            if (document.execCommand("copy")) resolve();
            else {
                var message = "Failed to execute 'document.execCommand'.";
                onFailure(message);
                reject(new Error(message));
            }
        } catch (e) {
            onFailure(e.message);
            reject(e);
        } finally{
            document.body.removeChild(input);
        }
    });
};
var getIdCardLastChar = function(cid) {
    if (!cid || cid.length < 17) throw new Error("传入的身份证号长度必须>=17");
    var weights = [
        7,
        9,
        10,
        5,
        8,
        4,
        2,
        1,
        6,
        3,
        7,
        9,
        10,
        5,
        8,
        4,
        2
    ]; // 十七位数字权重
    var validates = [
        "1",
        "0",
        "X",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2"
    ]; // 校验码
    var sum = 0;
    for(var i = 0; i < 17; i++)sum += parseInt(cid.charAt(i), 10) * weights[i];
    return validates[sum % 11];
};
var validateIdCard = function(cid) {
    if (!cid || cid.length !== 18) {
        console.error("身份证号不是18位！");
        return false;
    }
    return "".concat(getIdCardLastChar(cid)) === cid.charAt(17);
};
var keyCodes = function() {
    var keys = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46
    };
    // 数字0-9
    for(var i = 48; i <= 57; i++)keys[String.fromCharCode(i)] = i;
    // 字母a-z
    for(var i1 = 65; i1 <= 90; i1++)keys[String.fromCharCode(i1).toLowerCase()] = i1;
    // 小键盘数字0-9，这里用num0-num9表示
    for(var i2 = 96; i2 <= 105; i2++)keys["num".concat(i2 - 96)] = i2;
    // f1-f12功能键
    for(var i3 = 112; i3 <= 123; i3++)keys["f".concat(i3 - 111)] = i3;
    return keys;
}();
