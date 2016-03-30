import { expect } from 'chai';
import normalizeType from '../src/index';

describe('normalize-type', () => {

	it('should leave strings to be strings', () => {
		expect(normalizeType(2, 5)).to.equal(7);
	});

});