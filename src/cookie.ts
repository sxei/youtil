/**
 * 获取cookie
 * @param name cookie名字
 * @param defaultValue 默认值
 * @param parseToNumber 是否强转数字
 * @returns
 */
export const getCookie = (name: string) => {
	const result = new RegExp(`(^|;| )${encodeURIComponent(name)}=([^;]*)(;|$)`, 'g').exec(document.cookie);
	return decodeURIComponent(result?.[2] || '');
};

/**
 * Cookie配置选项
 */
interface SetCookieOptions {
	/** 过期天数，默认30天 */
	days?: number;
	/** cookie作用范围，默认 “/” */
	path?: string;
	/** 域名 */
	domain?: string;
	/** 是否仅HTTPS传输 */
	secure?: boolean;
	/** SameSite属性值 */
	sameSite?: 'strict' | 'lax' | 'none';
}

/**
 * 设置cookie，对于中文和特殊字符必须先进行编码
 * @param name cookie名称
 * @param value cookie值，中文等字符会自动编码
 */
export const setCookie = (name: string, value: string, options: SetCookieOptions) => {
	const { days, path, domain, secure, sameSite } = Object.assign({
		days: 30,
		path: '/',
	}, options || {});
	let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
	if (days) {
		cookie += `; expires=${new Date(Date.now() + days * 24 * 3600 * 1000).toUTCString()}`;
	}
	if (path) cookie += `; path=${path}`;
	if (domain) cookie += `; domain=${domain}`;
	if (secure) cookie += '; secure';
	if (sameSite) cookie += `; sameSite=${sameSite}`;
	document.cookie = cookie;
};

/**
 * 删除cookie
 * @param name cookie的名字
 * @param path cookie所在的path，默认contextPath
 * @param domain cookie作用域名
 */
export const delCookie = (name: string, path?: string, domain?: string) => {
	setCookie(name, null, {
		days: -1,
		path,
		domain,
	});
};
