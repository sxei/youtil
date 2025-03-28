import { toUrlParams } from './param';

/** requestAPI的第二个参数类型 */
export interface IRequestOptions {
    /** GET请求时传递的参数 */
    params?: Record<string, any>;
    /** POST请求时传递的参数 */
    data?: Record<string, any>;
    /** postJson请求时传递的参数 */
    json?: Record<string, any>;
    /** API前缀，不传默认为空 */
    baseUrl?: string;
    /** 请求方法，一般情况下会自动处理无需手动传 */
    method?: string;
    /** headers */
    headers?: Record<string, any>;
    /** 其它自定义fetchOptions */
    fetchOptions?: RequestInit;
    /** 请求完成之后触发的钩子，无论成功与否均会触发 */
    afterRequest?: (success: boolean, resp?: any) => void;
    /** 对响应进行自定义格式化处理 */
    responseConverter?: (resp: any) => any;
    /** 后端未返回 message 时的默认异常文案 */
    errorMessage?: string;
    /** 发生异常时的处理方法，一般不太建议重写此方法 */
    errorHandler?: (message: string, resp?: any) => void;
    /** 自定义toast实现，为了和UI解耦，方法默认不包含UI处理代码 */
    toastHandler?: (message: string) => void;
    /** 判断接口是否调用成功，默认规则 resp => resp.code == 0 || resp.code == 200 */
    checkSuccess?: (resp: any) => boolean;
    /** 是否关闭默认的异常toast */
    silent?: boolean;
}

/**
 * 通用的API请求方法
 * @param url
 * @param options
 * @returns
 */
export const request = async <T = any>(url: string, options?: IRequestOptions) => {
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
    };
    options = Object.assign({}, defaultOptions, options || {});
    const {
        params,
        data,
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
    } = options || {};
    if (params) {
        fetchOptions.method = method || 'GET';
        url = `${url}?${toUrlParams(params)}`;
    }
    if (data) {
        Object.assign(fetchOptions, {
            method: method || 'POST',
            body: toUrlParams(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                ...(headers || {}),
            },
        });
    } else if (json) {
        Object.assign(fetchOptions, {
            method: method || 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...(headers || {}),
            },
        });
    }
    let resp = null;
    try {
        resp = await fetch(`${baseUrl || ''}${url}`, fetchOptions).then((res: any) => res.json());
    } catch (e: any) {
        console.error(e);
        afterRequest?.(false, { message: e?.message });
        errorHandler?.(errorMessage || '');
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

type IRequest = typeof request;
interface RequestConstructor {
    new (overrideOptions: IRequestOptions): IRequest;
    new (req: IRequest, overrideOptions: IRequestOptions): IRequest;
}

/**
 * 支持实例化一个新的request方法，覆盖默认的部分配置项
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
