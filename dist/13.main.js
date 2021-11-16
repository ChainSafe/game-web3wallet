webpackJsonp([13],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__ = __webpack_require__(498);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var ownbitIcon = "\n  <svg width=\"40px\" height=\"40px\" viewBox=\"0 0 132 132\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>Shape Copy</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <linearGradient x1=\"15.8%\" y1=\"84.9%\" x2=\"106.3%\" y2=\"-17.2%\" id=\"linearGradient-1\">\n            <stop stop-color=\"#0877FF\" offset=\"0%\"></stop>\n            <stop stop-color=\"#3CCEF9\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"Page-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M65.8599735,0.000607031223 C64.4416737,0.000607031223 63.0363726,0.0454744869 61.6440701,0.135209398 C59.3754119,0.301605871 57.6214113,2.19771449 57.6274798,4.47722124 L57.6274798,32.8001645 C57.6294466,34.0359685 58.1568063,35.2123819 59.0774227,36.0346405 C59.9980391,36.8568991 61.224677,37.2470878 62.4499879,37.1074402 C63.5818523,36.9749894 64.7204182,36.9083004 65.8599735,36.9077077 C77.6016631,36.9077077 88.1871903,43.995619 92.6805403,54.8663598 C97.1738904,65.7371006 94.690175,78.2498645 86.3875466,86.5699693 C78.0849183,94.8900741 65.5984376,97.3790175 54.7505309,92.8762093 C43.9026243,88.373401 36.8296011,77.765592 36.8296011,65.999187 L36.8296011,19.2231276 C36.8304083,16.5637094 35.3161377,14.1371901 32.9297089,12.9738059 C30.54328,11.8104217 27.7035052,12.1143438 25.6160782,13.7565347 C9.44722987,26.2414401 -0.0174670853,45.544213 2.42011117e-05,65.999187 C2.42011117e-05,102.411298 30.0832892,132.297366 66.4189165,131.997767 C102.792362,131.843094 132.153742,102.169136 131.999394,65.7191272 C131.845046,29.269118 102.233419,-0.154065705 65.8599735,0.000607031223 Z\" id=\"Shape-Copy\" fill=\"url(#linearGradient-1)\" fill-rule=\"nonzero\"></path>\n    </g>\n  </svg>\n";

function ownbit(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Ownbit',
    iconSrc: iconSrc,
    svg: svg || ownbitIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createModernProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;
                provider = window.ethereum || window.web3 && window.web3.currentProvider;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": getProviderName(provider) === 'Ownbit' && createModernProviderInterface(provider) || null
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
    link: 'https://ownbit.io',
    installMessage: __WEBPACK_IMPORTED_MODULE_0__content_612bd04b_js__["b" /* m */],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ownbit);

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