import _assert_this_initialized from "@swc/helpers/src/_assert_this_initialized.mjs";
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _instanceof from "@swc/helpers/src/_instanceof.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _wrap_native_super from "@swc/helpers/src/_wrap_native_super.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
import { toUrlParams } from "./param";
/** 合并2个options对象 */ var mergeOptions = function(ops1, ops2) {
    // 对象比较特殊，需要特殊处理
    var headers = Object.assign({}, (ops1 === null || ops1 === void 0 ? void 0 : ops1.headers) || {}, (ops2 === null || ops2 === void 0 ? void 0 : ops2.headers) || {});
    var fetchOptions = Object.assign({}, (ops1 === null || ops1 === void 0 ? void 0 : ops1.fetchOptions) || {}, (ops2 === null || ops2 === void 0 ? void 0 : ops2.fetchOptions) || {});
    return Object.assign({}, ops1 || {}, ops2 || {}, {
        headers: headers,
        fetchOptions: fetchOptions
    });
};
/**
 * 支持传入自定义属性的Error对象，包括 cause
 */ var MyError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(MyError, Error1);
    var _super = _create_super(MyError);
    function MyError(message, options) {
        _class_call_check(this, MyError);
        var _this;
        _this = _super.call(this, message);
        Object.assign(_assert_this_initialized(_this), options || {});
        return _this;
    }
    return MyError;
}(_wrap_native_super(Error));
/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */ var request = function() {
    var _ref = _async_to_generator(function(url, options) {
        var defaultOptions, _ref, params, data, formData, json, method, headers, baseUrl, fetchOptions, checkSuccess, afterRequest, errorHandler, errorMessage, responseConverter, onFetchResponse, setLoading, overrideMessage, defaultErrorMessage, body, key, resp, _location_pathname_split, targetUrl, e, _e_response, localMessage, localMessage1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    defaultOptions = {
                        errorMessage: "系统繁忙，请稍后再试",
                        errorHandler: function(message) {
                            var _options_toastHandler;
                            if (!(options === null || options === void 0 ? void 0 : options.silent) && message) options === null || options === void 0 ? void 0 : (_options_toastHandler = options.toastHandler) === null || _options_toastHandler === void 0 ? void 0 : _options_toastHandler.call(options, message);
                            // 抛出异常，阻止执行之后的操作
                            throw new Error(message);
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
                            throw new MyError(response.statusText, {
                                response: _object_spread_props(_object_spread({}, response), {
                                    code: response.status,
                                    message: response.statusText,
                                    /** 标记这是HTTP原始响应，并非服务端返回数据 */ isHttpResponse: true
                                })
                            });
                        }
                    };
                    options = mergeOptions(defaultOptions, options);
                    _ref = options || {}, params = _ref.params, data = _ref.data, formData = _ref.formData, json = _ref.json, method = _ref.method, headers = _ref.headers, baseUrl = _ref.baseUrl, fetchOptions = _ref.fetchOptions, checkSuccess = _ref.checkSuccess, afterRequest = _ref.afterRequest, errorHandler = _ref.errorHandler, errorMessage = _ref.errorMessage, responseConverter = _ref.responseConverter, onFetchResponse = _ref.onFetchResponse, setLoading = _ref.setLoading, overrideMessage = _ref.overrideMessage;
                    defaultErrorMessage = (options === null || options === void 0 ? void 0 : options.defaultErrorMessage) || errorMessage;
                    // fetchOptions 里面的 headers 优先级高于外部的 headers
                    fetchOptions.headers = _object_spread({}, headers || {}, fetchOptions.headers || {});
                    if (params) {
                        fetchOptions.method = method || "GET";
                        url = "".concat(url).concat(url.indexOf("?") >= 0 ? "&" : "?").concat(toUrlParams(params));
                    }
                    if (data) Object.assign(fetchOptions, {
                        method: method || "POST",
                        body: toUrlParams(data),
                        headers: _object_spread({
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
                        headers: _object_spread({
                            "Content-Type": "application/json;charset=utf-8"
                        }, fetchOptions.headers || {})
                    });
                    resp = null;
                    setLoading === null || setLoading === void 0 ? void 0 : setLoading(true);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    targetUrl = "".concat(/^(http|\/\/)/g.test(url) ? "" : baseUrl || "").concat(url);
                    // 如果当前是blob地址，目标地址又是 // 开头，自动修正
                    if (targetUrl.indexOf("//") === 0 && location.protocol === "blob:") targetUrl = "".concat((_location_pathname_split = location.pathname.split(":")) === null || _location_pathname_split === void 0 ? void 0 : _location_pathname_split[0], ":").concat(targetUrl);
                    return [
                        4,
                        fetch(targetUrl, fetchOptions).then(onFetchResponse)
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
                    setLoading === null || setLoading === void 0 ? void 0 : setLoading(false);
                    afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(false, e.response);
                    localMessage = typeof overrideMessage === "function" ? overrideMessage(e.response) : overrideMessage;
                    errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(localMessage !== null && localMessage !== void 0 ? localMessage : ((_e_response = e.response) === null || _e_response === void 0 ? void 0 : _e_response.message) || defaultErrorMessage, e.response, options);
                    return [
                        2,
                        undefined
                    ];
                case 4:
                    setLoading === null || setLoading === void 0 ? void 0 : setLoading(false);
                    resp = responseConverter ? responseConverter(resp) : resp;
                    if (checkSuccess === null || checkSuccess === void 0 ? void 0 : checkSuccess(resp)) {
                        afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(true, resp);
                        return [
                            2,
                            resp.data
                        ];
                    } else {
                        afterRequest === null || afterRequest === void 0 ? void 0 : afterRequest(false, resp);
                        localMessage1 = typeof overrideMessage === "function" ? overrideMessage(resp) : overrideMessage;
                        errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(localMessage1 !== null && localMessage1 !== void 0 ? localMessage1 : resp.message || defaultErrorMessage, resp, options);
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
/**
 * 基于当前 request 实例化一个新的 request 函数并覆盖部分配置
 * @param this
 * @param overrideOptions 要覆盖的配置
 * @returns
 */ var create = function create1(overrideOptions) {
    var mergedOptions = mergeOptions(this.overrideDefaultOptions, overrideOptions);
    var newRequest = function(url, options) {
        return request(url, mergeOptions(mergedOptions, options));
    };
    // 记录相比于 defaultOptions 之外所有合并后的覆盖options，供下次 create 使用
    newRequest.overrideDefaultOptions = mergedOptions;
    newRequest.create = create.bind(newRequest);
    return newRequest;
};
request.create = create.bind(request);
export { request };
/**
 * 支持实例化一个新的request方法，覆盖默认的部分配置项
 * @deprecated 推荐使用 request.create() 实例化新的request
 */ export var Request = function Request(req, overrideOptions) {
    var overrideDefaultOptions = overrideOptions;
    if (!overrideOptions) {
        overrideDefaultOptions = req;
        req = request;
    }
    return function(url, options) {
        return req(url, _object_spread({}, overrideDefaultOptions || {}, options || {}));
    };
};
