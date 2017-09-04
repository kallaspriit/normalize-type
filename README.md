# normalize-type
[![travis build](https://img.shields.io/travis/kallaspriit/normalize-type.svg?style=flat-square)](https://travis-ci.org/kallaspriit/normalize-type)
[![Coverage Status](https://coveralls.io/repos/github/kallaspriit/normalize-type/badge.svg?branch=master)](https://coveralls.io/github/kallaspriit/normalize-type?branch=master)
[![version](https://img.shields.io/npm/v/normalize-type.svg?style=flat-square)](http://npm.im/normalize-type)
[![downloads](https://img.shields.io/npm/dm/normalize-type.svg?style=flat-square)](http://npm-stat.com/charts.html?package=normalize-type&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/normalize-type.svg?style=flat-square)](http://opensource.org/licenses/MIT)

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
import normalizeType from 'normalize-type';

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
result of running the example
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

## Features verified by 100% test coverage
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