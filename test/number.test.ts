import {
	calc,
} from '../src';

describe('calc', () => {
	test('简单运算', () => {
		expect(calc('1+2/4')).toBe('1.5');
	});
});
