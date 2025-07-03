/**
 * 基于JSON的简单深拷贝
 * @param obj 要复制的对象，非对象格式会直接返回
 * @returns
 */ export var deepCopy = function(obj) {
    if (!obj || typeof obj !== "object") return obj;
    return JSON.parse(JSON.stringify(obj));
};
/**
 * HTML编码，例如将 【"】 变成 【&quot;】
 * @param {*} html 待编码的原始字符串，如果传入对象会遍历处理
 * @returns
 */ export var encodeHtml = function(html) {
    if (typeof html === "string") {
        var div = document.createElement("div");
        div.innerText = html;
        return div.innerHTML;
    } else if (typeof html === "object" && html) for(var i in html)html[i] = encodeHtml(html[i]);
    return html;
};
/**
 * HTML解码，例如将 【&quot;】 变成 【"】
 * @param {*} html 已经被HTML编码过的字符串，如果传入对象会遍历处理
 * @returns
 */ export var decodeHtml = function(html) {
    if (typeof html === "string") {
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.innerText;
    } else if (typeof html === "object" && html) for(var i in html)html[i] = decodeHtml(html[i]);
    return html;
};
/**
 * 复制一段文本到剪贴板，如果失败会抛出异常，推荐使用姿势：
 * await copyTextToClipboard('要复制的文本', message => alert(`复制到剪贴板失败：${message}`));
 * alert('复制到剪贴板成功！');
 * @param {*} text 要复制的文本
 * @param {*} onFailure 失败回调，接受一个 message 参数
 * @param {*} supportSilent 是否支持后台静默复制，如果是则优先采用 execCommand
 * @returns
 */ export var copyToClipboard = function(text, onFailure, supportSilent) {
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
/**
 * 获取身份证号第18位校验码
 * @params cid 身份证号码，17或18位均可
 */ export var getIdCardLastChar = function(cid) {
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
/**
 * 检测某个身份证ID是否合法，包括长度和最后一位校验码检测
 * @params cid 身份证号码，必须是18位
 */ export var validateIdCard = function(cid) {
    if (!cid || cid.length !== 18) {
        console.error("身份证号不是18位！");
        return false;
    }
    return "".concat(getIdCardLastChar(cid)) === cid.charAt(17);
};
/**
 * 键盘键值映射，如: keyCodes.ctrl == 17
 */ export var keyCodes = function() {
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
