import { toUrlParams } from './param';
import { parseMock } from './mockRequest';

export { mockRequest, resetMock, configMock } from './mockRequest';

/** requestAPI的第二个参数类型 */
export interface IRequestOptions {
	/** GET请求时传递的参数 */
	params?: Record<string, any>;
	/** POST请求时传递的参数 */
	data?: Record<string, any>;
	/** 采用formData模式请求，可以传入普通的对象，也可以传入标准的formData */
	formData?: Record<string, any>;
	/** postJson请求时传递的参数 */
	json?: Record<string, any>;
	/** API前缀，不传默认为空 */
	baseUrl?: string;
	/** 请求方法，绝大部分情况无需手动指定 */
	method?: string;
	/** headers */
	headers?: Record<string, any>;
	/** 其它自定义fetchOptions，优先级高于上面所有参数 */
	fetchOptions?: RequestInit;
	/** 请求完成之后触发的钩子，无论成功与否均会触发 */
	afterRequest?: (success: boolean, resp?: any) => void;
	/** 判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200 */
	checkSuccess?: (resp: any) => boolean;
	/** 对响应进行自定义格式化处理，包含 checkSuccess 全部能力 */
	responseConverter?: (resp: any) => any;
	/** @deprecated 后端未返回 message 时的默认异常文案，由于名称经常引发歧义，估改名为 defaultErrorMessage */
	errorMessage?: string;
	/** 后端未返回 message 时的默认异常文案 */
	defaultErrorMessage?: string;
	/** 发生异常时的处理方法，一般不太建议重写此方法 */
	errorHandler?: (message: string, resp: any, options: IRequestOptions) => void;
	/** 自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码 */
	toastHandler?: (message: string) => void;
	/** 是否关闭默认的异常toast */
	silent?: boolean;
	/** 自定义 fetch.then() ，非常底层的一个方法，非必要请勿使用 */
	onFetchResponse?: (response: Response) => any;
	/** 切换loading状态的方法，会在开始请求前置为true，结束时置为false。为什么设计这个方法？在非hooks场景下更方便的切换loading状态 */
	setLoading?: (loading?: boolean) => void;
	/** 覆盖默认的 resp.message 自定义异常抛出文案，也支持传入方法，注意返回''和undefined效果不同 */
	overrideMessage?: string | ((resp: any) => string);
	/** 如需允许手动终止请求，请传入 signal */
	signal?: AbortSignal;
}

/** 合并2个options对象 */
const mergeOptions = (ops1: IRequestOptions, ops2?: IRequestOptions) => {
	// 对象比较特殊，需要特殊处理
	const headers = Object.assign({}, ops1?.headers || {}, ops2?.headers || {});
	const fetchOptions = Object.assign({}, ops1?.fetchOptions || {}, ops2?.fetchOptions || {});
	return Object.assign({}, ops1 || {}, ops2 || {}, { headers, fetchOptions });
};

/**
 * 支持传入自定义属性的Error对象，包括 cause
 */
class MyError extends Error {
	constructor(message: string, options?: Record<string, any>) {
		super(message);
		Object.assign(this, options || {});
	}
}

