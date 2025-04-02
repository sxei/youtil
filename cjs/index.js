"use strict";
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
    }
});
var _exportStar = require("@swc/helpers/lib/_export_star.js").default;
_exportStar(require("./loading"), exports);
_exportStar(require("./param"), exports);
_exportStar(require("./request"), exports);
_exportStar(require("./time"), exports);
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
