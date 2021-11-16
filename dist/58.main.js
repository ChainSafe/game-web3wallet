webpackJsonp([58],{

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(673);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(__WEBPACK_IMPORTED_MODULE_1__stringify_js__["a" /* default */])(b);
}

/* harmony default export */ __webpack_exports__["a"] = (v1);

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_js__ = __webpack_require__(1170);


var v3 = Object(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v3', 0x30, __WEBPACK_IMPORTED_MODULE_1__md5_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (v3);

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["a"] = (md5);

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(673);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_1__stringify_js__["a" /* default */])(rnds);
}

/* harmony default export */ __webpack_exports__["a"] = (v4);

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sha1_js__ = __webpack_require__(1173);


var v5 = Object(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v5', 0x50, __WEBPACK_IMPORTED_MODULE_1__sha1_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (v5);

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["a"] = (sha1);

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(674);


function version(uuid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["a"] = (version);

/***/ }),

/***/ 1891:
/***/ (function(module, exports, __webpack_require__) {

const resolve = __webpack_require__(1892)
const provider = __webpack_require__(1893)
const presets = __webpack_require__(1896)

const injected = {
  ethereum: typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ? window.ethereum : null,
  web3: typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ? window.web3.currentProvider : null
}
const ws = typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined' ? window.WebSocket : null
const XHR = typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined' ? window.XMLHttpRequest : null

if (injected.ethereum) injected.ethereum.__isProvider = true

const connections = {
  injected: injected.ethereum || __webpack_require__(1897)(injected.web3),
  ipc: __webpack_require__(1898)('IPC connections are unavliable in the browser'),
  ws: __webpack_require__(1899)(ws),
  http: __webpack_require__(1901)(XHR)
}

module.exports = (targets, options) => {
  if (targets && !Array.isArray(targets) && typeof targets === 'object' && !options) {
    options = targets
    targets = undefined
  }
  if (!targets) targets = ['injected', 'frame']
  if (!options) options = {}

  targets = [].concat(targets)

  targets.forEach(t => {
    if (t.startsWith('alchemy') && !options.alchemyId) throw new Error('Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: \'123abc\' }')
    if (t.startsWith('infura') && !options.infuraId) throw new Error('Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: \'123abc\' }')
  })

  const sets = presets(options)

  return provider(connections, resolve(targets, sets), options)
}


/***/ }),

/***/ 1892:
/***/ (function(module, exports) {

const getProtocol = location => {
  if (location === 'injected') return 'injected'
  if (location.endsWith('.ipc')) return 'ipc'
  if (location.startsWith('wss://') || location.startsWith('ws://')) return 'ws'
  if (location.startsWith('https://') || location.startsWith('http://')) return 'http'
  return ''
}

module.exports = (targets, presets) => {
  return [].concat(...[].concat(targets).map(provider => {
    if (presets[provider]) {
      return presets[provider].map(location => ({ type: provider, location, protocol: getProtocol(location) }))
    } else {
      return { type: 'custom', location: provider, protocol: getProtocol(provider) }
    }
  })).filter(provider => {
    if (provider.protocol || provider.type === 'injected') {
      return true
    } else {
      console.log('eth-provider | Invalid provider preset/location: "' + provider.location + '"')
      return false
    }
  })
}


/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(13)
const EthereumProvider = __webpack_require__(1894)
const ConnectionManager = __webpack_require__(1895)

const monitor = provider => {
  function update (status) {
    provider.status = status
    if (provider instanceof EventEmitter) provider.emit('status', status)
  }
  async function check () {
    if (provider.inSetup) return setTimeout(check, 1000)
    try {
      if (await provider.send('eth_syncing')) {
        update('syncing')
        setTimeout(() => check(), 5000)
      } else {
        update('connected')
      }
    } catch (e) {
      update('disconnected')
    }
  }
  update('loading')
  check()
  provider.on('connect', () => check())
  provider.on('close', () => update('disconnected'))
  return provider
}

module.exports = (connections, targets, options) => {
  // If window.ethereum and injected is a target in any priority, return ethereum provider
  if (connections.injected.__isProvider && targets.map(t => t.type).indexOf('injected') > -1) {
    delete connections.injected.__isProvider
    return monitor(connections.injected)
  }
  const provider = new EthereumProvider(new ConnectionManager(connections, targets, options))
  provider.setMaxListeners(128)
  return monitor(provider)
}


/***/ }),

