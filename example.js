const normalizeType = require('./build/index').default;

const parameters = {
	id: '2',
	name: 'Jack Daniels',
	age: '26',
	height: '1.84',
	birthday: new Date(1849, 1, 15, 0, 0, 0, 0),
	accessLevels: ['1', '3'],
};

console.log(normalizeType(parameters));

/*
> node example
{
  id: 2,
  name: 'Jack Daniels',
  age: 26,
  height: 1.84,
  birthday: 1849-02-14T22:00:00.000Z,
  accessLevels: [ 1, 3 ]
}
*/
