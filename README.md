# normalize-type
[![travis build](https://img.shields.io/travis/kallaspriit/normalize-type.svg?style=flat-square)](https://travis-ci.org/kallaspriit/normalize-type)
[![codecov coverage](https://img.shields.io/codecov/c/github/kallaspriit/normalize-type.svg?style=flat-square)](https://codecov.io/github/kallaspriit/normalize-type)
[![version](https://img.shields.io/npm/v/normalize-type.svg?style=flat-square)](http://npm.im/normalize-type)
[![downloads](https://img.shields.io/npm/dm/normalize-type.svg?style=flat-square)](http://npm-stat.com/charts.html?package=normalize-type&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/normalize-type.svg?style=flat-square)](http://opensource.org/licenses/MIT)

**Normalizes string JavaScript values to have real type.**
- a string "123" becomes number *123*
- "true" becomes boolean *true*
- works recursively on objects and as well so { a: ['123'] } becomes { a: [123] } etc.

## Installation

This package is distributed via npm

```
npm install normalize-type
```

## Example

```javascript
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
```
running the example and result
```
babel-node example
{
  "id": 2,
  "name": "Jack Daniels",
  "age": 26,
  "height": 1.84,
  "accessLevels": [
    1,
    3
  ]
}
```

## Features verified by 100% test coverage tests
- should leave non-strings to be strings
- should not modify non-strings
- should leave strings to be strings
- should convert numeric integer strings to numbers
- should convert numeric float strings to numbers
- should preserve number-like invalid number values
- should convert "true" and "false" to booleans
- should convert "undefined" to undefined
- should not convert non-lowercase special mappings
- should convert arrays of values
- should convert nested arrays of values
- should convert object maps
- should convert nested object maps
- should handle mixed content