/***/ 1894:
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(13)

class EthereumProvider extends EventEmitter {
  constructor (connection) {
    super()
    this.enable = this.enable.bind(this)
    this._send = this._send.bind(this)
    this.send = this.send.bind(this)
    this._sendBatch = this._sendBatch.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
    this.sendAsync = this.sendAsync.bind(this)
    this.sendAsyncBatch = this.sendAsyncBatch.bind(this)
    this.isConnected = this.isConnected.bind(this)
    this.close = this.close.bind(this)
    this.request = this.request.bind(this)
    this.connected = false
    this.nextId = 0
    this.promises = {}
    this.subscriptions = []
    this.connection = connection
    this.connection.on('connect', () => this.checkConnection())
    this.connection.on('close', () => {
      this.connected = false
      this.emit('close')
      this.emit('disconnect')
    })
    this.connection.on('payload', payload => {
      const { id, method, error, result } = payload
      if (typeof id !== 'undefined') {
        if (this.promises[id]) { // Fulfill promise
          payload.error ? this.promises[id].reject(error) : this.promises[id].resolve(result)
          delete this.promises[id]
        }
      } else if (method && method.indexOf('_subscription') > -1) { // Emit subscription result
        // Events: connect, disconnect, chainChanged, accountsChanged, message
        this.emit(payload.params.subscription, payload.params.result)
        this.emit(method, payload.params) // Older EIP-1193
        this.emit('message', { // Latest EIP-1193
          type: payload.method,
          data: {
            subscription: payload.params.subscription,
            result: payload.params.result
          }
        })
        this.emit('data', payload) // Backwards Compatibility
      }
    })
    this.on('newListener', (event, listener) => {
      if (event === 'chainChanged' && !this.attemptedChainSubscription && this.connected) {
        this.startChainSubscription()
      } else if (event === 'accountsChanged' && !this.attemptedAccountsSubscription && this.connected) {
        this.startAccountsSubscription()
      } else if (event === 'networkChanged' && !this.attemptedNetworkSubscription && this.connected) {
        this.startNetworkSubscription()
        console.warn('The networkChanged event is being deprecated, use chainChainged instead')
      }
    })
  }

  async checkConnection () {
    try {
      this.emit('connect', await this._send('net_version'))
      this.connected = true
      if (this.listenerCount('networkChanged') && !this.attemptedNetworkSubscription) this.startNetworkSubscription()
      if (this.listenerCount('chainChanged') && !this.attemptedChainSubscription) this.startNetworkSubscription()
      if (this.listenerCount('accountsChanged') && !this.attemptedAccountsSubscription) this.startAccountsSubscription()
    } catch (e) {
      this.connected = false
    }
  }

  async startNetworkSubscription () {
    this.attemptedNetworkSubscription = true
    try {
      const networkChanged = await this.subscribe('eth_subscribe', 'networkChanged')
      this.on(networkChanged, netId => this.emit('networkChanged', netId))
    } catch (e) {
      console.warn('Unable to subscribe to networkChanged', e)
    }
  }

  async startChainSubscription () {
    this.attemptedChainSubscription = true
    try {
      const chainChanged = await this.subscribe('eth_subscribe', 'chainChanged')
      this.on(chainChanged, netId => this.emit('chainChanged', netId))
    } catch (e) {
      console.warn('Unable to subscribe to chainChanged', e)
    }
  }

  async startAccountsSubscription () {
    this.attemptedAccountsSubscription = true
    try {
      const accountsChanged = await this.subscribe('eth_subscribe', 'accountsChanged')
      this.on(accountsChanged, accounts => this.emit('accountsChanged', accounts))
    } catch (e) {
      console.warn('Unable to subscribe to accountsChanged', e)
    }
  }

  enable () {
    return new Promise((resolve, reject) => {
      this._send('eth_accounts').then(accounts => {
        if (accounts.length > 0) {
          this.accounts = accounts
          this.coinbase = accounts[0]
          this.emit('enable')
          resolve(accounts)
        } else {
          const err = new Error('User Denied Full Provider')
          err.code = 4001
          reject(err)
        }
      }).catch(reject)
    })
  }

