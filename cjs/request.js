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
    request: function() {
        return request;
    },
    Request: function() {
        return Request;
    }
});
var _asyncToGenerator = require("@swc/helpers/lib/_async_to_generator.js").default;
var _instanceof = require("@swc/helpers/lib/_instanceof.js").default;
var _objectSpread = require("@swc/helpers/lib/_object_spread.js").default;
var _tsGenerator = require("@swc/helpers/lib/_ts_generator.js").default;
var _param = require("./param");
var request = function() {
    var _ref = _asyncToGenerator(function(url, options) {
        var defaultOptions, _ref, params, data, formData, json, method, headers, baseUrl, fetchOptions, checkSuccess, afterRequest, errorHandler, errorMessage, responseConverter, onFetchResponse, body, key, resp, e, _e_response;
        return _tsGenerator(this, function(_state) {
            switch(_state.label){
                case 0:
                    defaultOptions = {
                        errorMessage: "系统繁忙，请稍后再试",
                        errorHandler: function(msg) {
                            var _options_toastHandler;
                            if (!(options === null || options === void 0 ? void 0 : options.silent)) options === null || options === void 0 ? void 0 : (_options_toastHandler = options.toastHandler) === null || _options_toastHandler === void 0 ? void 0 : _options_toastHandler.call(options, msg);
                            // 抛出异常，阻止执行之后的操作
                            throw new Error(msg);
                        },
                        baseUrl: "",
                        headers: {},
                        fetchOptions: {
                            credentials: "include"
                        },
                        // eslint-disable-next-line eqeqeq
                        checkSuccess: function(resp) {
                            return (resp === null || resp === void 0 ? void 0 : resp.code) == 0 || (resp === null || resp === void 0 ? void 0 : resp.code) == 200;
                        },
                        toastHandler: function(msg) {
                            return console.error("[您还没有配置toastHandler，请根据您的UI组件库配置合适的提示方法] ".concat(msg || ""));
                        },
                        onFetchResponse: function(response) {
                            if (response.status === 200) return response.json();
                            var errorResponse = {
                                code: response.status,
                                status: response.status,
                                message: response.statusText,
                                headers: response.headers,
                                // 返回整个response备用，但是一般不推荐用户直接使用
                                _response: response
                            };
                            var error = new Error(errorResponse.message);
                            error.response = errorResponse;
                            throw error;
                        }
                    };
                    options = Object.assign({}, defaultOptions, options || {});
                    // 防止对象引用产生严重bug
                    options.fetchOptions = _objectSpread({}, options.fetchOptions || {});
                    _ref = options || {}, params = _ref.params, data = _ref.data, formData = _ref.formData, json = _ref.json, method = _ref.method, headers = _ref.headers, baseUrl = _ref.baseUrl, fetchOptions = _ref.fetchOptions, checkSuccess = _ref.checkSuccess, afterRequest = _ref.afterRequest, errorHandler = _ref.errorHandler, errorMessage = _ref.errorMessage, responseConverter = _ref.responseConverter, onFetchResponse = _ref.onFetchResponse;
                    // fetchOptions 里面的 headers 优先级高于外部的 headers
                    fetchOptions.headers = _objectSpread({}, headers || {}, fetchOptions.headers || {});
                    if (params) {
                        fetchOptions.method = method || "GET";
                        url = "".concat(url).concat(url.indexOf("?") >= 0 ? "&" : "?").concat((0, _param.toUrlParams)(params));
                    }
                    if (data) Object.assign(fetchOptions, {
                        method: method || "POST",
                        body: (0, _param.toUrlParams)(data),
                        headers: _objectSpread({
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                        }, fetchOptions.headers || {})
                    });
                    else if (formData) {
                        body = formData;
                        if (!_instanceof(formData, FormData)) {
                            body = new FormData();
                            for(var key in formData)body.append(key, formData[key]);
                        }
                        Object.assign(fetchOptions, {
                            method: method || "POST",
                            body: body
                        });
                    } else if (json) Object.assign(fetchOptions, {
                        method: method || "POST",
                        body: JSON.stringify(json),
                        headers: _objectSpread({
                            "Content-Type": "application/json;charset=utf-8"
                        }, fetchOptions.headers || {})
                    });
                    resp = null;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        fetch("".concat(baseUrl || "").concat(url), fetchOptions).then(onFetchResponse)
                    ];
                case 2:
                    resp = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    console.error(e);
                    afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(false, {
                        message: e === null || e === void 0 ? void 0 : e.message
                    });
                    errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.message) || errorMessage || "", e.response);
                    return [
                        2,
                        undefined
                    ];
                case 4:
                    resp = responseConverter ? responseConverter(resp) : resp;
                    if (checkSuccess === null || checkSuccess === void 0 ? void 0 : checkSuccess(resp)) {
                        afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(true, resp);
                        return [
                            2,
                            resp.data
                        ];
                    } else {
                        afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(false, resp);
                        errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(resp.message || resp.msg || errorMessage || "", resp);
                        return [
                            2,
                            undefined
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function request(url, options) {
        return _ref.apply(this, arguments);
    };
}();
var Request = function Request(req, overrideOptions) {
    var overrideDefaultOptions = overrideOptions;
    if (!overrideOptions) {
        overrideDefaultOptions = req;
        req = request;
    }
    return function(url, options) {
        return req(url, _objectSpread({}, overrideDefaultOptions || {}, options || {}));
    };
};