/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */
const request = async <T = any>(url: string, options?: IRequestOptions) => {
	const defaultOptions: IRequestOptions = {
		errorMessage: '系统繁忙，请稍后再试',
		errorHandler: (message) => {
			if (!options?.silent && message) {
				options?.toastHandler?.(message);
			}
			// 抛出异常，阻止执行之后的操作
			throw new Error(message);
		},
		baseUrl: '',
		headers: {},
		fetchOptions: {
			credentials: 'include',
		},
		// eslint-disable-next-line eqeqeq
		checkSuccess: (resp) => resp?.code == 0 || resp?.code == 200,
		toastHandler: (msg: string) => console.error(`[您还没有配置toastHandler，请根据您的UI组件库配置合适的提示方法] ${msg || ''}`),
		onFetchResponse: (response) => {
			if (response.status === 200) {
				return response.json();
			}
			throw new MyError(response.statusText, {
				response: {
					...response,
					code: response.status,
					message: response.statusText,
					/** 标记这是HTTP原始响应，并非服务端返回数据 */
					isHttpResponse: true,
				},
			});
		},
	};
	options = mergeOptions(defaultOptions, options);
	const {
		params,
		data,
		formData,
		json,
		method,
		headers,
		baseUrl,
		fetchOptions,
		checkSuccess,
		afterRequest,
		errorHandler,
		errorMessage,
		responseConverter,
		onFetchResponse,
		setLoading,
		overrideMessage,
		signal,
	} = options || {};
	const defaultErrorMessage = options?.defaultErrorMessage || errorMessage;
	// fetchOptions 里面的 headers 优先级高于外部的 headers
	fetchOptions.headers = { ...(headers || {}), ...(fetchOptions.headers || {}) };
	if (!fetchOptions.signal && signal) {
		fetchOptions.signal = signal;
	}
	if (params) {
		fetchOptions.method = method || 'GET';
		url = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}${toUrlParams(params)}`;
	}
	if (data) {
		Object.assign(fetchOptions, {
			method: method || 'POST',
			body: toUrlParams(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
				...(fetchOptions.headers || {}),
			},
		});
	} else if (formData) {
		let body = formData;
		if (!(formData instanceof FormData)) {
			body = new FormData();
			for (const key in formData) {
				body.append(key, formData[key]);
			}
		}
		Object.assign(fetchOptions, {
			method: method || 'POST',
			body,
		});
	} else if (json) {
		Object.assign(fetchOptions, {
			method: method || 'POST',
			body: JSON.stringify(json),
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				...(fetchOptions.headers || {}),
			},
		});
	}
	let resp = null;
	setLoading?.(true);
	try {
		let targetUrl = `${/^(http|\/\/)/g.test(url) ? '' : (baseUrl || '')}${url}`;
		// 如果当前是blob地址，目标地址又是 // 开头，自动修正
		if (targetUrl.indexOf('//') === 0 && location.protocol === 'blob:') {
			targetUrl = `${location.pathname.split(':')?.[0]}:${targetUrl}`;
		}
		resp = await parseMock(targetUrl, fetchOptions);
		if (!resp) {
			resp = await fetch(targetUrl, fetchOptions).then(onFetchResponse);
		}
	} catch (e: any) {
		console.error(e);
		setLoading?.(false);
		afterRequest?.(false, e.response);
		const localMessage = typeof overrideMessage === 'function' ? overrideMessage(e.response) : overrideMessage;
		errorHandler?.(localMessage ?? (e.response?.message || defaultErrorMessage), e.response, options);
		return undefined;
	}
	setLoading?.(false);
	resp = responseConverter ? responseConverter(resp) : resp;
	if (checkSuccess?.(resp)) {
		afterRequest?.(true, resp);
		return resp.data as T;
	} else {
		afterRequest?.(false, resp);
		const localMessage = typeof overrideMessage === 'function' ? overrideMessage(resp) : overrideMessage;
		errorHandler?.(localMessage ?? (resp.message || defaultErrorMessage), resp, options);
		return undefined;
	}
};

/**
 * 基于当前 request 实例化一个新的 request 函数并覆盖部分配置
 * @param this
 * @param overrideOptions 要覆盖的配置
 * @returns
 */
const create = function (this: any, overrideOptions: IRequestOptions) {
	const mergedOptions = mergeOptions(this.overrideDefaultOptions, overrideOptions);
	const newRequest = (url: string, options?: IRequestOptions) => {
		return request(url, mergeOptions(mergedOptions, options));
	};
	// 记录相比于 defaultOptions 之外所有合并后的覆盖options，供下次 create 使用
	newRequest.overrideDefaultOptions = mergedOptions;
	newRequest.create = create.bind(newRequest);
	return newRequest;
};
request.create = create.bind(request);

export { request };

type IRequest = typeof request;
interface RequestConstructor {
	new (overrideOptions: IRequestOptions): IRequest;
	new (req: IRequest, overrideOptions: IRequestOptions): IRequest;
}

/**
 * 支持实例化一个新的request方法，覆盖默认的部分配置项
 * @deprecated 推荐使用 request.create() 实例化新的request
 */
export const Request: RequestConstructor = function (this: IRequest, req: IRequest | IRequestOptions, overrideOptions: IRequestOptions) {
	let overrideDefaultOptions = overrideOptions;
	if (!overrideOptions) {
		overrideDefaultOptions = req as IRequestOptions;
		req = request;
	}
	return <T>(url: string, options?: IRequestOptions) => {
		return (req as IRequest)<T>(url, {
			...(overrideDefaultOptions || {}),
			...(options || {}),
		});
	};
} as any;
