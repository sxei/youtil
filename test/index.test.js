const youtil = require('../src');
const { formatDate, getParam, encodeHtml } = youtil.default;

test('formatDate', () => {
    expect(formatDate(1675935902379)).toBe('2023-02-09 17:45:02');
    expect(formatDate(1675935902379, 'yyyy-MM-dd')).toBe('2023-02-09');
});

test('getParam', () => {
    expect(getParam('a', '?a=1&b=&c=3&c=33#abc')).toBe('1');
    expect(getParam('b', '?a=1&b=&c=3&c=33#abc')).toBe('');
    expect(getParam('c', '?a=1&b=&c=3&c=33#abc')).toBe('3');
    expect(getParam('d', '?a=1&b=&c=3&c=33#abc')).toBe(undefined);
});

test('encodeHtml', () => {
    // expect(encodeHtml('<div>')).toBe('&lt;div&gt;');
});