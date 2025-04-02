/** showLoading配置 */ "use strict";
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
    showLoading: function() {
        return showLoading;
    },
    hideLoading: function() {
        return hideLoading;
    }
});
var showLoading = function() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "请稍候", seconds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10, config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var defaultConfig = {
        hasMask: true,
        maskColor: "transparent",
        onCancel: null,
        cancelInline: false,
        id: "com_global_page_loading"
    };
    config = Object.assign({}, defaultConfig, config);
    var id = config.id;
    var timeoutKey = "_".concat(id, "_timeout");
    if (window[timeoutKey]) clearTimeout(window[timeoutKey]);
    var dom = document.getElementById(id);
    if (!dom) {
        dom = document.createElement("div");
        dom.id = id;
        dom.className = id;
        document.body.append(dom);
    }
    var styleId = "".concat(id, "_style");
    if (!document.getElementById(styleId)) {
        var style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = "\n        .".concat(id, " {\n            position: fixed;\n            top: calc(50vh - 60px);\n            left: calc(50vw - 60px);\n            width: 120px;\n            height: 120px;\n            z-index: 8000;\n            background: rgba(0, 0, 0, 0.6);\n            border-radius: 8px;\n            text-align: center;\n            color: white;\n            padding-top: 20px;\n        }\n        .").concat(id, " img {\n            width: 50px;\n            margin-bottom: 10px;\n        }");
        document.head.appendChild(style);
    }
    dom.innerHTML = "\n        ".concat(config.hasMask ? '<div class="mask-wrapper" style="background-color: '.concat(config.maskColor, '"></div>') : "", '\n        <div class="loading-wrapper">\n            <div class="loading-content">\n                <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                <div>').concat(text).concat(config.cancelInline ? " " : "</div>", "\n                ").concat(config.onCancel ? '<a href="javascript:;" class="cancel">取消</a>' : "", "\n                ").concat(config.cancelInline ? "</div>" : "", "\n            </div>\n        </div>");
    if (config.onCancel) {
        var btn = dom.querySelector(".cancel");
        btn && btn.addEventListener("click", function() {
            hideLoading();
            config.onCancel();
        });
    }
    dom.style.display = "block";
    if (seconds > 0) window[timeoutKey] = setTimeout(function() {
        hideLoading();
    }, seconds * 1000);
};
var hideLoading = function() {
    var id = "com_global_page_loading";
    var loading = document.getElementById(id);
    if (loading) loading.style.display = "none";
};
