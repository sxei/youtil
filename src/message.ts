export interface onMessageListener {
	(eventName: string, ...payload: any[]): Promise<any> | any;
	(...payload: any[]): Promise<any> | any;
}
export interface initWindowMessageOptions {
	/** 是否开启 debug 模式 */
	debug?: boolean;
}

/**
 * 初始化窗口通信
 * @param {string} scene 场景，必传，互相通信的2个窗口必须保证 scene 相同
 * @param {Window} targetWindow 目标窗口对象(父窗口或子窗口)，互相通信时允许有一方不传，自动从 event.source 获取
 * @returns {{postMessage: function, onMessage: function}} 返回postMessage和onMessage方法
 */
export function initWindowMessage(scene: string, targetWindow?: Window, options?: initWindowMessageOptions) {
	// iframe模式下自动设置目标窗口
	if (!targetWindow && window !== window.parent) {
		targetWindow = window.parent;
	}
	// window.open模式下自动设置目标窗口
	if (!targetWindow && window.opener) {
		targetWindow = window.opener;
	}
	const { debug } = options || {};
	// 回调函数集合
	const callbacks = new Map<string, { resolve: Function; reject: Function }>();
	// 监听器集合
	const eventListeners = new Map<string, onMessageListener[]>();
	// 生成唯一ID
	const getRandomId = () => Math.random().toString(36).substring(2);

	// postMessage不支持传递function，所以将其存储在本地，通过functionId做一层映射
	const localFunctions: Record<string, Function> = {};
	const fnPrefix = '_local_function_';
	// 存储函数
	function storageFunction(fn: Function) {
		const functionId = `${fnPrefix}${getRandomId()}`;
		localFunctions[functionId] = fn;
		return functionId;
	}

	// 简单循环处理function特殊参数，暂不考虑递归
	const handleFunction = (payload: any[], handle: (item: any) => any) => {
		return (
			payload?.map((item) => {
				if (typeof item === 'object') {
					for (const key in item) {
						item[key] = handle(item[key]);
					}
				}
				return handle(item);
			}) || []
		);
	};

	/**
	 * 发送消息并等待响应
	 * @param {string} eventName 事件名称
	 * @param {*} [payload] 负载数据
	 * @returns {Promise} 返回一个Promise，resolve接收回调数据
	 */
	function postMessage<T>(eventName: string, ...payload: any[]): Promise<T> | void {
		if (!targetWindow) {
			console.warn('TargetWindow is null.');
			return;
		}
		return new Promise<T>((resolve, reject) => {
			const callbackId = getRandomId();
			callbacks.set(callbackId, { resolve, reject });
			targetWindow.postMessage(
				{
					scene,
					type: 'event',
					eventName,
					payload: handleFunction(payload, (item) => (typeof item === 'function' ? storageFunction(item) : item)),
					callbackId,
				},
				'*',
			);
		});
	}

	// 监听消息
	window.addEventListener('message', async (e) => {
		// 过滤无效消息
		if (!e.data || e.data.scene !== scene) return;
		if (debug) {
			console.log(`收到来自 ${e.origin || ''} 的消息：`, e.data);
		}
		// 始终根据 source 自动更新 targetWindow
		// 父子iframe场景下，如果iframe经常动态销毁和重建，自动更新可以减少一些逻辑处理
		targetWindow = e.source as Window;
		const { type = 'event', eventName, payload, callbackId } = e.data;
		if (type === 'event') {
			const payloads = handleFunction(payload, (item) => {
				if (typeof item === 'string' && item.startsWith(fnPrefix)) {
					// 由于我们是通过prefix来判断是否为本地函数，这里必须修改前缀避免再次被转换
					const key = `getFn_${item}`;
					return (...params: any[]) => postMessage('executeLocalFunction', key, ...params);
				}
				return item;
			});
			// 处理事件
			const listeners = eventListeners.get(eventName) || [];
			// 支持模糊匹配
			const wildcardListeners = eventListeners.get('*') || [];
			try {
				// 执行所有监听器并收集结果
				const results = await Promise.all(listeners.map((listener) => Promise.resolve(listener(...payloads))));
				// 注意模糊匹配时参数顺序不一样，第一个参数是 eventName
				const wildcardResults = await Promise.all(wildcardListeners.map((listener) => Promise.resolve(listener(eventName, ...payloads))));
				// 如果有回调ID，将最后一个监听器的结果作为回调返回
				if (callbackId) {
					// 优先返回精确监听的值，其次再返回模糊匹配的值
					const result = results[results.length - 1] || wildcardResults[wildcardResults.length - 1];
					// 如果没有精确监听，且模糊匹配也没有返回值，不触发回调
					// 精确监听和普通监听唯一的不同是，必须要有返回值才会触发回调
					if (!listeners.length && !result) {
						return;
					}
					targetWindow.postMessage(
						{
							scene,
							type: 'callback',
							callbackId,
							payload: result,
						},
						'*',
					);
				}
			} catch (error) {
				console.error(error);
				// 捕获错误并返回给调用方
				if (callbackId) {
					targetWindow.postMessage(
						{
							scene,
							type: 'callback',
							callbackId,
							error: error || 'unknown error',
						},
						'*',
					);
				}
			}
		} else if (type === 'callback' && callbackId) {
			// 处理回调
			const callback = callbacks.get(callbackId);
			if (callback) {
				if (e.data.error) {
					callback.reject(e.data.error);
				} else {
					callback.resolve(e.data.payload);
				}
				// 回调使用完删除
				callbacks.delete(callbackId);
			}
		}
	});

	/**
	 * 监听消息
	 * @param {string} eventName 事件名称
	 * @param {function} listener 监听函数(支持异步)：(...params) => callbackValue
	 */
	function onMessage(eventName: string, listener: onMessageListener) {
		if (!eventListeners.has(eventName)) {
			eventListeners.set(eventName, []);
		}
		eventListeners.get(eventName).push(listener);
	}

	/**
	 * 取消消息监听事件绑定
	 * @param eventName 要取消的事件名，如果不传，取消所有消息监听
	 * @param listener 要取消的具体监听方法，如果不传，取消所有名为 eventName 的事件
	 */
	function offMessage(eventName?: string, listener?: onMessageListener) {
		if (!eventName) {
			eventListeners.clear();
			return;
		}
		if (!listener) {
			eventListeners.delete(eventName);
			return;
		}
		const listeners = eventListeners.get(eventName);
		if (listeners?.length) {
			eventListeners.set(eventName, listeners.filter(item => item !== listener));
		}
	}

	onMessage('executeLocalFunction', (functionId, ...params) => {
		functionId = functionId?.replace('getFn_', '') || '';
		if (!localFunctions[functionId]) throw new Error(`未找到本地缓存方法：${functionId}`);
		return localFunctions[functionId](...params);
	});

	// 如果2个窗口都没设置 targetWindow，自动连接探活
	postMessage('auto-connect');
	return {
		postMessage,
		onMessage,
		offMessage,
	};
}
const { onMessage } = initWindowMessage('')
onMessage('', (a, b) => {

});