  _send (method, params = []) {
    return new Promise((resolve, reject) => {
      let payload
      if (typeof method === 'object' && method !== null) {
        payload = method
        payload.params = payload.params || []
        payload.jsonrpc = '2.0'
        payload.id = this.nextId++
      } else {
        payload = { jsonrpc: '2.0', id: this.nextId++, method, params }
      }
      this.promises[payload.id] = { resolve, reject }
      if (!payload.method || typeof payload.method !== 'string') {
        this.promises[payload.id].reject(new Error('Method is not a valid string.'))
        delete this.promises[payload.id]
      } else if (!(payload.params instanceof Array)) {
        this.promises[payload.id].reject(new Error('Params is not a valid array.'))
        delete this.promises[payload.id]
      } else {
        this.connection.send(payload)
      }
    })
  }

  send (...args) { // Send can be clobbered, proxy sendPromise for backwards compatibility
    return this._send(...args)
  }

  _sendBatch (requests) {
    return Promise.all(requests.map(payload => this._send(payload.method, payload.params)))
  }

  subscribe (type, method, params = []) {
    return this._send(type, [method, ...params]).then(id => {
      this.subscriptions.push(id)
      return id
    })
  }

  unsubscribe (type, id) {
    return this._send(type, [id]).then(success => {
      if (success) {
        this.subscriptions = this.subscriptions.filter(_id => _id !== id) // Remove subscription
        this.removeAllListeners(id) // Remove listeners
        return success
      }
    })
  }

  sendAsync (payload, cb) { // Backwards Compatibility
    if (!cb || typeof cb !== 'function') return cb(new Error('Invalid or undefined callback provided to sendAsync'))
    if (!payload) return cb(new Error('Invalid Payload'))
    // sendAsync can be called with an array for batch requests used by web3.js 0.x
    // this is not part of EIP-1193's backwards compatibility but we still want to support it
    payload.jsonrpc = '2.0'
    payload.id = payload.id || this.nextId++
    if (payload instanceof Array) {
      return this.sendAsyncBatch(payload, cb)
    } else {
      return this._send(payload.method, payload.params).then(result => {
        cb(null, { id: payload.id, jsonrpc: payload.jsonrpc, result })
      }).catch(err => {
        cb(err)
      })
    }
  }

  sendAsyncBatch (payload, cb) {
    return this._sendBatch(payload).then((results) => {
      const result = results.map((entry, index) => {
        return { id: payload[index].id, jsonrpc: payload[index].jsonrpc, result: entry }
      })
      cb(null, result)
    }).catch(err => {
      cb(err)
    })
  }

  isConnected () { // Backwards Compatibility
    return this.connected
  }

  close () {
    if (this.connection && this.connection.close) this.connection.close()
    this.connected = false
    const error = new Error('Provider closed, subscription lost, please subscribe again.')
    this.subscriptions.forEach(id => this.emit(id, error)) // Send Error objects to any open subscriptions
    this.subscriptions = [] // Clear subscriptions
  }

  request (payload) {
    return this._send(payload.method, payload.params)
  }
}

module.exports = EthereumProvider


/***/ }),

/***/ 1895:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const EventEmitter = __webpack_require__(13)

const dev = process.env.NODE_ENV === 'development'

class ConnectionManager extends EventEmitter {
  constructor (connections, targets, options) {
    super()
    this.targets = targets
    this.options = options
    this.connections = connections
    this.connected = false
    this.status = 'loading'
    this.interval = options.interval || 5000
    this.name = options.name || 'default'
    this.inSetup = true
    this.connect()
  }

