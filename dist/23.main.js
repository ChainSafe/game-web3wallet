webpackJsonp([23],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__ = __webpack_require__(498);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function getProvider() {
  return _getProvider.apply(this, arguments);
}

function _getProvider() {
  _getProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var injected, _yield$import, ethProvider;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            injected = window.ethereum;

            if (!(injected && injected.isFrame)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", injected);

          case 3:
            _context2.next = 5;
            return __webpack_require__.e/* import() */(58).then(__webpack_require__.bind(null, 1891));

          case 5:
            _yield$import = _context2.sent;
            ethProvider = _yield$import["default"];
            return _context2.abrupt("return", ethProvider('frame'));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProvider.apply(this, arguments);
}

function frame(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Frame',
    iconSrc: iconSrc || img,
    iconSrcSet: iconSrc || img$1,
    svg: svg,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var createModernProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                createModernProviderInterface = helpers.createModernProviderInterface;
                _context.next = 3;
                return getProvider();

              case 3:
                provider = _context.sent;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": _objectSpread(_objectSpread({}, createModernProviderInterface(provider)), {}, {
                    connect: function connect() {
                      return provider.request({
                        method: 'eth_requestAccounts'
                      })["catch"](function (err) {
                        if (err.message.includes('Unexpected end of JSON input')) {
                          throw new Error('Frame is not running');
                        }

                        throw err;
                      });
                    },
                    disconnect: provider.close
                  })
                });

              case 5:
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
    type: 'injected',
    link: "https://frame.sh",
    installMessage: __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__["a" /* e */],
    desktop: true,
    mobile: false,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (frame);

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extensionInstallMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mobileWalletInstallMessage; });
var extensionInstallMessage = function extensionInstallMessage(helpers) {
  var currentWallet = helpers.currentWallet,
      selectedWallet = helpers.selectedWallet;

  if (currentWallet) {
    return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    We have detected that you already have\n    <b>".concat(currentWallet, "</b>\n    installed. If you would prefer to use\n    <b>").concat(selectedWallet, "</b>\n    instead, then click below to install.\n    </p>\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    <b>Tip:</b>\n    If you already have ").concat(selectedWallet, " installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick=\"window.location.reload();\">\n      Then refresh the page.\n    </span>\n    </p>\n    ");
  } else {
    return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Once you have it installed, go ahead and\n    <span\n    class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>' : '', "\n    </p>\n    ");
  }
};

var mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {
  var selectedWallet = helpers.selectedWallet;
  return "\n  <p style=\"font-size: 0.889rem;\">\n  Tap the button below to <b>Open ".concat(selectedWallet, "</b>. Please access this site on ").concat(selectedWallet, "'s in-app browser for a seamless experience.\n  </p>\n  ");
};



/***/ })

});