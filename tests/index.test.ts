import 'ts-jest';
import normalizeType from '../src/index';

describe('normalize-type', () => {
	it('should leave strings to be strings', () => {
		expect(normalizeType('foo')).toEqual('foo');
		expect(normalizeType('')).toEqual('');
	});

	it('should not modify non-strings', () => {
		const nonStringValues = [123, 1, 0, 1.0, 0.0, new Date(), undefined, null, {}, [], {a: 1}, [1, 2, 3]];

		nonStringValues.forEach(value => {
			expect(normalizeType(value)).toEqual(value);
		});
	});

	it('should convert numeric integer strings to numbers', () => {
		expect(normalizeType('123')).toEqual(123);
		expect(normalizeType('1')).toEqual(1);
		expect(normalizeType('0')).toEqual(0);
	});

	it('should convert numeric float strings to numbers', () => {
		expect(normalizeType('123.4')).toEqual(123.4);
		expect(normalizeType('1.0')).toEqual(1.0);
		expect(normalizeType('0.0')).toEqual(0.0);
		expect(normalizeType('.12')).toEqual(0.12);
	});

	it('should preserve number-like invalid number values', () => {
		const numberLikeStrings = ['1..0', '..0', '10p'];

		numberLikeStrings.forEach(value => {
			expect(normalizeType(value)).toEqual(value);
		});
	});

	it('should convert "true" and "false" to booleans', () => {
		expect(normalizeType('true')).toEqual(true);
		expect(normalizeType('false')).toEqual(false);
	});

	it('should convert "undefined" to undefined', () => {
		expect(normalizeType('undefined')).toEqual(undefined);
	});

	it('should not convert non-lowercase special mappings', () => {
		const nonLowercaseConversions = ['TRUE', 'FALSE', 'True', 'False'];

		nonLowercaseConversions.forEach(value => {
			expect(normalizeType(value)).toEqual(value);
		});
	});

	it('should convert arrays of values', () => {
		expect(normalizeType([])).toEqual([]);
		expect(normalizeType(['123'])).toEqual([123]);
		expect(normalizeType(['0'])).toEqual([0]);
		expect(normalizeType(['1'])).toEqual([1]);
		expect(normalizeType(['test', '1', '2.3'])).toEqual(['test', 1, 2.3]);
	});

	it('should convert nested arrays of values', () => {
		expect(normalizeType([[]])).toEqual([[]]);
		expect(normalizeType([['123']])).toEqual([[123]]);
		expect(normalizeType([['0']])).toEqual([[0]]);
		expect(normalizeType([['1']])).toEqual([[1]]);
		expect(normalizeType([['test', '1', '2.3']])).toEqual([['test', 1, 2.3]]);
		expect(normalizeType([['123', '234'], ['5.5']])).toEqual([[123, 234], [5.5]]);
	});

	it('should convert object maps', () => {
		expect(normalizeType({})).toEqual({});
		expect(normalizeType({a: 'test'})).toEqual({a: 'test'});
		expect(normalizeType({a: '123'})).toEqual({a: 123});
	});

	it('should convert nested object maps', () => {
		expect(normalizeType({a: {b: 'test'}})).toEqual({a: {b: 'test'}});
		expect(normalizeType({a: {b: '123'}})).toEqual({a: {b: 123}});
	});

	it('should handle mixed content', () => {
		expect(
			normalizeType({
				id: '2',
				name: 'Jack Daniels',
				age: '26',
				height: '1.84',
				accessLevels: ['1', '3'],
			}),
		).toEqual({
			id: 2,
			name: 'Jack Daniels',
			age: 26,
			height: 1.84,
			accessLevels: [1, 3],
		});
	});
});