  connect (index = 0) {
    if (dev && index === 0) console.log(`\n\n\n\nA connection cycle started for provider with name: ${this.name}`)

    if (this.connection && this.connection.status === 'connected' && index >= this.connection.index) {
      if (dev) console.log('Stopping connection cycle becasuse we\'re already connected to a higher priority provider')
    } else if (this.targets.length === 0) {
      if (dev) console.log('No valid targets supplied')
    } else {
      const { protocol, location } = this.targets[index]
      this.connection = this.connections[protocol](location, this.options)

      this.connection.on('error', err => {
        if (!this.connected) return this.connectionError(index, err)
        if (this.listenerCount('error')) return this.emit('error', err)
        console.warn('eth-provider - Uncaught connection error: ' + err.message)
      })

      this.connection.on('close', () => {
        this.connected = false
        this.emitClose()
        if (!this.closing) this.refresh()
      })

      this.connection.on('connect', () => {
        this.connection.target = this.targets[index]
        this.connection.index = index
        this.targets[index].status = this.connection.status
        this.connected = true
        this.inSetup = false
        if (dev) console.log('Successfully connected to: ' + this.targets[index].location)
        this.emit('connect')
      })

      this.connection.on('data', data => this.emit('data', data))
      this.connection.on('payload', payload => this.emit('payload', payload))
    }
  }

  refresh (interval = this.interval) {
    if (dev) console.log(`Reconnect queued for ${(interval / 1000).toFixed(2)}s in the future`)
    clearTimeout(this.connectTimer)
    this.connectTimer = setTimeout(() => this.connect(), interval)
  }

  connectionError (index, err) {
    this.targets[index].status = err
    if (this.targets.length - 1 === index) {
      this.inSetup = false
      if (dev) console.warn('eth-provider unable to connect to any targets, view connection cycle summary: ', this.targets)
      this.refresh()
    } else { // Not last target, move on the next connection option
      this.connect(++index)
    }
  }

  emitClose () {
    this.emit('close')
  }

  close () {
    this.closing = true
    if (this.connection && this.connection.close && !this.connection.closed) {
      this.connection.close() // Let event bubble from here
    } else {
      this.emit('close')
    }
    clearTimeout(this.connectTimer)
    clearTimeout(this.setupTimer)
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload) {
    if (this.inSetup) {
      this.setupTimer = setTimeout(() => this.send(payload), 100)
    } else if (this.connection.closed) {
      this.error(payload, 'Not connected', 4900)
    } else {
      this.connection.send(payload)
    }
  }
}

module.exports = ConnectionManager

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1896:
/***/ (function(module, exports) {

module.exports = (options = {}) => {
  return {
    injected: ['injected'],
    frame: ['ws://127.0.0.1:1248', 'http://127.0.0.1:1248'],
    direct: ['ws://127.0.0.1:8546', 'http://127.0.0.1:8545'], // IPC paths will be prepended in Node/Electron
    infura: [`wss://mainnet.infura.io/ws/v3/${options.infuraId}`, `https://mainnet.infura.io/v3/${options.infuraId}`],
    alchemy: [`wss://eth-mainnet.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-mainnet.alchemyapi.io/v2/${options.alchemyId}`],
    infuraRopsten: [`wss://ropsten.infura.io/ws/v3/${options.infuraId}`, `https://ropsten.infura.io/v3/${options.infuraId}`],
    alchemyRopsten: [`wss://eth-ropsten.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-ropsten.alchemyapi.io/v2/${options.alchemyId}`],
    infuraRinkeby: [`wss://rinkeby.infura.io/ws/v3/${options.infuraId}`, `https://rinkeby.infura.io/v3/${options.infuraId}`],
    alchemyRinkeby: [`wss://eth-rinkeby.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-rinkeby.alchemyapi.io/v2/${options.alchemyId}`],
    infuraKovan: [`wss://kovan.infura.io/ws/v3/${options.infuraId}`, `https://kovan.infura.io/v3/${options.infuraId}`],
    alchemyKovan: [`wss://eth-kovan.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-kovan.alchemyapi.io/v2/${options.alchemyId}`],
    infuraGoerli: [`wss://goerli.infura.io/ws/v3/${options.infuraId}`, `https://goerli.infura.io/ws/v3/${options.infuraId}`],
    alchemyGoerli: [`wss://eth-goerli.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-goerli.alchemyapi.io/v2/${options.alchemyId}`],
    idChain: ['wss://idchain.one/ws/'],
    xDai: ['https://rpc.xdaichain.com', 'https://dai.poa.network'],
    matic: ['https://rpc-mainnet.maticvigil.com']
  }
}


/***/ }),

