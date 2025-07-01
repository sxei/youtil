import { toUrlParams } from './param';

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
    /** 后端未返回 message 时的兜底异常文案 */
    errorMessage?: string;
    /** 发生异常时的处理方法，一般不太建议重写此方法 */
    errorHandler?: (message: string, resp?: any) => void;
    /** 自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码 */
    toastHandler?: (message: string) => void;
    /** 是否关闭默认的异常toast */
    silent?: boolean;
    /** 自定义 fetch.then() ，非常底层的一个方法，非必要请勿使用 */
    onFetchResponse?: (response: Response) => any;
}

/** 合并2个options对象 */
const mergeOptions = (ops1: IRequestOptions, ops2?: IRequestOptions) => {
    // 对象比较特殊，需要特殊处理
    const headers = Object.assign({}, ops1?.headers || {}, ops2?.headers || {});
    const fetchOptions = Object.assign({}, ops1?.fetchOptions || {}, ops2?.fetchOptions || {});
    return Object.assign({}, ops1 || {}, ops2 || {}, { headers, fetchOptions });
};

/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */
const request = async <T = any>(url: string, options?: IRequestOptions) => {
    const defaultOptions: IRequestOptions = {
        errorMessage: '系统繁忙，请稍后再试',
        errorHandler: (msg) => {
            if (!options?.silent) {
                options?.toastHandler?.(msg);
            }
            // 抛出异常，阻止执行之后的操作
            throw new Error(msg);
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
            const errorResponse = {
                code: response.status,
                status: response.status,
                message: response.statusText,
                headers: response.headers,
                // 返回整个response备用，但是一般不推荐用户直接使用
                _response: response,
            };
            const error: any = new Error(errorResponse.message);
            error.response = errorResponse;
            throw error;
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
    } = options || {};
    // fetchOptions 里面的 headers 优先级高于外部的 headers
    fetchOptions.headers = { ...(headers || {}), ...(fetchOptions.headers || {}) };
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
    try {
        let targetUrl = `${/^(http|\/\/)/g.test(url) ? '' : (baseUrl || '')}${url}`;
        // 如果当前是blob地址，目标地址又是 // 开头，自动修正
        if (targetUrl.indexOf('//') === 0 && location.protocol === 'blob:') {
            targetUrl = `${location.pathname.split(':')?.[0]}:${targetUrl}`;
        }
        resp = await fetch(targetUrl, fetchOptions).then(onFetchResponse);
    } catch (e: any) {
        console.error(e);
        afterRequest?.(false, { message: e?.message });
        errorHandler?.(e.response?.message || errorMessage || '', e.response);
        return undefined;
    }
    resp = responseConverter ? responseConverter(resp) : resp;
    if (checkSuccess?.(resp)) {
        afterRequest?.(true, resp);
        return resp.data as T;
    } else {
        afterRequest?.(false, resp);
        errorHandler?.(resp.message || resp.msg || errorMessage || '', resp);
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
