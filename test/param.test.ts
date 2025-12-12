import { formatDate } from '../src';

test('formatDate', () => {
	expect(formatDate()).toBe('');
	expect(formatDate(1675943103348)).toBe('2023-02-09 19:45:03');
	expect(formatDate('1675943103348')).toBe('2023-02-09 19:45:03');
	expect(formatDate('2023-02-09T11:45:03Z')).toBe('2023-02-09 19:45:03');
	expect(formatDate(1675943103348, 'yyyy-MM-dd')).toBe('2023-02-09');
});