/***/ 1897:
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(13)

class InjectedConnection extends EventEmitter {
  constructor (_injected, options) {
    super()
    if (_injected) {
      setTimeout(() => this.emit('error', new Error('Injected web3 provider is not currently supported')), 0)
    } else {
      setTimeout(() => this.emit('error', new Error('No injected provider found')), 0)
    }
  }
}

module.exports = injected => options => new InjectedConnection(injected, options)


/***/ }),

/***/ 1898:
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(13)

class UnavailableConnection extends EventEmitter {
  constructor (message) {
    super()
    setTimeout(() => this.emit('error', new Error(message)), 0)
  }
}

module.exports = message => () => new UnavailableConnection(message)


/***/ }),

/***/ 1899:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const EventEmitter = __webpack_require__(13)
const parse = __webpack_require__(1900)
const dev = process.env.NODE_ENV === 'development'

let WebSocket

class WebSocketConnection extends EventEmitter {
  constructor (_WebSocket, url, options) {
    super()
    WebSocket = _WebSocket
    setTimeout(() => this.create(url, options), 0)
  }

  create (url, options) {
    if (!WebSocket) this.emit('error', new Error('No WebSocket transport available'))
    try { this.socket = new WebSocket(url, [], { origin: options.origin }) } catch (e) { return this.emit('error', e) }
    this.socket.addEventListener('error', err => this.emit('error', err))
    this.socket.addEventListener('open', () => {
      this.emit('connect')
      this.socket.addEventListener('message', message => {
        const data = typeof message.data === 'string' ? message.data : ''
        parse(data, (err, payloads) => {
          if (err) return //
          payloads.forEach(load => {
            if (Array.isArray(load)) {
              load.forEach(payload => this.emit('payload', payload))
            } else {
              this.emit('payload', load)
            }
          })
        })
      })
      this.socket.addEventListener('close', () => this.onClose())
    })
  }

  onClose () {
    this.socket = null
    this.closed = true
    if (dev) console.log('Closing WebSocket connection')
    this.emit('close')
    this.removeAllListeners()
  }

  close () {
    if (this.socket) {
      this.socket.close()
    } else {
      this.onClose()
    }
  }

  error (payload, message, code = -1) {
    this.emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload) {
    if (this.socket && this.socket.readyState === this.socket.CONNECTING) {
      setTimeout(_ => this.send(payload), 10)
    } else if (!this.socket || this.socket.readyState > 1) {
      this.connected = false
      this.error(payload, 'Not connected')
    } else {
      this.socket.send(JSON.stringify(payload))
    }
  }
}

