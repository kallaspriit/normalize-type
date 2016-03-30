import normalizeType from './src';

const parameters = {
	id: '2',
	name: 'Jack Daniels',
	age: '26',
	height: '1.84',
	accessLevels: ['1', '3']
};

console.log(
	normalizeType(parameters)
);