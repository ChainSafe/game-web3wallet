webpackJsonp([6],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coinbaseIcon; });
var coinbaseIcon = "\n\t<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z\" fill=\"#1652F0\"/>\n\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z\" fill=\"white\"/>\n\t</svg>\n";


/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_coinbase_7f74eb94_js__ = __webpack_require__(1130);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function walletLink(options) {
  var rpcUrl = options.rpcUrl,
      appName = options.appName,
      appLogoUrl = options.appLogoUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Coinbase Wallet',
    svg: svg || __WEBPACK_IMPORTED_MODULE_0__icon_coinbase_7f74eb94_js__["a" /* c */],
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getBalance, getAddress, getNetwork, _yield$import, WalletLink, instance, provider;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getBalance = helpers.getBalance, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork;
                _context.next = 3;
                return __webpack_require__.e/* import() */(49).then(__webpack_require__.bind(null, 1847));

              case 3:
                _yield$import = _context.sent;
                WalletLink = _yield$import["default"];
                instance = new WalletLink({
                  appName: appName,
                  appLogoUrl: appLogoUrl
                });
                provider = instance.makeWeb3Provider(rpcUrl, networkId);
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Coinbase Wallet',
                    connect: function connect() {
                      return new Promise(function (resolve, reject) {
                        provider.enable().then(function (res) {
                          return resolve(res);
                        })["catch"](function () {
                          return reject({
                            message: 'This dapp needs access to your account information.'
                          });
                        });
                      });
                    },
                    disconnect: function disconnect() {
                      provider.disconnect();
                    },
                    address: {
                      get: function get() {
                        return getAddress(provider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(provider);
                      }
                    },
                    balance: {
                      get: function get() {
                        return getBalance(provider);
                      }
                    }
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (walletLink);

/***/ })

});