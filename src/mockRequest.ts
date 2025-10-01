/* eslint-disable no-await-in-loop */
import { getParams } from './param';
import { sleep } from './time';

// 存放所有已 mock 的数据
interface MockItem {
	url: string;
	cb: Function;
}
export interface MockConfig {
	/** 超时时间，支持传入类似 '200-400' 或者 300 这2种格式 */
	timeout?: string | number;
	/** 是否开启 debug 模式，开启会输出一些调试日志，默认 true */
	debug?: boolean;
	/** 是否开启覆盖模式，如果开启，后续的规则会覆盖前面的，默认 true */
	overrideMode?: boolean;
}

let mocked: MockItem[] = [];

const mockSettings: MockConfig = {
	timeout: '200-400',
	debug: true,
	overrideMode: true,
};

export interface MockRequestOptions {
	url: string;
	method: string;
	params: any;
}

/**
 * mock一个请求
 * @param url 
 * @param cb 
 */
export const mockRequest = (url: string, resp: any | ((options: MockRequestOptions) => any)) => {
	if (!resp) {
		throw new Error('第二个参数不能为空！');
	}
	let cb = resp;
	if (!(cb instanceof Function)) {
		cb = () => resp;
	}
	mocked.push({ url, cb });
};

/**
 * 重置mock
 */
export const resetMock = () => {
	mocked = [];
};

/**
 * 配置mock参数
 * @param options
 */
export const configMock = (options: MockConfig) => {
	Object.assign(mockSettings, options || {});
};

const getParamsFromFetchOptions = (options: any) => {
	const method = (options.method || 'get').toLowerCase();
	const { url, body } = options;
	let params: any = {};
	if (method === 'get') {
		(url.split('?')[1] || '').split('&').map((item: string) => item.split('=')).forEach(([key, value]: any) => {
			params[key] = decodeURIComponent(value);
		});
	} else if (method === 'post') {
		// 仅考虑最见场景，有待完善
		try {
			const contentType = options.headers?.['Content-Type'] || options.headers?.['content-type'];
			if (contentType?.indexOf('json') > 0) {
				params = JSON.parse(body || '{}');
			} else {
				params = getParams(`?${body || ''}`);
			}
		} catch (e) {
			console.error(e);
		}
	}
	return params;
}

/** 解析已经存储的 mock 规则 */
export const parseMock = async (url: string, _options: RequestInit) => {
	if (!mocked?.length) return;
	const options = { url, ..._options, params: {} };
	options.params = getParamsFromFetchOptions(options);
	const mockedRules = mockSettings.overrideMode ? mocked.reverse() : mocked;
	for (const item of mockedRules) {
		// 先支持最简单的字符串匹配
		if (url?.indexOf(item.url) >= 0) {
			let timeout = mockSettings.timeout || 0;
			if (typeof timeout === 'string') {
				const temp = timeout.split('-').map(num => parseInt(num, 10));
				timeout = temp[0] + Math.round(Math.random() * (temp[1] - temp[0]));
			}
			await sleep(timeout);
			const resp = await item.cb?.(options);
			if (mockSettings.debug) {
				console.log(`命中mock规则：${item.url}`);
				console.log('mock入参：', options);
				console.log('mock出参：', resp);
			}
			if (resp) {
				return resp;
			}
		}
	}
};
