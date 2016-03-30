import { expect } from 'chai';
import normalizeType from '../src/index';

describe('normalize-type', () => {

	it('should leave strings to be strings', () => {
		expect(normalizeType(3, 5)).to.equal(8);
	});

	it('should convert numeric integer strings to numbers', () => {
		expect(normalizeType(3, 1, 2)).to.equal(6);
	});

});