import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
/**
 * 初始化窗口通信
 * @param {string} scene 场景，必传，互相通信的2个窗口必须保证 scene 相同
 * @param {Window} targetWindow 目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取
 * @returns {{postMessage: function, onMessage: function}} 返回postMessage和onMessage方法
 */ export function initWindowMessage(scene, targetWindow) {
    var storageFunction = // 存储函数
    function storageFunction(fn) {
        var functionId = "".concat(fnPrefix).concat(getRandomId());
        localFunctions[functionId] = fn;
        return functionId;
    };
    var postMessage = /**
	 * 发送消息并等待响应
	 * @param {string} eventName 事件名称
	 * @param {*} [payload] 负载数据
	 * @returns {Promise} 返回一个Promise，resolve接收回调数据
	 */ function postMessage(eventName) {
        for(var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            payload[_key - 1] = arguments[_key];
        }
        if (!targetWindow) {
            console.warn("TargetWindow is null.");
            return;
        }
        return new Promise(function(resolve, reject) {
            var callbackId = getRandomId();
            callbacks.set(callbackId, {
                resolve: resolve,
                reject: reject
            });
            targetWindow.postMessage({
                scene: scene,
                type: "event",
                eventName: eventName,
                payload: handleFunction(payload, function(item) {
                    return typeof item === "function" ? storageFunction(item) : item;
                }),
                callbackId: callbackId
            }, "*");
        });
    };
    var onMessage = /**
	 * 监听消息
	 * @param {string} eventName 事件名称
	 * @param {function} listener 监听函数(支持异步)：(...params) => callbackValue
	 */ function onMessage(eventName, listener) {
        if (!eventListeners.has(eventName)) eventListeners.set(eventName, []);
        eventListeners.get(eventName).push(listener);
    };
    // iframe模式下自动设置目标窗口
    if (!targetWindow && window !== window.parent) targetWindow = window.parent;
    // window.open模式下自动设置目标窗口
    if (!targetWindow && window.opener) targetWindow = window.opener;
    // 回调函数集合
    var callbacks = new Map();
    // 监听器集合
    var eventListeners = new Map();
    // 生成唯一ID
    var getRandomId = function() {
        return Math.random().toString(36).substring(2);
    };
    // postMessage不支持传递function，所以将其存储在本地，通过functionId做一层映射
    var localFunctions = {};
    var fnPrefix = "_local_function_";
    // 简单循环处理function特殊参数，暂不考虑递归
    var handleFunction = function(payload, handle) {
        return (payload === null || payload === void 0 ? void 0 : payload.map(function(item) {
            if (typeof item === "object") for(var key in item)item[key] = handle(item[key]);
            return handle(item);
        })) || [];
    };
    // 监听消息
    window.addEventListener("message", function() {
        var _ref = _async_to_generator(function(e) {
            var _e_data, type, eventName, payload, callbackId, payloads, listeners, wildcardListeners, results, wildcardResults, result, error, callback;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // 过滤无效消息
                        if (!e.data || e.data.scene !== scene) return [
                            2
                        ];
                        // console.log('收到来自这里的消息：', location.href, e.target.location.href, e.data);
                        // 始终根据 source 自动更新 targetWindow
                        // 父子iframe场景下，如果iframe经常动态销毁和重建，自动更新可以减少一些逻辑处理
                        targetWindow = e.source;
                        _e_data = e.data, type = _e_data.type, eventName = _e_data.eventName, payload = _e_data.payload, callbackId = _e_data.callbackId;
                        if (!(type === "event")) return [
                            3,
                            6
                        ];
                        payloads = handleFunction(payload, function(item) {
                            if (typeof item === "string" && item.startsWith(fnPrefix)) {
                                // 由于我们是通过prefix来判断是否为本地函数，这里必须修改前缀避免再次被转换
                                var key = "getFn_".concat(item);
                                return function() {
                                    for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                                        params[_key] = arguments[_key];
                                    }
                                    return postMessage.apply(void 0, [
                                        "executeLocalFunction",
                                        key
                                    ].concat(_to_consumable_array(params)));
                                };
                            }
                            return item;
                        });
                        listeners = eventListeners.get(eventName) || [];
                        wildcardListeners = eventListeners.get("*") || [];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            Promise.all(listeners.map(function(listener) {
                                return Promise.resolve(listener.apply(void 0, _to_consumable_array(payloads)));
                            }))
                        ];
                    case 2:
                        results = _state.sent();
                        return [
                            4,
                            Promise.all(wildcardListeners.map(function(listener) {
                                return Promise.resolve(listener.apply(void 0, [
                                    eventName
                                ].concat(_to_consumable_array(payloads))));
                            }))
                        ];
                    case 3:
                        wildcardResults = _state.sent();
                        // 如果有回调ID，将最后一个监听器的结果作为回调返回
                        if (callbackId) {
                            result = results[results.length - 1] || wildcardResults[wildcardResults.length - 1];
                            // 如果没有精确监听，且模糊匹配也没有返回值，不触发回调
                            // 精确监听和普通监听唯一的不同是，必须要有返回值才会触发回调
                            if (!listeners.length && !result) return [
                                2
                            ];
                            targetWindow.postMessage({
                                scene: scene,
                                type: "callback",
                                callbackId: callbackId,
                                payload: result
                            }, "*");
                        }
                        return [
                            3,
                            5
                        ];
                    case 4:
                        error = _state.sent();
                        console.error(error);
                        // 捕获错误并返回给调用方
                        if (callbackId) targetWindow.postMessage({
                            scene: scene,
                            type: "callback",
                            callbackId: callbackId,
                            error: error || "unknown error"
                        }, "*");
                        return [
                            3,
                            5
                        ];
                    case 5:
                        return [
                            3,
                            7
                        ];
                    case 6:
                        if (type === "callback" && callbackId) {
                            callback = callbacks.get(callbackId);
                            if (callback) {
                                if (e.data.error) callback.reject(e.data.error);
                                else callback.resolve(e.data.payload);
                                // 回调使用完删除
                                callbacks.delete(callbackId);
                            }
                        }
                        _state.label = 7;
                    case 7:
                        return [
                            2
                        ];
                }
            });
        });
        return function(e) {
            return _ref.apply(this, arguments);
        };
    }());
    onMessage("executeLocalFunction", function(functionId) {
        for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            params[_key - 1] = arguments[_key];
        }
        var _localFunctions;
        functionId = (functionId === null || functionId === void 0 ? void 0 : functionId.replace("getFn_", "")) || "";
        if (!localFunctions[functionId]) throw new Error("未找到本地缓存方法：".concat(functionId));
        return (_localFunctions = localFunctions)[functionId].apply(_localFunctions, _to_consumable_array(params));
    });
    // 如果2个窗口都没设置 targetWindow，自动连接探活
    postMessage("auto-connect");
    return {
        postMessage: postMessage,
        onMessage: onMessage
    };
}
