(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],2:[function(require,module,exports){
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

},{}],3:[function(require,module,exports){
/*!
 * year-range-regex <https://github.com/jonschlinkert/year-range-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');
var toRegexRange = require('to-regex-range');
var cache = {};

module.exports = function (start, end) {
  if (!isNumber(start)) {
    throw new RangeError('invalid year range.');
  }

  var key = start + '-' + end;
  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  if (!isNumber(end)) {
    end = start;
  }

  var re = new RegExp('^(' + toRegexRange(start, end) + ')$');
  return cache[key] || (cache[key] = re);
};


},{"is-number":4,"to-regex-range":6}],4:[function(require,module,exports){
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');

module.exports = function isNumber(num) {
  var type = typeOf(num);
  if (type !== 'number' && type !== 'string') {
    return false;
  }
  var n = +num;
  return (n - n + 1) >= 0 && num !== '';
};

},{"kind-of":5}],5:[function(require,module,exports){
var isBuffer = require('is-buffer');
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

},{"is-buffer":1}],6:[function(require,module,exports){
/*!
 * to-regex-range <https://github.com/jonschlinkert/to-regex-range>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var repeat = require('repeat-string');
var isNumber = require('is-number');
var cache = {range: {}, rangeToPattern: {}};

function toRegexRange(min, max) {
  if (isNumber(min) === false) {
    throw new RangeError('toRegexRange: first argument is invalid.');
  }

  if (typeof max === 'undefined') {
    return '' + min;
  }

  if (isNumber(max) === false) {
    throw new RangeError('toRegexRange: second argument is invalid.');
  }

  var key = min + ':' + max;
  if (cache.range.hasOwnProperty(key)) {
    return cache.range[key];
  }

  var a = +min;
  var b = +max;

  if (a === b) {
    return a;
  }

  if (a > b) {
    return a + '|' + b;
  }

  min = min.toString();
  max = max.toString();
  var positives = [];
  var negatives = [];

  if (min < 0) {
    var newMin = 1;
    if (max < 0) {
      newMin = Math.abs(max);
    }

    var newMax = Math.abs(min);
    negatives = splitToPatterns(newMin, newMax);
    min = 0;
  }
  if (max >= 0) {
    positives = splitToPatterns(min, max);
  }

  var res = siftPatterns(negatives, positives);
  cache.range[key] = res;
  return res;
}

function siftPatterns(negatives, positives) {
  var onlyNegative = filterPatterns(negatives, positives, '-');
  var onlyPositive = filterPatterns(positives, negatives, '');
  var intersected = filterPatterns(negatives, positives, '-?', true);
  var subpatterns = onlyNegative.concat(intersected || []).concat(onlyPositive || []);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  min = +min;
  max = +max;

  var nines = 1;
  var stops = [max];
  var stop = +countNines(min, nines);

  while (min <= stop && stop <= max) {
    stops = add(stops, stop);
    nines += 1;
    stop = +countNines(min, nines);
  }

  var zeros = 1;
  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops = add(stops, stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops.sort(compare);
  return stops;
}

function rangeToPattern(start, stop) {
  var key = start + ':' + stop;

  if (cache.rangeToPattern.hasOwnProperty(key)) {
    return cache.rangeToPattern[key];
  }

  var zipped = zip(String(start), String(stop));
  var len = zipped.length, i = -1;

  var pattern = '';
  var digits = 0;

  while (++i < len) {
    var current = zipped[i];
    var startDigit = current[0];
    var stopDigit = current[1];

    if (startDigit === stopDigit) {
      pattern += startDigit;

    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit);

    } else {
      digits += 1;
    }
  }

  if (digits) {
    pattern += '[0-9]';
  }

  if (digits > 1) {
    pattern += limit(digits);
  }

  cache.rangeToPattern[key] = pattern;
  return pattern;
}

/**
 * Zip strings (`for in` can be used on string characters)
 */

function zip(a, b) {
  var arr = [];
  for (var ch in a) arr.push([a[ch], b[ch]]);
  return arr;
}

function splitToPatterns(min, max) {
  var ranges = splitToRanges(min, max);
  var len = ranges.length;
  var idx = -1;

  var start = min;
  var subpatterns = new Array(len);

  while (++idx < len) {
    var range = ranges[idx];
    subpatterns[idx] = rangeToPattern(start, range);
    start = range + 1;
  }
  return subpatterns;
}

function filterPatterns(arr, comparison, prefix, intersection) {
  var len = arr.length, i = -1;
  var intersected = [];
  var res = [];

  while (++i < len) {
    var ele = arr[i];
    if (!intersection && comparison.indexOf(ele) === -1) {
      res.push(prefix + ele);
    }
    if (intersection && comparison.indexOf(ele) !== -1) {
      intersected.push(prefix + ele);
    }
  }
  return intersection ? intersected : res;
}

function countNines(num, len) {
  return String(num).slice(0, -len) + repeat('9', len);
}

function countZeros(integer, zeros) {
  return integer - (integer % Math.pow(10, zeros));
}

function limit(str) {
  return '{' + str + '}';
}

function toCharacterClass(a, b) {
  return '[' + a + '-' + b + ']';
}

function compare(a, b) {
  return a - b;
}

function add(arr, ele) {
  if (arr.indexOf(ele) === -1) {
    arr.push(ele);
  }
  return arr;
}

/**
 * Expose `toRegexRange`
 */

module.exports = toRegexRange;

},{"is-number":4,"repeat-string":2}],7:[function(require,module,exports){
var yearRange = require('year-range-regex');
 
module.exports = function(startDate, endDate) { return result}
},{"year-range-regex":3}]},{},[7]);
