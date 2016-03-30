import { expect, should } from 'chai';
import normalizeType from '../src/index';

should();

describe('normalize-type', () => {

	it('should leave non-strings to be strings', () => {
		normalizeType('foo').should.equal('foo');
	});

	it('should not modify non-strings', () => {
		const nonStringValues = [
			123,
			1,
			0,
			1.0,
			0.0,
			new Date(),
			undefined,
			null,
			{},
			[],
			{ a: 1 },
			[1, 2, 3]
		];

		nonStringValues.forEach((value) => {
			expect(normalizeType(value)).to.deep.equal(value);
		});
	});

	it('should leave strings to be strings', () => {
		normalizeType('foo').should.equal('foo');
		normalizeType('').should.equal('');
	});

	it('should convert numeric integer strings to numbers', () => {
		normalizeType('123').should.equal(123);
		normalizeType('1').should.equal(1);
		normalizeType('0').should.equal(0);
	});

	it('should convert numeric float strings to numbers', () => {
		normalizeType('123.4').should.equal(123.4);
		normalizeType('1.0').should.equal(1.0);
		normalizeType('0.0').should.equal(0.0);
		normalizeType('.12').should.equal(0.12);
	});

	it('should preserve number-like invalid number values', () => {
		const numberLikeStrings = [
			'1..0',
			'..0',
			'10p'
		];

		numberLikeStrings.forEach((value) => {
			expect(normalizeType(value)).to.equal(value);
		});
	});

	it('should convert "true" and "false" to booleans', () => {
		normalizeType('true').should.equal(true);
		normalizeType('false').should.equal(false);
	});

	it('should convert "undefined" to undefined', () => {
		expect(normalizeType('undefined')).to.equal(undefined);
	});

	it('should not convert non-lowercase special mappings', () => {
		const nonLowercaseConversions = [
			'TRUE',
			'FALSE',
			'True',
			'False'
		];

		nonLowercaseConversions.forEach((value) => {
			expect(normalizeType(value)).to.equal(value);
		});
	});

	it('should convert arrays of values', () => {
		normalizeType([]).should.deep.equal([]);
		normalizeType(['123']).should.deep.equal([123]);
		normalizeType(['0']).should.deep.equal([0]);
		normalizeType(['1']).should.deep.equal([1]);
		normalizeType(['test', '1', '2.3']).should.deep.equal(['test', 1, 2.3]);
	});

	it('should convert nested arrays of values', () => {
		normalizeType([[]]).should.deep.equal([[]]);
		normalizeType([['123']]).should.deep.equal([[123]]);
		normalizeType([['0']]).should.deep.equal([[0]]);
		normalizeType([['1']]).should.deep.equal([[1]]);
		normalizeType([['test', '1', '2.3']]).should.deep.equal([['test', 1, 2.3]]);
		normalizeType([['123', '234'], ['5.5']]).should.deep.equal([[123, 234], [5.5]]);
	});

	it('should convert object maps', () => {
		normalizeType({}).should.deep.equal({});
		normalizeType({ a: 'test' }).should.deep.equal({ a: 'test' });
		normalizeType({ a: '123' }).should.deep.equal({ a: 123 });
	});

	it('should convert nested object maps', () => {
		normalizeType({ a: { b: 'test' } }).should.deep.equal({ a: { b: 'test' } });
		normalizeType({ a: { b: '123' } }).should.deep.equal({ a: { b: 123 } });
	});

});