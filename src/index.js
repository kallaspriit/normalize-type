export default function(arg) {
	// do not modify non-strings
	if (typeof arg !== 'string') {
		return arg;
	}

	// handle special empty string case that can be seen as a number by isNaN
	if (arg.length === 0) {
		return arg;
	}

	// map of direct string conversions
	const conversionMap = {
		'true': true,
		'false': false
	};
	const conversionValue = conversionMap[arg];

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

	return arg;
}