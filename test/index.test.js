import { expect } from 'chai';
import normalizeType from '../src/index';

describe('normalize-type', () => {

	it('should leave strings to be strings', () => {
		expect(normalizeType(2, 5)).to.equal(7);
	});

	it('should convert numeric integer strings to numbers', () => {
		expect(normalizeType(3, 1)).to.equal(4);
	});

});