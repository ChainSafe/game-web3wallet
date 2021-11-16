webpackJsonp([35],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bignumber_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bnc_sdk__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bnc_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bnc_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bowser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bowser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bowser__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function network() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon,
      html = options.html,
      button = options.button;
  var networkCheckRequested = false;
  var prevWalletCheckInProgressValue;
  __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["c" /* a */].subscribe(function (_ref) {
    var walletCheckInProgress = _ref.walletCheckInProgress;

    if (prevWalletCheckInProgressValue === false && walletCheckInProgress === true) {
      networkCheckRequested = false;
    }

    prevWalletCheckInProgressValue = walletCheckInProgress;
  });
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(stateAndHelpers) {
      var network, appNetworkId, walletSelect, walletCheck, exit, stateSyncStatus, stateStore, wallet, _wallet$provider;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              network = stateAndHelpers.network, appNetworkId = stateAndHelpers.appNetworkId, walletSelect = stateAndHelpers.walletSelect, walletCheck = stateAndHelpers.walletCheck, exit = stateAndHelpers.exit, stateSyncStatus = stateAndHelpers.stateSyncStatus, stateStore = stateAndHelpers.stateStore, wallet = stateAndHelpers.wallet;

              if (!(network === null)) {
                _context2.next = 5;
                break;
              }

              if (!stateSyncStatus.network) {
                _context2.next = 5;
                break;
              }

              _context2.next = 5;
              return new Promise(function (resolve) {
                stateSyncStatus.network && stateSyncStatus.network.then(resolve);
                setTimeout(function () {
                  if (network === null) {
                    // if prom isn't resolving after 500ms, then stop waiting
                    resolve(undefined);
                  }
                }, 500);
              });

            case 5:
              if (!(!networkCheckRequested && stateStore.network.get() != appNetworkId && Object(__WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["h" /* f */])(wallet === null || wallet === void 0 ? void 0 : wallet.provider) !== 'WalletConnect')) {
                _context2.next = 14;
                break;
              }

              _context2.prev = 6;
              networkCheckRequested = true;
              _context2.next = 10;
              return wallet === null || wallet === void 0 ? void 0 : (_wallet$provider = wallet.provider) === null || _wallet$provider === void 0 ? void 0 : _wallet$provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x' + (appNetworkId === null || appNetworkId === void 0 ? void 0 : appNetworkId.toString(16))
                }]
              });

            case 10:
              _context2.next = 14;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](6);

            case 14:
              if (!(stateStore.network.get() != appNetworkId)) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return", {
                heading: heading || 'You Must Change Networks',
                description: description || "We've detected that you need to switch your wallet's network from <b>".concat(Object(__WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["m" /* n */])(network), "</b> to <b>").concat(Object(__WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["m" /* n */])(appNetworkId), "</b> for this Dapp. <br><br> <i style=\"font-size: inherit; font-family: inherit;\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),
                eventCode: 'networkFail',
                button: button || {
                  onclick: function () {
                    var _onclick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var walletSelected, walletReady;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              exit(false, {
                                switchingWallets: true
                              });
                              _context.next = 3;
                              return walletSelect();

                            case 3:
                              walletSelected = _context.sent;
                              _context.t0 = walletSelected;

                              if (!_context.t0) {
                                _context.next = 9;
                                break;
                              }

                              _context.next = 8;
                              return walletCheck();

                            case 8:
                              _context.t0 = _context.sent;

                            case 9:
                              walletReady = _context.t0;
                              __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["c" /* a */].update(function (store) {
                                return _objectSpread(_objectSpread({}, store), {}, {
                                  switchingWallets: false,
                                  walletCheckCompleted: walletReady
                                });
                              });

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function onclick() {
                      return _onclick.apply(this, arguments);
                    }

                    return onclick;
                  }(),
                  text: 'Switch Wallet'
                },
                html: html,
                icon: icon || __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["j" /* h */]
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 12]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/* harmony default export */ __webpack_exports__["default"] = (network);

/***/ })

});