module.exports = WebSocket => (url, cb) => new WebSocketConnection(WebSocket, url, cb)

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1900:
/***/ (function(module, exports) {

let last, timeout

module.exports = (res, cb) => {
  const values = []
  res
    .replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|')
    .forEach(data => {
      if (last) data = last + data // prepend the last chunk
      let result
      try {
        result = JSON.parse(data)
      } catch (e) {
        last = data
        clearTimeout(timeout) // restart timeout
        timeout = setTimeout(() => cb(new Error('Parse response timeout')), 15 * 1000)
        return
      }
      clearTimeout(timeout)
      last = null
      if (result) values.push(result)
    })
  cb(null, values)
}


/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const EventEmitter = __webpack_require__(13)
const { v4: uuid } = __webpack_require__(841)

const dev = process.env.NODE_ENV === 'development'

let XHR

class HTTPConnection extends EventEmitter {
  constructor (_XHR, url, options) {
    super()
    XHR = _XHR
    this.options = options
    this.connected = false
    this.subscriptions = false
    this.status = 'loading'
    this.url = url
    this.pollId = uuid()
    setTimeout(() => this.create(), 0)
    this._emit = (...args) => !this.closed ? this.emit(...args) : null
  }

  create () {
    if (!XHR) return this._emit('error', new Error('No HTTP transport available'))
    this.on('error', () => { if (this.connected) this.close() })
    this.init()
  }

  init () {
    this.send({ jsonrpc: '2.0', method: 'net_version', params: [], id: 1 }, (err, response) => {
      if (err) return this._emit('error', err)
      this.connected = true
      this._emit('connect')
      this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId, 'immediate'] }, (err, response) => {
        if (!err) {
          this.subscriptions = true
          this.pollSubscriptions()
        }
      })
    })
  }

  pollSubscriptions () {
    this.send({ jsonrpc: '2.0', id: 1, method: 'eth_pollSubscriptions', params: [this.pollId] }, (err, result) => {
      if (err) {
        this.subscriptionTimeout = setTimeout(() => this.pollSubscriptions(), 10000)
        return this._emit('error', err)
      } else {
        if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions()
        if (result) {
          result.map(p => {
            let parse
            try { parse = JSON.parse(p) } catch (e) { parse = false }
            return parse
          }).filter(n => n).forEach(p => this._emit('payload', p))
        }
      }
    })
  }

  close () {
    if (dev) console.log('Closing HTTP connection')
    this.closed = true
    this._emit('close')
    clearTimeout(this.subscriptionTimeout)
    this.removeAllListeners()
  }

  filterStatus (res) {
    if (res.status >= 200 && res.status < 300) return res
    const error = new Error(res.statusText)
    error.res = res
    throw error.message
  }

  error (payload, message, code = -1) {
    this._emit('payload', { id: payload.id, jsonrpc: payload.jsonrpc, error: { message, code } })
  }

  send (payload, internal) {
    if (this.closed) return this.error(payload, 'Not connected')
    if (payload.method === 'eth_subscribe') {
      if (this.subscriptions) {
        payload.pollId = this.pollId
      } else {
        return this.error(payload, 'Subscriptions are not supported by this HTTP endpoint')
      }
    }
    const xhr = new XHR()
    let responded = false
    const res = (err, result) => {
      if (!responded) {
        xhr.abort()
        responded = true
        if (internal) {
          internal(err, result)
        } else {
          const { id, jsonrpc } = payload
          const load = err ? { id, jsonrpc, error: { message: err.message, code: err.code } } : { id, jsonrpc, result }
          this._emit('payload', load)
        }
      }
    }
    xhr.open('POST', this.url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    // Below not working becasue XHR lib blocks it claiming "restricted header"
    // if (this.options.origin) xhr.setRequestHeader('Origin', this.options.origin)
    xhr.timeout = 60 * 1000
    xhr.onerror = res
    xhr.ontimeout = res
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        try {
          const response = JSON.parse(xhr.responseText)
          res(response.error, response.result)
        } catch (e) {
          res(e)
        }
      }
    }
    xhr.send(JSON.stringify(payload))
  }
}

module.exports = XHR => (url, options) => new HTTPConnection(XHR, url, options)

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(674);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["a"] = (stringify);

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regex_js__ = __webpack_require__(1168);


function validate(uuid) {
  return typeof uuid === 'string' && __WEBPACK_IMPORTED_MODULE_0__regex_js__["a" /* default */].test(uuid);
}

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v1_js__ = __webpack_require__(1167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return __WEBPACK_IMPORTED_MODULE_0__v1_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v3_js__ = __webpack_require__(1169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return __WEBPACK_IMPORTED_MODULE_1__v3_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v4_js__ = __webpack_require__(1171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return __WEBPACK_IMPORTED_MODULE_2__v4_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__v5_js__ = __webpack_require__(1172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return __WEBPACK_IMPORTED_MODULE_3__v5_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nil_js__ = __webpack_require__(1174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return __WEBPACK_IMPORTED_MODULE_4__nil_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__version_js__ = __webpack_require__(1175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_5__version_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validate_js__ = __webpack_require__(674);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return __WEBPACK_IMPORTED_MODULE_6__validate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stringify_js__ = __webpack_require__(673);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return __WEBPACK_IMPORTED_MODULE_7__stringify_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parse_js__ = __webpack_require__(917);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_8__parse_js__["a"]; });










/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DNS */
/* unused harmony export URL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringify_js__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_js__ = __webpack_require__(917);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["a"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(__WEBPACK_IMPORTED_MODULE_1__parse_js__["a" /* default */])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0__stringify_js__["a" /* default */])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(674);


function parse(uuid) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ })

});