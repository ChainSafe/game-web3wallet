webpackJsonp([0],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkGnosisSafeContext", function() { return checkGnosisSafeContext; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var gnosisWalletIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 440 440\">\n    <path d=\"M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z\"/>\n</svg>\n";

var getSafe = function getSafe(sdk) {
  return Promise.race([sdk.getSafeInfo(), // Timeout need as this method hangs until it can find the safe info
  new Promise(function (resolve) {
    return setTimeout(resolve, 200);
  })]);
};
/**
 * Checks to see if we are are within a Safe App context. If we are it executes
 * the callback function which self-selects this wallet.
 * @param selectWallet - A callback function which can call the `walletSelect` method
 * with the Gnosis wallet name.
 */


var checkGnosisSafeContext = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(selectWallet) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t1 = getSafe;
            _context.next = 3;
            return __webpack_require__.e/* import() */(47/* duplicate */).then(__webpack_require__.bind(null, 1447));

          case 3:
            _context.t2 = _context.sent["default"];
            _context.t3 = new _context.t2();
            _context.next = 7;
            return (0, _context.t1)(_context.t3);

          case 7:
            _context.t0 = !!_context.sent;

            if (!_context.t0) {
              _context.next = 10;
              break;
            }

            _context.t0 = selectWallet();

          case 10:
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkGnosisSafeContext(_x) {
    return _ref.apply(this, arguments);
  };
}();

function gnosis(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      networkId = options.networkId;
  var network = networkId === 4 ? 'rinkeby.' : '';
  var link = "https://".concat(network, "gnosis-safe.io/app");
  var safeAppMessage = options.appName ? "Then go to APPS and select <b>".concat(options.appName, "</b>.") : options.appUrl ? "Then go to APPS and add a custom app with the URL:<br /><b>".concat(options.appUrl, "</b>") : '';
  return {
    name: label || 'Gnosis Safe',
    iconSrc: iconSrc,
    svg: svg || gnosisWalletIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
        var createModernProviderInterface, sdk, _yield$import, SafeAppProvider, safe, provider;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                createModernProviderInterface = _ref2.createModernProviderInterface;
                _context2.next = 3;
                return __webpack_require__.e/* import() */(47/* duplicate */).then(__webpack_require__.bind(null, 1447));

              case 3:
                _context2.t0 = _context2.sent["default"];
                sdk = new _context2.t0();
                _context2.next = 7;
                return __webpack_require__.e/* import() */(63).then(__webpack_require__.bind(null, 2070));

              case 7:
                _yield$import = _context2.sent;
                SafeAppProvider = _yield$import.SafeAppProvider;
                _context2.next = 11;
                return getSafe(sdk);

              case 11:
                safe = _context2.sent;

                if (safe) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt("return", {
                  provider: undefined,
                  "interface": null
                });

              case 14:
                provider = new SafeAppProvider(safe, sdk);
                return _context2.abrupt("return", {
                  provider: provider,
                  "interface": _objectSpread(_objectSpread({}, createModernProviderInterface(provider)), {}, {
                    connect: function connect() {
                      return Promise.resolve([safe.safeAddress]);
                    }
                  })
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x2) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    link: link,
    installMessage: function installMessage() {
      return "\n        <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n            Click the button below to open the Gnosis Safe interface.<br />\n            ".concat(safeAppMessage, "\n        </p>\n        ");
    },
    desktop: true,
    mobile: false,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (gnosis);


/***/ })

});