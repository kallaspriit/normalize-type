"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeType(arg) {
    // handle arrays
    if (Array.isArray(arg)) {
        return arg.map(item => normalizeType(item));
    }
    // handle ordinary objects (maps) but not dates etc
    if (typeof arg === 'object' && arg !== null && arg.constructor === Object) {
        return Object.keys(arg).reduce((obj, key) => {
            obj[key] = normalizeType(arg[key]);
            return obj;
        }, {});
    }
    // do not modify non-strings from this point on
    if (typeof arg !== 'string') {
        return arg;
    }
    // handle special empty string case that can be seen as a number by isNaN
    if (arg.length === 0) {
        return arg;
    }
    // map of direct string conversions
    const conversionMap = {
        true: true,
        false: false,
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
    if (!isNaN(Number(arg))) {
        return Number(arg);
    }
    // return the string as is
    return arg;
}
exports.normalizeType = normalizeType;
exports.default = normalizeType;
//# sourceMappingURL=index.js.map