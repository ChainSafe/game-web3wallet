webpackJsonp([5],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coinbaseIcon; });
var coinbaseIcon = "\n\t<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z\" fill=\"#1652F0\"/>\n\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z\" fill=\"white\"/>\n\t</svg>\n";


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_coinbase_7f74eb94_js__ = __webpack_require__(1130);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function coinbase(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Coinbase Wallet',
    iconSrc: iconSrc,
    svg: svg || __WEBPACK_IMPORTED_MODULE_1__icon_coinbase_7f74eb94_js__["a" /* c */],
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createLegacyProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createLegacyProviderInterface = helpers.createLegacyProviderInterface;
                provider = window.web3 && window.web3.currentProvider;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": provider && getProviderName(provider) === 'Coinbase' ? createLegacyProviderInterface(provider) : null
                });

              case 3:
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
    link: "https://go.cb-w.com/xoXnYwQimhb?cb_url=".concat(window.location.href),
    installMessage: __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__["b" /* m */],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (coinbase);

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