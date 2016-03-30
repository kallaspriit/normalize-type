'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = normalizeType;
function normalizeType(arg) {

	// handle arrays
	if (Array.isArray(arg)) {
		return arg.map(function (item) {
			return normalizeType(item);
		});
	}

	// handle objects but not dates etc
	if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null && arg.constructor === Object) {
		return Object.keys(arg).reduce(function (obj, key) {
			obj[key] = normalizeType(arg[key]);

			return obj;
		}, {});
	}

	// do not modify non-strings
	if (typeof arg !== 'string') {
		return arg;
	}

	// handle special empty string case that can be seen as a number by isNaN
	if (arg.length === 0) {
		return arg;
	}

	// map of direct string conversions
	var conversionMap = {
		'true': true,
		'false': false
	};
	var conversionValue = conversionMap[arg];

	// return the conversion map value if matched
	if (typeof conversionValue !== 'undefined') {
		return conversionValue;
	}

	// handle undefined special case
	if (arg === 'undefined') {
		return undefined;
	}

	// handle numeric values
	if (!isNaN(arg)) {
		return Number(arg);
	}

	// TODO handle dates? might be too expensive

	return arg;
}