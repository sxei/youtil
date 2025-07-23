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
        hasMask: false,
        maskColor: "#00000070",
        onCancel: null,
        cancelInline: false,
        id: "com_global_page_loading"
    };
    config = Object.assign({}, defaultConfig, config);
    var id = config.id, hasMask = config.hasMask, maskColor = config.maskColor, onCancel = config.onCancel, cancelInline = config.cancelInline;
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
        style.innerHTML = "\n		.".concat(id, " {\n			position: fixed;\n			left: 0;\n			top: 0;\n			width: 100vw;\n			height: 100vh;\n			display: flex;\n			justify-content: center;\n			align-items: center;\n			pointer-events: none;\n			z-index: 10000;\n		}\n		.").concat(id, ".show-mask {\n			pointer-events: unset;\n			background: #00000070;\n		}\n		.").concat(id, " .mask-wrapper {\n			position: fixed;\n		}\n		.").concat(id, " .loading-wrapper {\n			width: 120px;\n			height: 120px;\n			z-index: 8000;\n			background: rgba(0, 0, 0, 0.6);\n			border-radius: 8px;\n			text-align: center;\n			color: white;\n			display: flex;\n			justify-content: center;\n			flex-direction: column;\n			align-items: center;\n			pointer-events: initial;\n			line-height: 1.3;\n		}\n		.").concat(id, " .loading-wrapper img {\n			width: 50px;\n			height: 50px;\n			margin-bottom: 10px;\n		}\n		.").concat(id, " .loading-wrapper a {\n			color: #6ab2ff;\n		}");
        document.head.appendChild(style);
    }
    dom.innerHTML = '\n		<div class="loading-wrapper">\n			<img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n			<div>\n				<span>'.concat(text, "</span>\n				").concat(cancelInline ? "" : "<br />", "\n				").concat(onCancel ? '<a href="javascript:;" class="cancel">取消</a>' : "", "\n			</div>\n		</div>");
    if (onCancel) {
        var btn = dom.querySelector(".cancel");
        btn && btn.addEventListener("click", function() {
            hideLoading();
            onCancel();
        });
    }
    dom.addEventListener("click", function() {
        hideLoading();
    });
    dom.style.display = "flex";
    dom.style.background = hasMask ? maskColor : "transparent";
    dom.className = "".concat(id, " ").concat(hasMask ? "show-mask" : "");
    if (seconds > 0) window[timeoutKey] = setTimeout(function() {
        hideLoading();
    }, seconds * 1000);
};
var hideLoading = function() {
    var id = "com_global_page_loading";
    var loading = document.getElementById(id);
    if (loading) loading.style.display = "none";
};
