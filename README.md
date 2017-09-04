# Normalize type
[![Coverage](https://img.shields.io/coveralls/kallaspriit/normalize-type.svg)]()
[![Downloads](https://img.shields.io/npm/dm/normalize-type.svg)](http://npm-stat.com/charts.html?package=normalize-type&from=2015-08-01)
[![Version](https://img.shields.io/npm/v/normalize-type.svg)](http://npm.im/normalize-type)
[![License](https://img.shields.io/npm/l/normalize-type.svg)](http://opensource.org/licenses/MIT)

**Normalizes string JavaScript values to have real type.**
- a string `"123"` becomes number `123`.
- `"true"` becomes boolean `true`.
- works recursively on objects and as well so `{ a: ['123'] }` becomes `{ a: [123] }` etc.

Mainly useful for parsing query parameters etc where you always get string values for everything but you'd like to use
the values with their real types or validate them etc.

## Installation

This package is distributed via npm

```
npm install normalize-type
```

## Example

```javascript
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
> npm run build && node example
{
  id: 2,
  name: 'Jack Daniels',
  age: 26,
  height: 1.84,
  birthday: 1849-02-14T22:00:00.000Z,
  accessLevels: [ 1, 3 ]
}
*/
```
See `example.js` and run `npm run build && node example` to try for yourself.

## Features verified by 100% test coverage
- √ should leave strings to be strings (3ms)
- √ should not modify non-strings (2ms)
- √ should convert numeric integer strings to numbers
- √ should convert numeric float strings to numbers
- √ should preserve number-like invalid number values (1ms)
- √ should convert "true" and "false" to booleans
- √ should convert "undefined" to undefined
- √ should not convert non-lowercase special mappings
- √ should convert arrays of values (1ms)
- √ should convert nested arrays of values
- √ should convert object maps (1ms)
- √ should convert nested object maps
- √ should handle mixed content