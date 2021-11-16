webpackJsonp([4,46],{

/***/ 479:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethereumjs_util__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethereumjs_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ethereumjs_util__);
var _errorMessages;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var HANDLE_PIN_PRESS = 'handlePinPress';
var BUTTON_COLOR = "#EBEBED";
var BUTTON_DOT_COLOR = "#33394B";
var ModalType;

(function (ModalType) {
  ModalType[ModalType["Pin"] = 0] = "Pin";
  ModalType[ModalType["Passphrase"] = 1] = "Passphrase";
})(ModalType || (ModalType = {}));

var pinButton = function pinButton(value, slot) {
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '64px';
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '64px';
  return "\n  <button\n    class=\"pin-button\"\n    style=\"width: ".concat(width, "; height: ").concat(height, ";\"\n    type=\"button\"\n    onclick=\"window.").concat(HANDLE_PIN_PRESS, "(").concat(value, ")\">\n      ").concat(slot || "<svg class=\"pin-button-dot\" viewBox=\"0 0 18 18\" width=\"18\" height=\"18\">\n          <circle cx=\"9\" cy=\"9\" r=\"9\" ></circle>\n        </svg>", "\n      <div class=\"pin-button-bg\">\n  </button>\n");
};

var pinButtons = "\n  <div class=\"pin-pad-buttons\">\n    ".concat([7, 8, 9, 4, 5, 6, 1, 2, 3].map(function (val) {
  return pinButton(val);
}).join(''), "\n  </div>\n");
var delButtonIcon = "<svg class=\"del-button-icon\" viewBox=\"0 0 24 24\" focusable=\"false\" class=\"chakra-icon css-onkibi\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></svg>";

var pinPhraseInput = function pinPhraseInput(modalType) {
  return "\n<form id=\"pin-phrase-form\" class=\"pin-phrase-input-container\">\n  <input\n    id=\"pin-phrase-input\"\n    placeholder=\"".concat(modalType === ModalType.Pin ? 'PIN' : '', "\"\n    type=\"password\"\n    autocomplete=\"current-password\"\n  />\n  ").concat(modalType === ModalType.Pin ? " <div class=\"del-button-wrapper\">\n            ".concat(pinButton(-1, delButtonIcon, '38px', '38px'), "\n          </div>") : '', "\n</form>\n");
}; // Contains styles used by both the pin entry modal and the passphrase entry modal


var baseStyles = "\n  .keepkey-modal {\n    max-width: 22rem;\n    padding: 20px 10px;\n  }\n  .pin-phrase-input-container {\n    display: flex;\n    position: relative;\n    align-items: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  #pin-phrase-input {\n    background: inherit;\n    font-size: 0.889em;\n    font-family: inherit;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #242835;\n    border-radius: 4px;\n    padding-left: 0.5rem;\n    padding-right: 4.1rem;\n    transition: opacity 150ms ease-in-out;\n    height: 42px;\n    width: 100%;\n    opacity: 0.6;\n    outline: none;\n  }\n  #pin-phrase-input:hover, #pin-phrase-input:focus {\n    opacity: 1;\n  }\n  .unlock-button {\n    height: 26px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n  }\n  \n  /* Overrides the branding on the modal*/\n  .keepkey-modal + .bn-branding { visibility: hidden !important; }\n  .keepkey-modal .bn-onboard-prepare-button {\n    width: 100%;\n  }\n";
var pinModalStyles = "\n  #entry {\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    padding: 20px;\n  }\n  .pin-pad-buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 75px);\n    grid-template-rows: repeat(3, 75px);\n    align-items: center;\n    justify-items: center;\n    margin-bottom: 15px;\n  }\n  .pin-button {\n    align-items: center;\n    border-radius: 6px;\n    border: 1px solid ".concat(BUTTON_COLOR, ";\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    font-size: 18px;\n    overflow: hidden;\n    padding: 0;\n    background-color: unset;\n    overflow: hidden;\n  }\n  .pin-button-bg {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    overflow: hidden;\n    background-color: ").concat(BUTTON_COLOR, ";\n    transition: opacity 100ms ease-in;\n  }\n  .pin-button-bg:hover {\n    opacity: .2;\n  }\n  .pin-button-dot {\n    fill: ").concat(BUTTON_DOT_COLOR, ";\n    position: absolute;\n    pointer-events: none;\n    z-index: 2;\n  }\n  .del-button-wrapper {\n    position: absolute;\n    height: 42px;\n    width: 42px;\n    right: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .del-button-wrapper > .pin-button {\n    border: none;\n  }\n  .del-button-icon {\n    position: absolute;\n    width: 20px;\n    z-index: 2;\n    pointer-events: none;\n  }\n  .del-button-icon + div {\n    opacity: .5;\n  }\n  .del-button-icon + div:hover {\n    opacity: 1;\n  }\n");
var passphraseModalStyles = "\n  .keepkey-modal {\n    padding: 40px 30px;\n  }\n";
var pinHTML = "\n    <style>".concat(baseStyles).concat(pinModalStyles, "</style>\n    <h2>Enter Your Pin</h2>\n    <p>\n      Use PIN layout shown on your device to find the location to press on this pin pad.\n    </p>\n    <div id=\"entry\" class=\"bn-onboard-custom\">\n      ").concat(pinButtons, "\n      ").concat(pinPhraseInput(ModalType.Pin), "\n    </div>\n  ");
var passphraseHTML = "\n  <style>".concat(baseStyles).concat(passphraseModalStyles, "</style>\n  <h2 style=\"margin-bottom: 35px\">Enter Your Passphrase</h2>\n  <div id=\"entry\" class=\"bn-onboard-custom\">\n    ").concat(pinPhraseInput(ModalType.Passphrase), "\n  </div>\n");

var renderModal = function renderModal(wallet, modalType) {
  var _document$getElementB;

  var modalHtml = modalType === ModalType.Pin ? pinHTML : passphraseHTML;

  var getInput = function getInput() {
    return document.getElementById('pin-phrase-input');
  };

  var deleteWindowProperties = function deleteWindowProperties() {
    delete window[HANDLE_PIN_PRESS];
  };

  if (modalType === ModalType.Pin) {
    window[HANDLE_PIN_PRESS] = function (value) {
      var input = getInput(); // A value of -1 signals a backspace e.g. we delete the last char from the input

      input.value = value === -1 ? input.value.slice(0, -1) : input.value + value;
    };
  } // Creates a modal component which gets mounted to the body and is passed the pin html into it's slot


  var div = document.createElement('div');
  div.innerHTML = modalHtml;
  div.className = 'keepkey-modal';
  var pinModal = new __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["b" /* M */]({
    target: document.body,
    props: {
      closeModal: function closeModal() {
        // Cancels any action that the keepkey wallet may be doing
        wallet.cancel();
        deleteWindowProperties();
        pinModal.$destroy();
      },
      $$slots: createSlot(div),
      $$scope: {}
    }
  }); // Submits the pin or passphrase to the Keepkey device

  var submit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var value;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = getInput().value;

              if (!(modalType === ModalType.Pin)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return wallet.sendPin(value);

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return wallet.sendPassphrase(value);

            case 8:
              pinModal.$destroy();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  (_document$getElementB = document.getElementById('pin-phrase-form')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('submit', function (e) {
    e.preventDefault();
    submit();
  }); // Creates a new Button component used to trigger sending the pin to Keepkey

  var entryEl = document.getElementById('entry');

  if (entryEl) {
    var span = document.createElement('span');
    span.innerHTML = "Unlock";
    span.className = "unlock-button";
    new __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["a" /* B */]({
      target: entryEl,
      props: {
        onclick: function () {
          var _onclick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    submit();
                    deleteWindowProperties();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function onclick() {
            return _onclick.apply(this, arguments);
          }

          return onclick;
        }(),
        $$slots: createSlot(span),
        $$scope: {}
      }
    });
  }
};
/**
 * createSlot - creates the necessary object needed to pass
 * arbitrary html into a component's default slot
 * @param element The html element which is inserted into the components slot
 */


function createSlot(element) {
  return {
    "default": [function () {
      return {
        c: __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["d" /* b */],
        m: function mount(target, anchor) {
          Object(__WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["e" /* c */])(target, element, anchor);
        },
        d: function destroy(detaching) {
          if (detaching) {
            Object(__WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["f" /* d */])(element);
          }
        },
        l: __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["d" /* b */]
      };
    }]
  };
}

var img = "data:image/png;base64,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";
/* eslint-disable @typescript-eslint/camelcase */

/* -= CONSTANTS =- */

var ACCOUNTS_TO_GET = 5;
var WALLET_NAME = 'KeepKey';
var ERROR_BUSY = 'busy';
var ERROR_PAIRING = 'pairing';
var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, ERROR_BUSY, "Your KeepKey is currently connected to another application.\n  Please close any other browser tabs or applications that may be connected to your device and try again."), _defineProperty(_errorMessages, ERROR_PAIRING, 'There was an error pairing the device. Please disconnect and reconnect the device and try again.'), _errorMessages);

function keepkey(options) {
  var label = options.label,
      iconSrc = options.iconSrc,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred; // Used to signal if the keep key could not be paired or if the keep key is already paired with another app

  var _installMessage;

  return {
    name: label || WALLET_NAME,
    iconSrc: iconSrc || img,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
        var BigNumber, resetWalletState, _yield$createKeepKeyP, provider, error;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                BigNumber = _ref2.BigNumber, resetWalletState = _ref2.resetWalletState;
                _context6.next = 3;
                return createKeepKeyProvider({
                  resetWalletState: resetWalletState,
                  BigNumber: BigNumber,
                  rpcUrl: rpcUrl,
                  networkId: networkId
                });

              case 3:
                _yield$createKeepKeyP = _context6.sent;
                provider = _yield$createKeepKeyP.provider;
                error = _yield$createKeepKeyP.error;
                _installMessage = errorMessages[error] || '';
                return _context6.abrupt("return", {
                  provider: provider,
                  "interface": !error ? {
                    name: WALLET_NAME,
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  return _context3.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  return _context4.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context5.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  } : null
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    // The style tag here is used to hide the 'Open KeepKey button'
    installMessage: function installMessage() {
      return _installMessage ? "<style>footer a > button { display: none !important }</style>\n        <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n          ".concat(_installMessage, "\n        </p>") : '';
    },
    type: 'hardware',
    mobile: false,
    desktop: true,
    preferred: preferred
  };
}

function createKeepKeyProvider(_x2) {
  return _createKeepKeyProvider.apply(this, arguments);
}

function _createKeepKeyProvider() {
  _createKeepKeyProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(_ref3) {
    var BigNumber, rpcUrl, resetWalletState, networkId, _yield$import, WebUSBKeepKeyAdapter, _yield$import2, Keyring, Events, bip32ToAddressNList, HDWalletErrorType, _yield$import3, createProvider, _yield$import4, isValidPath, keyring, keepKeyAdapter, keepKeyWallet, DEFAULT_DERIVATION_PATH, dPath, addressToPath, enabled, customPath, provider, enable, _enable, disconnect, setPath, _setPath, isCustomPath, getAddress, _getAddress, addresses, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref8) {
                var message, addressNList, _yield$keepKeyWallet$2, signature;

                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        message = _ref8.data;

                        if (!(addressToPath.size === 0)) {
                          _context15.next = 4;
                          break;
                        }

                        _context15.next = 4;
                        return enable();

                      case 4:
                        addressNList = _toConsumableArray(addressToPath.values())[0];
                        _context15.next = 7;
                        return keepKeyWallet.ethSignMessage({
                          addressNList: addressNList,
                          message: Object(__WEBPACK_IMPORTED_MODULE_5_ethereumjs_util__["toBuffer"])(message).toString('utf8')
                        });

                      case 7:
                        _yield$keepKeyWallet$2 = _context15.sent;
                        signature = _yield$keepKeyWallet$2.signature;
                        return _context15.abrupt("return", signature);

                      case 10:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x10) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(transactionData) {
                var addressNList, nonce, gasPrice, gas, to, value, data, _yield$keepKeyWallet$, serialized;

                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context14.next = 3;
                          break;
                        }

                        _context14.next = 3;
                        return enable();

                      case 3:
                        addressNList = _toConsumableArray(addressToPath.values())[0];
                        nonce = transactionData.nonce, gasPrice = transactionData.gasPrice, gas = transactionData.gas, to = transactionData.to, value = transactionData.value, data = transactionData.data;
                        _context14.next = 7;
                        return keepKeyWallet.ethSignTx({
                          addressNList: addressNList,
                          nonce: nonce,
                          gasPrice: gasPrice,
                          gasLimit: gas,
                          to: to,
                          value: value || '0x0',
                          data: data || '',
                          chainId: networkId
                        });

                      case 7:
                        _yield$keepKeyWallet$ = _context14.sent;
                        serialized = _yield$keepKeyWallet$.serialized;
                        return _context14.abrupt("return", serialized);

                      case 10:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x9) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context8.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x8) {
                    return _ref7.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(getMore) {
                var _keepKeyWallet$descri, accountIdx, startingIndex, i, addressNList, address;

                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (enabled) {
                          _context13.next = 2;
                          break;
                        }

                        return _context13.abrupt("return", []);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context13.next = 4;
                          break;
                        }

                        return _context13.abrupt("return", addresses());

                      case 4:
                        dPath = dPath || DEFAULT_DERIVATION_PATH; // Get the account index from the derivation path

                        _keepKeyWallet$descri = keepKeyWallet.describePath({
                          path: bip32ToAddressNList(dPath),
                          coin: 'Ethereum'
                        }), accountIdx = _keepKeyWallet$descri.accountIdx; // This would only happen if the user provides an invalid dPath and it wasn't caught by the setPath method

                        if (!(accountIdx === undefined)) {
                          _context13.next = 8;
                          break;
                        }

                        throw new Error("Could not derive account from path: ".concat(dPath));

                      case 8:
                        // Calculate the index to start from based on the dPath index and the current number of generated addresses
                        startingIndex = accountIdx + addressToPath.size;
                        i = startingIndex;

                      case 10:
                        if (!(i < ACCOUNTS_TO_GET + startingIndex)) {
                          _context13.next = 19;
                          break;
                        }

                        // Retrieve the array form of the derivation path for a given account index
                        addressNList = keepKeyWallet.ethGetAccountPaths({
                          coin: 'Ethereum',
                          accountIdx: i
                        })[0].addressNList; // Retrieve the address associated with the given account index

                        _context13.next = 14;
                        return keepKeyWallet.ethGetAddress({
                          addressNList: addressNList,
                          showDisplay: false
                        });

                      case 14:
                        address = _context13.sent;
                        // Store the address in our set of generated addresses
                        addressToPath.set(address, addressNList);

                      case 16:
                        i++;
                        _context13.next = 10;
                        break;

                      case 19:
                        return _context13.abrupt("return", addresses());

                      case 20:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x7) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context12.sent;
                        return _context12.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return enabled ? addresses()[0] : undefined;
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              // make a copy and put in an array
              var accounts = _toConsumableArray(addressToPath.entries());

              var accountIndex = accounts.findIndex(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 1),
                    accountAddress = _ref6[0];

                return accountAddress === address;
              }); // pull the item at the account index out of the array and place at the front

              accounts.unshift(accounts.splice(accountIndex, 1)[0]); // reassign addressToPath to new ordered accounts

              addressToPath = new Map(accounts);
            };

            addresses = function _addresses() {
              return Array.from(addressToPath.keys());
            };

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(addressNList, path) {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.prev = 0;
                        return _context11.abrupt("return", keepKeyWallet.ethGetAddress({
                          addressNList: addressNList
                        }));

                      case 4:
                        _context11.prev = 4;
                        _context11.t0 = _context11["catch"](0);
                        throw new Error("Unable to derive address from path ".concat(path));

                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[0, 4]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5, _x6) {
              return _getAddress.apply(this, arguments);
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(path, custom) {
                var addressNList, address;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (isValidPath(path)) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return", false);

                      case 2:
                        if (path !== dPath) {
                          // clear any existing addresses if different path
                          addressToPath = new Map();
                        }

                        if (!custom) {
                          _context10.next = 18;
                          break;
                        }

                        _context10.prev = 4;
                        // Convert the path to the addressNList which is what is used by keepkey for signing
                        addressNList = bip32ToAddressNList(path);
                        _context10.next = 8;
                        return getAddress(addressNList, path);

                      case 8:
                        address = _context10.sent;
                        addressToPath.set(address, addressNList);
                        dPath = path;
                        customPath = true;
                        return _context10.abrupt("return", true);

                      case 15:
                        _context10.prev = 15;
                        _context10.t0 = _context10["catch"](4);
                        throw new Error("There was a problem deriving an address from path ".concat(path));

                      case 18:
                        customPath = false;
                        dPath = path;
                        return _context10.abrupt("return", true);

                      case 21:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[4, 15]]);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3, _x4) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              addressToPath = new Map();
              enabled = false;
              keepKeyWallet.clearSession();
              provider.stop();
            };

            _enable = function _enable3() {
              _enable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        // Cancel any user prompt that may be displayed on the keepkey i.e. the pin matrix
                        keepKeyWallet.cancel()["catch"](function (err) {
                          return err;
                        });
                        enabled = true;
                        return _context9.abrupt("return", _getAccounts()["catch"](function (error) {
                          var _error$message;

                          // If the error.message is an object, then the error message originated from keepkey
                          // So we grab the string and rethrow so the walletcheck can capture and display
                          if (error !== null && error !== void 0 && (_error$message = error.message) !== null && _error$message !== void 0 && _error$message.message) {
                            var _error$message2;

                            throw new Error(error === null || error === void 0 ? void 0 : (_error$message2 = error.message) === null || _error$message2 === void 0 ? void 0 : _error$message2.message);
                          }

                          return [];
                        }));

                      case 3:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));
              return _enable.apply(this, arguments);
            };

            enable = function _enable2() {
              return _enable.apply(this, arguments);
            };

            BigNumber = _ref3.BigNumber, rpcUrl = _ref3.rpcUrl, resetWalletState = _ref3.resetWalletState, networkId = _ref3.networkId;
            _context16.next = 24;
            return __webpack_require__.e/* import() */(48).then(__webpack_require__.bind(null, 1902));

          case 24:
            _yield$import = _context16.sent;
            WebUSBKeepKeyAdapter = _yield$import.WebUSBKeepKeyAdapter;
            _context16.next = 28;
            return __webpack_require__.e/* import() */(51).then(__webpack_require__.bind(null, 589));

          case 28:
            _yield$import2 = _context16.sent;
            Keyring = _yield$import2.Keyring;
            Events = _yield$import2.Events;
            bip32ToAddressNList = _yield$import2.bip32ToAddressNList;
            HDWalletErrorType = _yield$import2.HDWalletErrorType;
            _context16.next = 35;
            return __webpack_require__.e/* import() */(42/* duplicate */).then(__webpack_require__.bind(null, 609));

          case 35:
            _yield$import3 = _context16.sent;
            createProvider = _yield$import3["default"];
            _context16.next = 39;
            return __webpack_require__.e/* import() */(61).then(__webpack_require__.bind(null, 1025));

          case 39:
            _yield$import4 = _context16.sent;
            isValidPath = _yield$import4.isValidPath;
            // Initialize the adapter and pair the device
            keyring = new Keyring();
            keepKeyAdapter = WebUSBKeepKeyAdapter.useKeyring(keyring);
            _context16.prev = 43;
            _context16.next = 46;
            return keepKeyAdapter.pairDevice();

          case 46:
            keepKeyWallet = _context16.sent;
            _context16.next = 57;
            break;

          case 49:
            _context16.prev = 49;
            _context16.t0 = _context16["catch"](43);

            if (!(_context16.t0.name === HDWalletErrorType.ConflictingApp)) {
              _context16.next = 55;
              break;
            }

            return _context16.abrupt("return", {
              provider: undefined,
              error: ERROR_BUSY
            });

          case 55:
            if (!(_context16.t0.name === HDWalletErrorType.WebUSBCouldNotPair)) {
              _context16.next = 57;
              break;
            }

            return _context16.abrupt("return", {
              provider: undefined,
              error: ERROR_PAIRING
            });

          case 57:
            DEFAULT_DERIVATION_PATH = "m/44'/60'/0'/0/0"; // The currently selected derivation path

            dPath = '';
            addressToPath = new Map();
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            keyring.on(['*', '*', Events.DISCONNECT], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      resetWalletState({
                        disconnected: true,
                        walletName: WALLET_NAME
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))); // If the wallet asks for a PIN, open the PIN modal

            keyring.on(['*', '*', Events.PIN_REQUEST], function () {
              renderModal(keepKeyWallet, ModalType.Pin);
            }); // If the wallet asks for a PIN, open the PIN modal

            keyring.on(['*', '*', Events.PASSPHRASE_REQUEST], function () {
              renderModal(keepKeyWallet, ModalType.Passphrase);
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context16.abrupt("return", {
              provider: provider
            });

          case 79:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[43, 49]]);
  }));
  return _createKeepKeyProvider.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (keepkey);

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = __webpack_require__(908).Buffer;
    }
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [number & 0x3ffffff];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [0];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this._strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // '0' - '9'
    if (c >= 48 && c <= 57) {
      return c - 48;
    // 'A' - 'F'
    } else if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    } else {
      assert(false, 'Invalid character in ' + string);
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this._strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var b = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        b = c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        b = c - 17 + 0xa;

      // '0' - '9'
      } else {
        b = c;
      }
      assert(c >= 0 && b < mul, 'Invalid character');
      r += b;
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [0];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this._strip();
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  function move (dest, src) {
    dest.words = src.words;
    dest.length = src.length;
    dest.negative = src.negative;
    dest.red = src.red;
  }

  BN.prototype._move = function _move (dest) {
    move(dest, this);
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype._strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  // Check Symbol.for because not everywhere where Symbol defined
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
  if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') {
    try {
      BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e) {
      BN.prototype.inspect = inspect;
    }
  } else {
    BN.prototype.inspect = inspect;
  }

  function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  }

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modrn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16, 2);
  };

  if (Buffer) {
    BN.prototype.toBuffer = function toBuffer (endian, length) {
      return this.toArrayLike(Buffer, endian, length);
    };
  }

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  var allocate = function allocate (ArrayType, size) {
    if (ArrayType.allocUnsafe) {
      return ArrayType.allocUnsafe(size);
    }
    return new ArrayType(size);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    this._strip();

    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    var res = allocate(ArrayType, reqLength);
    var postfix = endian === 'le' ? 'LE' : 'BE';
    this['_toArrayLike' + postfix](res, byteLength);
    return res;
  };

  BN.prototype._toArrayLikeLE = function _toArrayLikeLE (res, byteLength) {
    var position = 0;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position++] = word & 0xff;
      if (position < res.length) {
        res[position++] = (word >> 8) & 0xff;
      }
      if (position < res.length) {
        res[position++] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position < res.length) {
          res[position++] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position < res.length) {
      res[position++] = carry;

      while (position < res.length) {
        res[position++] = 0;
      }
    }
  };

  BN.prototype._toArrayLikeBE = function _toArrayLikeBE (res, byteLength) {
    var position = res.length - 1;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position--] = word & 0xff;
      if (position >= 0) {
        res[position--] = (word >> 8) & 0xff;
      }
      if (position >= 0) {
        res[position--] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position >= 0) {
          res[position--] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position >= 0) {
      res[position--] = carry;

      while (position >= 0) {
        res[position--] = 0;
      }
    }
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] >>> wbit) & 0x01;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this._strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this._strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this._strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this._strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this._strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this._strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out._strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out._strip();
  }

  function jumboMulTo (self, num, out) {
    // Temporary disable, see https://github.com/indutny/bn.js/issues/211
    // var fftm = new FFTM();
    // return fftm.mulp(self, num, out);
    return bigMulTo(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out._strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this._strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this._strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this._strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) <= num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this._strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this._strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this._strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q._strip();
    }
    a._strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modrn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || (r2 === 1 && cmp === 0)) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modrn = function modrn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return isNegNum ? -acc : acc;
  };

  // WARNING: DEPRECATED
  BN.prototype.modn = function modn (num) {
    return this.modrn(num);
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    this._strip();
    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this._strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is a BN v4 instance
        r.strip();
      } else {
        // r is a BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);

    move(a, a.umod(this.m)._forceRed(this));
    return a;
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baToJSON = exports.toUtf8 = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToHex = exports.bufferToInt = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = exports.intToBuffer = exports.intToHex = void 0;
var bn_js_1 = __importDefault(__webpack_require__(534));
var internal_1 = __webpack_require__(548);
var helpers_1 = __webpack_require__(592);
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
var intToHex = function (i) {
    if (!Number.isSafeInteger(i) || i < 0) {
        throw new Error("Received an invalid integer type: " + i);
    }
    return "0x" + i.toString(16);
};
exports.intToHex = intToHex;
/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
var intToBuffer = function (i) {
    var hex = (0, exports.intToHex)(i);
    return Buffer.from((0, internal_1.padToEven)(hex.slice(2)), 'hex');
};
exports.intToBuffer = intToBuffer;
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
var zeros = function (bytes) {
    return Buffer.allocUnsafe(bytes).fill(0);
};
exports.zeros = zeros;
/**
 * Pads a `Buffer` with zeros till it has `length` bytes.
 * Truncates the beginning or end of input if its length exceeds `length`.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @param right whether to start padding form the left or right
 * @return (Buffer)
 */
var setLength = function (msg, length, right) {
    var buf = (0, exports.zeros)(length);
    if (right) {
        if (msg.length < length) {
            msg.copy(buf);
            return buf;
        }
        return msg.slice(0, length);
    }
    else {
        if (msg.length < length) {
            msg.copy(buf, length - msg.length);
            return buf;
        }
        return msg.slice(-length);
    }
};
/**
 * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
var setLengthLeft = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, false);
};
exports.setLengthLeft = setLengthLeft;
/**
 * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
 * it truncates the end if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
var setLengthRight = function (msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, true);
};
exports.setLengthRight = setLengthRight;
/**
 * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
 * @param a (Buffer|Array|String)
 * @return (Buffer|Array|String)
 */
var stripZeros = function (a) {
    var first = a[0];
    while (a.length > 0 && first.toString() === '0') {
        a = a.slice(1);
        first = a[0];
    }
    return a;
};
/**
 * Trims leading zeros from a `Buffer`.
 * @param a (Buffer)
 * @return (Buffer)
 */
var unpadBuffer = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return stripZeros(a);
};
exports.unpadBuffer = unpadBuffer;
/**
 * Trims leading zeros from an `Array` (of numbers).
 * @param a (number[])
 * @return (number[])
 */
var unpadArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return stripZeros(a);
};
exports.unpadArray = unpadArray;
/**
 * Trims leading zeros from a hex-prefixed `String`.
 * @param a (String)
 * @return (String)
 */
var unpadHexString = function (a) {
    (0, helpers_1.assertIsHexString)(a);
    a = (0, internal_1.stripHexPrefix)(a);
    return stripZeros(a);
};
exports.unpadHexString = unpadHexString;
/**
 * Attempts to turn a value into a `Buffer`.
 * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BN` and other objects
 * with a `toArray()` or `toBuffer()` method.
 * @param v the value
 */
var toBuffer = function (v) {
    if (v === null || v === undefined) {
        return Buffer.allocUnsafe(0);
    }
    if (Buffer.isBuffer(v)) {
        return Buffer.from(v);
    }
    if (Array.isArray(v) || v instanceof Uint8Array) {
        return Buffer.from(v);
    }
    if (typeof v === 'string') {
        if (!(0, internal_1.isHexString)(v)) {
            throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + v);
        }
        return Buffer.from((0, internal_1.padToEven)((0, internal_1.stripHexPrefix)(v)), 'hex');
    }
    if (typeof v === 'number') {
        return (0, exports.intToBuffer)(v);
    }
    if (bn_js_1.default.isBN(v)) {
        return v.toArrayLike(Buffer);
    }
    if (v.toArray) {
        // converts a BN to a Buffer
        return Buffer.from(v.toArray());
    }
    if (v.toBuffer) {
        return Buffer.from(v.toBuffer());
    }
    throw new Error('invalid type');
};
exports.toBuffer = toBuffer;
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
var bufferToInt = function (buf) {
    return new bn_js_1.default((0, exports.toBuffer)(buf)).toNumber();
};
exports.bufferToInt = bufferToInt;
/**
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
var bufferToHex = function (buf) {
    buf = (0, exports.toBuffer)(buf);
    return '0x' + buf.toString('hex');
};
exports.bufferToHex = bufferToHex;
/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
var fromSigned = function (num) {
    return new bn_js_1.default(num).fromTwos(256);
};
exports.fromSigned = fromSigned;
/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
var toUnsigned = function (num) {
    return Buffer.from(num.toTwos(256).toArray());
};
exports.toUnsigned = toUnsigned;
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
var addHexPrefix = function (str) {
    if (typeof str !== 'string') {
        return str;
    }
    return (0, internal_1.isHexPrefixed)(str) ? str : '0x' + str;
};
exports.addHexPrefix = addHexPrefix;
/**
 * Returns the utf8 string representation from a hex string.
 *
 * Examples:
 *
 * Input 1: '657468657265756d000000000000000000000000000000000000000000000000'
 * Input 2: '657468657265756d'
 * Input 3: '000000000000000000000000000000000000000000000000657468657265756d'
 *
 * Output (all 3 input variants): 'ethereum'
 *
 * Note that this method is not intended to be used with hex strings
 * representing quantities in both big endian or little endian notation.
 *
 * @param string Hex string, should be `0x` prefixed
 * @return Utf8 string
 */
var toUtf8 = function (hex) {
    var zerosRegexp = /^(00)+|(00)+$/g;
    hex = (0, internal_1.stripHexPrefix)(hex);
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid non-even hex string input for toUtf8() provided');
    }
    var bufferVal = Buffer.from(hex.replace(zerosRegexp, ''), 'hex');
    return bufferVal.toString('utf8');
};
exports.toUtf8 = toUtf8;
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
var baToJSON = function (ba) {
    if (Buffer.isBuffer(ba)) {
        return "0x" + ba.toString('hex');
    }
    else if (ba instanceof Array) {
        var array = [];
        for (var i = 0; i < ba.length; i++) {
            array.push((0, exports.baToJSON)(ba[i]));
        }
        return array;
    }
};
exports.baToJSON = baToJSON;
//# sourceMappingURL=bytes.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/*
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexString = exports.getKeys = exports.fromAscii = exports.fromUtf8 = exports.toAscii = exports.arrayContainsArray = exports.getBinarySize = exports.padToEven = exports.stripHexPrefix = exports.isHexPrefixed = void 0;
/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param str the string input value
 * @return a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */
function isHexPrefixed(str) {
    if (typeof str !== 'string') {
        throw new Error("[isHexPrefixed] input must be type 'string', received type " + typeof str);
    }
    return str[0] === '0' && str[1] === 'x';
}
exports.isHexPrefixed = isHexPrefixed;
/**
 * Removes '0x' from a given `String` if present
 * @param str the string value
 * @returns the string without 0x prefix
 */
var stripHexPrefix = function (str) {
    if (typeof str !== 'string')
        throw new Error("[stripHexPrefix] input must be type 'string', received " + typeof str);
    return isHexPrefixed(str) ? str.slice(2) : str;
};
exports.stripHexPrefix = stripHexPrefix;
/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */
function padToEven(value) {
    var a = value;
    if (typeof a !== 'string') {
        throw new Error("[padToEven] value must be type 'string', received " + typeof a);
    }
    if (a.length % 2)
        a = "0" + a;
    return a;
}
exports.padToEven = padToEven;
/**
 * Get the binary size of a string
 * @param str
 * @returns the number of bytes contained within the string
 */
function getBinarySize(str) {
    if (typeof str !== 'string') {
        throw new Error("[getBinarySize] method requires input type 'string', recieved " + typeof str);
    }
    return Buffer.byteLength(str, 'utf8');
}
exports.getBinarySize = getBinarySize;
/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param superset
 * @param subset
 *
 */
function arrayContainsArray(superset, subset, some) {
    if (Array.isArray(superset) !== true) {
        throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '" + typeof superset + "'");
    }
    if (Array.isArray(subset) !== true) {
        throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '" + typeof subset + "'");
    }
    return subset[some ? 'some' : 'every'](function (value) { return superset.indexOf(value) >= 0; });
}
exports.arrayContainsArray = arrayContainsArray;
/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */
function toAscii(hex) {
    var str = '';
    var i = 0;
    var l = hex.length;
    if (hex.substring(0, 2) === '0x')
        i = 2;
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }
    return str;
}
exports.toAscii = toAscii;
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @param string
 * @param optional padding
 * @returns hex representation of input string
 */
function fromUtf8(stringValue) {
    var str = Buffer.from(stringValue, 'utf8');
    return "0x" + padToEven(str.toString('hex')).replace(/^0+|0+$/g, '');
}
exports.fromUtf8 = fromUtf8;
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @param  string
 * @param  optional padding
 * @returns  hex representation of input string
 */
function fromAscii(stringValue) {
    var hex = '';
    for (var i = 0; i < stringValue.length; i++) {
        var code = stringValue.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? "0" + n : n;
    }
    return "0x" + hex;
}
exports.fromAscii = fromAscii;
/**
 * Returns the keys from an array of objects.
 * @example
 * ```js
 * getKeys([{a: '1', b: '2'}, {a: '3', b: '4'}], 'a') => ['1', '3']
 *````
 * @param  params
 * @param  key
 * @param  allowEmpty
 * @returns output just a simple array of output keys
 */
function getKeys(params, key, allowEmpty) {
    if (!Array.isArray(params)) {
        throw new Error("[getKeys] method expects input 'params' to be an array, got " + typeof params);
    }
    if (typeof key !== 'string') {
        throw new Error("[getKeys] method expects input 'key' to be type 'string', got " + typeof params);
    }
    var result = [];
    for (var i = 0; i < params.length; i++) {
        var value = params[i][key];
        if (allowEmpty && !value) {
            value = '';
        }
        else if (typeof value !== 'string') {
            throw new Error("invalid abi - expected type 'string', received " + typeof value);
        }
        result.push(value);
    }
    return result;
}
exports.getKeys = getKeys;
/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */
function isHexString(value, length) {
    if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/))
        return false;
    if (length && value.length !== 2 + 2 * length)
        return false;
    return true;
}
exports.isHexString = isHexString;
//# sourceMappingURL=internal.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = void 0;
var internal_1 = __webpack_require__(548);
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
var assertIsHexString = function (input) {
    if (!(0, internal_1.isHexString)(input)) {
        var msg = "This method only supports 0x-prefixed hex strings but input was: " + input;
        throw new Error(msg);
    }
};
exports.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
var assertIsBuffer = function (input) {
    if (!Buffer.isBuffer(input)) {
        var msg = "This method only supports Buffer but input was: " + input;
        throw new Error(msg);
    }
};
exports.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
var assertIsArray = function (input) {
    if (!Array.isArray(input)) {
        var msg = "This method only supports number arrays but input was: " + input;
        throw new Error(msg);
    }
};
exports.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
var assertIsString = function (input) {
    if (typeof input !== 'string') {
        var msg = "This method only supports strings but input was: " + input;
        throw new Error(msg);
    }
};
exports.assertIsString = assertIsString;
//# sourceMappingURL=helpers.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rlphash = exports.ripemd160FromArray = exports.ripemd160FromString = exports.ripemd160 = exports.sha256FromArray = exports.sha256FromString = exports.sha256 = exports.keccakFromArray = exports.keccakFromHexString = exports.keccakFromString = exports.keccak256 = exports.keccak = void 0;
var keccak_1 = __webpack_require__(184);
var createHash = __webpack_require__(23);
var rlp = __importStar(__webpack_require__(45));
var bytes_1 = __webpack_require__(535);
var helpers_1 = __webpack_require__(592);
/**
 * Creates Keccak hash of a Buffer input
 * @param a The input data (Buffer)
 * @param bits (number = 256) The Keccak width
 */
var keccak = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsBuffer)(a);
    switch (bits) {
        case 224: {
            return (0, keccak_1.keccak224)(a);
        }
        case 256: {
            return (0, keccak_1.keccak256)(a);
        }
        case 384: {
            return (0, keccak_1.keccak384)(a);
        }
        case 512: {
            return (0, keccak_1.keccak512)(a);
        }
        default: {
            throw new Error("Invald algorithm: keccak" + bits);
        }
    }
};
exports.keccak = keccak;
/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer)
 */
var keccak256 = function (a) {
    return (0, exports.keccak)(a);
};
exports.keccak256 = keccak256;
/**
 * Creates Keccak hash of a utf-8 string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
var keccakFromString = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsString)(a);
    var buf = Buffer.from(a, 'utf8');
    return (0, exports.keccak)(buf, bits);
};
exports.keccakFromString = keccakFromString;
/**
 * Creates Keccak hash of an 0x-prefixed string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
var keccakFromHexString = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsHexString)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
};
exports.keccakFromHexString = keccakFromHexString;
/**
 * Creates Keccak hash of a number array input
 * @param a The input data (number[])
 * @param bits (number = 256) The Keccak width
 */
var keccakFromArray = function (a, bits) {
    if (bits === void 0) { bits = 256; }
    (0, helpers_1.assertIsArray)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
};
exports.keccakFromArray = keccakFromArray;
/**
 * Creates SHA256 hash of an input.
 * @param  a The input data (Buffer|Array|String)
 */
var _sha256 = function (a) {
    a = (0, bytes_1.toBuffer)(a);
    return createHash('sha256').update(a).digest();
};
/**
 * Creates SHA256 hash of a Buffer input.
 * @param a The input data (Buffer)
 */
var sha256 = function (a) {
    (0, helpers_1.assertIsBuffer)(a);
    return _sha256(a);
};
exports.sha256 = sha256;
/**
 * Creates SHA256 hash of a string input.
 * @param a The input data (string)
 */
var sha256FromString = function (a) {
    (0, helpers_1.assertIsString)(a);
    return _sha256(a);
};
exports.sha256FromString = sha256FromString;
/**
 * Creates SHA256 hash of a number[] input.
 * @param a The input data (number[])
 */
var sha256FromArray = function (a) {
    (0, helpers_1.assertIsArray)(a);
    return _sha256(a);
};
exports.sha256FromArray = sha256FromArray;
/**
 * Creates RIPEMD160 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 * @param padded Whether it should be padded to 256 bits or not
 */
var _ripemd160 = function (a, padded) {
    a = (0, bytes_1.toBuffer)(a);
    var hash = createHash('rmd160').update(a).digest();
    if (padded === true) {
        return (0, bytes_1.setLengthLeft)(hash, 32);
    }
    else {
        return hash;
    }
};
/**
 * Creates RIPEMD160 hash of a Buffer input.
 * @param a The input data (Buffer)
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160 = function (a, padded) {
    (0, helpers_1.assertIsBuffer)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160 = ripemd160;
/**
 * Creates RIPEMD160 hash of a string input.
 * @param a The input data (String)
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160FromString = function (a, padded) {
    (0, helpers_1.assertIsString)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromString = ripemd160FromString;
/**
 * Creates RIPEMD160 hash of a number[] input.
 * @param a The input data (number[])
 * @param padded Whether it should be padded to 256 bits or not
 */
var ripemd160FromArray = function (a, padded) {
    (0, helpers_1.assertIsArray)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromArray = ripemd160FromArray;
/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
var rlphash = function (a) {
    return (0, exports.keccak)(rlp.encode(a));
};
exports.rlphash = rlphash;
//# sourceMappingURL=hash.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toType = exports.TypeOutput = exports.bnToRlp = exports.bnToUnpaddedBuffer = exports.bnToHex = void 0;
var bn_js_1 = __importDefault(__webpack_require__(534));
var internal_1 = __webpack_require__(548);
var bytes_1 = __webpack_require__(535);
/**
 * Convert BN to 0x-prefixed hex string.
 */
function bnToHex(value) {
    return "0x" + value.toString(16);
}
exports.bnToHex = bnToHex;
/**
 * Convert value from BN to an unpadded Buffer
 * (useful for RLP transport)
 * @param value value to convert
 */
function bnToUnpaddedBuffer(value) {
    // Using `bn.toArrayLike(Buffer)` instead of `bn.toBuffer()`
    // for compatibility with browserify and similar tools
    return (0, bytes_1.unpadBuffer)(value.toArrayLike(Buffer));
}
exports.bnToUnpaddedBuffer = bnToUnpaddedBuffer;
/**
 * Deprecated alias for {@link bnToUnpaddedBuffer}
 * @deprecated
 */
function bnToRlp(value) {
    return bnToUnpaddedBuffer(value);
}
exports.bnToRlp = bnToRlp;
/**
 * Type output options
 */
var TypeOutput;
(function (TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BN"] = 1] = "BN";
    TypeOutput[TypeOutput["Buffer"] = 2] = "Buffer";
    TypeOutput[TypeOutput["PrefixedHexString"] = 3] = "PrefixedHexString";
})(TypeOutput = exports.TypeOutput || (exports.TypeOutput = {}));
function toType(input, outputType) {
    if (input === null) {
        return null;
    }
    if (input === undefined) {
        return undefined;
    }
    if (typeof input === 'string' && !(0, internal_1.isHexString)(input)) {
        throw new Error("A string must be provided with a 0x-prefix, given: " + input);
    }
    else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }
    var output = (0, bytes_1.toBuffer)(input);
    if (outputType === TypeOutput.Buffer) {
        return output;
    }
    else if (outputType === TypeOutput.BN) {
        return new bn_js_1.default(output);
    }
    else if (outputType === TypeOutput.Number) {
        var bn = new bn_js_1.default(output);
        var max = new bn_js_1.default(Number.MAX_SAFE_INTEGER.toString());
        if (bn.gt(max)) {
            throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
        }
        return bn.toNumber();
    }
    else {
        // outputType === TypeOutput.PrefixedHexString
        return "0x" + output.toString('hex');
    }
}
exports.toType = toType;
//# sourceMappingURL=types.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.MAX_INTEGER = void 0;
var Buffer = __webpack_require__(0).Buffer;
var bn_js_1 = __importDefault(__webpack_require__(534));
/**
 * The max integer that this VM can handle
 */
exports.MAX_INTEGER = new bn_js_1.default('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
/**
 * 2^256
 */
exports.TWO_POW256 = new bn_js_1.default('10000000000000000000000000000000000000000000000000000000000000000', 16);
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
/**
 * Keccak-256 hash of null
 */
exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
/**
 * Keccak-256 of an RLP of an empty array
 */
exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
/**
 * Keccak-256 hash of the RLP of null
 */
exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex');
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToAddress = exports.privateToPublic = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;
var assert_1 = __importDefault(__webpack_require__(57));
var bn_js_1 = __importDefault(__webpack_require__(534));
var rlp = __importStar(__webpack_require__(45));
var secp256k1_1 = __webpack_require__(88);
var internal_1 = __webpack_require__(548);
var constants_1 = __webpack_require__(721);
var bytes_1 = __webpack_require__(535);
var hash_1 = __webpack_require__(645);
var helpers_1 = __webpack_require__(592);
var types_1 = __webpack_require__(646);
var Account = /** @class */ (function () {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    function Account(nonce, balance, stateRoot, codeHash) {
        if (nonce === void 0) { nonce = new bn_js_1.default(0); }
        if (balance === void 0) { balance = new bn_js_1.default(0); }
        if (stateRoot === void 0) { stateRoot = constants_1.KECCAK256_RLP; }
        if (codeHash === void 0) { codeHash = constants_1.KECCAK256_NULL; }
        this.nonce = nonce;
        this.balance = balance;
        this.stateRoot = stateRoot;
        this.codeHash = codeHash;
        this._validate();
    }
    Account.fromAccountData = function (accountData) {
        var nonce = accountData.nonce, balance = accountData.balance, stateRoot = accountData.stateRoot, codeHash = accountData.codeHash;
        return new Account(nonce ? new bn_js_1.default((0, bytes_1.toBuffer)(nonce)) : undefined, balance ? new bn_js_1.default((0, bytes_1.toBuffer)(balance)) : undefined, stateRoot ? (0, bytes_1.toBuffer)(stateRoot) : undefined, codeHash ? (0, bytes_1.toBuffer)(codeHash) : undefined);
    };
    Account.fromRlpSerializedAccount = function (serialized) {
        var values = rlp.decode(serialized);
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized account input. Must be array');
        }
        return this.fromValuesArray(values);
    };
    Account.fromValuesArray = function (values) {
        var _a = __read(values, 4), nonce = _a[0], balance = _a[1], stateRoot = _a[2], codeHash = _a[3];
        return new Account(new bn_js_1.default(nonce), new bn_js_1.default(balance), stateRoot, codeHash);
    };
    Account.prototype._validate = function () {
        if (this.nonce.lt(new bn_js_1.default(0))) {
            throw new Error('nonce must be greater than zero');
        }
        if (this.balance.lt(new bn_js_1.default(0))) {
            throw new Error('balance must be greater than zero');
        }
        if (this.stateRoot.length !== 32) {
            throw new Error('stateRoot must have a length of 32');
        }
        if (this.codeHash.length !== 32) {
            throw new Error('codeHash must have a length of 32');
        }
    };
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */
    Account.prototype.raw = function () {
        return [
            (0, types_1.bnToUnpaddedBuffer)(this.nonce),
            (0, types_1.bnToUnpaddedBuffer)(this.balance),
            this.stateRoot,
            this.codeHash,
        ];
    };
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */
    Account.prototype.serialize = function () {
        return rlp.encode(this.raw());
    };
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */
    Account.prototype.isContract = function () {
        return !this.codeHash.equals(constants_1.KECCAK256_NULL);
    };
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */
    Account.prototype.isEmpty = function () {
        return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(constants_1.KECCAK256_NULL);
    };
    return Account;
}());
exports.Account = Account;
/**
 * Checks if the address is a valid. Accepts checksummed addresses too.
 */
var isValidAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    return /^0x[0-9a-fA-F]{40}$/.test(hexAddress);
};
exports.isValidAddress = isValidAddress;
/**
 * Returns a checksummed address.
 *
 * If an eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
 * has the effect of checksummed addresses for one chain having invalid checksums for others.
 * For more details see [EIP-1191](https://eips.ethereum.org/EIPS/eip-1191).
 *
 * WARNING: Checksums with and without the chainId will differ and the EIP-1191 checksum is not
 * backwards compatible to the original widely adopted checksum format standard introduced in
 * [EIP-55](https://eips.ethereum.org/EIPS/eip-55), so this will break in existing applications.
 * Usage of this EIP is therefore discouraged unless you have a very targeted use case.
 */
var toChecksumAddress = function (hexAddress, eip1191ChainId) {
    (0, helpers_1.assertIsHexString)(hexAddress);
    var address = (0, internal_1.stripHexPrefix)(hexAddress).toLowerCase();
    var prefix = '';
    if (eip1191ChainId) {
        var chainId = (0, types_1.toType)(eip1191ChainId, types_1.TypeOutput.BN);
        prefix = chainId.toString() + '0x';
    }
    var hash = (0, hash_1.keccakFromString)(prefix + address).toString('hex');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
        }
        else {
            ret += address[i];
        }
    }
    return ret;
};
exports.toChecksumAddress = toChecksumAddress;
/**
 * Checks if the address is a valid checksummed address.
 *
 * See toChecksumAddress' documentation for details about the eip1191ChainId parameter.
 */
var isValidChecksumAddress = function (hexAddress, eip1191ChainId) {
    return (0, exports.isValidAddress)(hexAddress) && (0, exports.toChecksumAddress)(hexAddress, eip1191ChainId) === hexAddress;
};
exports.isValidChecksumAddress = isValidChecksumAddress;
/**
 * Generates an address of a newly created contract.
 * @param from The address which is creating this new address
 * @param nonce The nonce of the from account
 */
var generateAddress = function (from, nonce) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(nonce);
    var nonceBN = new bn_js_1.default(nonce);
    if (nonceBN.isZero()) {
        // in RLP we want to encode null in the case of zero nonce
        // read the RLP documentation for an answer if you dare
        return (0, hash_1.rlphash)([from, null]).slice(-20);
    }
    // Only take the lower 160bits of the hash
    return (0, hash_1.rlphash)([from, Buffer.from(nonceBN.toArray())]).slice(-20);
};
exports.generateAddress = generateAddress;
/**
 * Generates an address for a contract created using CREATE2.
 * @param from The address which is creating this new address
 * @param salt A salt
 * @param initCode The init code of the contract being created
 */
var generateAddress2 = function (from, salt, initCode) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(salt);
    (0, helpers_1.assertIsBuffer)(initCode);
    (0, assert_1.default)(from.length === 20);
    (0, assert_1.default)(salt.length === 32);
    var address = (0, hash_1.keccak256)(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, (0, hash_1.keccak256)(initCode)]));
    return address.slice(-20);
};
exports.generateAddress2 = generateAddress2;
/**
 * Checks if the private key satisfies the rules of the curve secp256k1.
 */
var isValidPrivate = function (privateKey) {
    return (0, secp256k1_1.privateKeyVerify)(privateKey);
};
exports.isValidPrivate = isValidPrivate;
/**
 * Checks if the public key satisfies the rules of the curve secp256k1
 * and the requirements of Ethereum.
 * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
var isValidPublic = function (publicKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length === 64) {
        // Convert to SEC1 for secp256k1
        return (0, secp256k1_1.publicKeyVerify)(Buffer.concat([Buffer.from([4]), publicKey]));
    }
    if (!sanitize) {
        return false;
    }
    return (0, secp256k1_1.publicKeyVerify)(publicKey);
};
exports.isValidPublic = isValidPublic;
/**
 * Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
 * @param sanitize Accept public keys in other formats
 */
var pubToAddress = function (pubKey, sanitize) {
    if (sanitize === void 0) { sanitize = false; }
    (0, helpers_1.assertIsBuffer)(pubKey);
    if (sanitize && pubKey.length !== 64) {
        pubKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(pubKey, false).slice(1));
    }
    (0, assert_1.default)(pubKey.length === 64);
    // Only take the lower 160bits of the hash
    return (0, hash_1.keccak)(pubKey).slice(-20);
};
exports.pubToAddress = pubToAddress;
exports.publicToAddress = exports.pubToAddress;
/**
 * Returns the ethereum public key of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
var privateToPublic = function (privateKey) {
    (0, helpers_1.assertIsBuffer)(privateKey);
    // skip the type flag and use the X, Y points
    return Buffer.from((0, secp256k1_1.publicKeyCreate)(privateKey, false)).slice(1);
};
exports.privateToPublic = privateToPublic;
/**
 * Returns the ethereum address of a given private key.
 * @param privateKey A private key must be 256 bits wide
 */
var privateToAddress = function (privateKey) {
    return (0, exports.publicToAddress)((0, exports.privateToPublic)(privateKey));
};
exports.privateToAddress = privateToAddress;
/**
 * Converts a public key to the Ethereum format.
 */
var importPublic = function (publicKey) {
    (0, helpers_1.assertIsBuffer)(publicKey);
    if (publicKey.length !== 64) {
        publicKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(publicKey, false).slice(1));
    }
    return publicKey;
};
exports.importPublic = importPublic;
/**
 * Returns the zero address.
 */
var zeroAddress = function () {
    var addressLength = 20;
    var addr = (0, bytes_1.zeros)(addressLength);
    return (0, bytes_1.bufferToHex)(addr);
};
exports.zeroAddress = zeroAddress;
/**
 * Checks if a given address is the zero address.
 */
var isZeroAddress = function (hexAddress) {
    try {
        (0, helpers_1.assertIsString)(hexAddress);
    }
    catch (e) {
        return false;
    }
    var zeroAddr = (0, exports.zeroAddress)();
    return zeroAddr === hexAddress;
};
exports.isZeroAddress = isZeroAddress;
//# sourceMappingURL=account.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexString = exports.getKeys = exports.fromAscii = exports.fromUtf8 = exports.toAscii = exports.arrayContainsArray = exports.getBinarySize = exports.padToEven = exports.stripHexPrefix = exports.isHexPrefixed = void 0;
/**
 * Constants
 */
__exportStar(__webpack_require__(721), exports);
/**
 * Account class and helper functions
 */
__exportStar(__webpack_require__(722), exports);
/**
 * Address type
 */
__exportStar(__webpack_require__(909), exports);
/**
 * Hash functions
 */
__exportStar(__webpack_require__(645), exports);
/**
 * ECDSA signature
 */
__exportStar(__webpack_require__(910), exports);
/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
__exportStar(__webpack_require__(535), exports);
/**
 * Function for definining properties on an object
 */
__exportStar(__webpack_require__(911), exports);
/**
 * External exports (BN, rlp, secp256k1)
 */
__exportStar(__webpack_require__(912), exports);
/**
 * Helpful TypeScript types
 */
__exportStar(__webpack_require__(646), exports);
/**
 * Export ethjs-util methods
 */
var internal_1 = __webpack_require__(548);
Object.defineProperty(exports, "isHexPrefixed", { enumerable: true, get: function () { return internal_1.isHexPrefixed; } });
Object.defineProperty(exports, "stripHexPrefix", { enumerable: true, get: function () { return internal_1.stripHexPrefix; } });
Object.defineProperty(exports, "padToEven", { enumerable: true, get: function () { return internal_1.padToEven; } });
Object.defineProperty(exports, "getBinarySize", { enumerable: true, get: function () { return internal_1.getBinarySize; } });
Object.defineProperty(exports, "arrayContainsArray", { enumerable: true, get: function () { return internal_1.arrayContainsArray; } });
Object.defineProperty(exports, "toAscii", { enumerable: true, get: function () { return internal_1.toAscii; } });
Object.defineProperty(exports, "fromUtf8", { enumerable: true, get: function () { return internal_1.fromUtf8; } });
Object.defineProperty(exports, "fromAscii", { enumerable: true, get: function () { return internal_1.fromAscii; } });
Object.defineProperty(exports, "getKeys", { enumerable: true, get: function () { return internal_1.getKeys; } });
Object.defineProperty(exports, "isHexString", { enumerable: true, get: function () { return internal_1.isHexString; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var assert_1 = __importDefault(__webpack_require__(57));
var bn_js_1 = __importDefault(__webpack_require__(534));
var bytes_1 = __webpack_require__(535);
var account_1 = __webpack_require__(722);
var Address = /** @class */ (function () {
    function Address(buf) {
        (0, assert_1.default)(buf.length === 20, 'Invalid address length');
        this.buf = buf;
    }
    /**
     * Returns the zero address.
     */
    Address.zero = function () {
        return new Address((0, bytes_1.zeros)(20));
    };
    /**
     * Returns an Address object from a hex-encoded string.
     * @param str - Hex-encoded address
     */
    Address.fromString = function (str) {
        (0, assert_1.default)((0, account_1.isValidAddress)(str), 'Invalid address');
        return new Address((0, bytes_1.toBuffer)(str));
    };
    /**
     * Returns an address for a given public key.
     * @param pubKey The two points of an uncompressed key
     */
    Address.fromPublicKey = function (pubKey) {
        (0, assert_1.default)(Buffer.isBuffer(pubKey), 'Public key should be Buffer');
        var buf = (0, account_1.pubToAddress)(pubKey);
        return new Address(buf);
    };
    /**
     * Returns an address for a given private key.
     * @param privateKey A private key must be 256 bits wide
     */
    Address.fromPrivateKey = function (privateKey) {
        (0, assert_1.default)(Buffer.isBuffer(privateKey), 'Private key should be Buffer');
        var buf = (0, account_1.privateToAddress)(privateKey);
        return new Address(buf);
    };
    /**
     * Generates an address for a newly created contract.
     * @param from The address which is creating this new address
     * @param nonce The nonce of the from account
     */
    Address.generate = function (from, nonce) {
        (0, assert_1.default)(bn_js_1.default.isBN(nonce));
        return new Address((0, account_1.generateAddress)(from.buf, nonce.toArrayLike(Buffer)));
    };
    /**
     * Generates an address for a contract created using CREATE2.
     * @param from The address which is creating this new address
     * @param salt A salt
     * @param initCode The init code of the contract being created
     */
    Address.generate2 = function (from, salt, initCode) {
        (0, assert_1.default)(Buffer.isBuffer(salt));
        (0, assert_1.default)(Buffer.isBuffer(initCode));
        return new Address((0, account_1.generateAddress2)(from.buf, salt, initCode));
    };
    /**
     * Is address equal to another.
     */
    Address.prototype.equals = function (address) {
        return this.buf.equals(address.buf);
    };
    /**
     * Is address zero.
     */
    Address.prototype.isZero = function () {
        return this.equals(Address.zero());
    };
    /**
     * True if address is in the address range defined
     * by EIP-1352
     */
    Address.prototype.isPrecompileOrSystemAddress = function () {
        var addressBN = new bn_js_1.default(this.buf);
        var rangeMin = new bn_js_1.default(0);
        var rangeMax = new bn_js_1.default('ffff', 'hex');
        return addressBN.gte(rangeMin) && addressBN.lte(rangeMax);
    };
    /**
     * Returns hex encoding of address.
     */
    Address.prototype.toString = function () {
        return '0x' + this.buf.toString('hex');
    };
    /**
     * Returns Buffer representation of address.
     */
    Address.prototype.toBuffer = function () {
        return Buffer.from(this.buf);
    };
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toCompactSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;
var secp256k1_1 = __webpack_require__(88);
var bn_js_1 = __importDefault(__webpack_require__(534));
var bytes_1 = __webpack_require__(535);
var hash_1 = __webpack_require__(645);
var helpers_1 = __webpack_require__(592);
var types_1 = __webpack_require__(646);
function ecsign(msgHash, privateKey, chainId) {
    var _a = (0, secp256k1_1.ecdsaSign)(msgHash, privateKey), signature = _a.signature, recovery = _a.recid;
    var r = Buffer.from(signature.slice(0, 32));
    var s = Buffer.from(signature.slice(32, 64));
    if (!chainId || typeof chainId === 'number') {
        // return legacy type ECDSASignature (deprecated in favor of ECDSASignatureBuffer to handle large chainIds)
        if (chainId && !Number.isSafeInteger(chainId)) {
            throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
        }
        var v_1 = chainId ? recovery + (chainId * 2 + 35) : recovery + 27;
        return { r: r, s: s, v: v_1 };
    }
    var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
    var v = chainIdBN.muln(2).addn(35).addn(recovery).toArrayLike(Buffer);
    return { r: r, s: s, v: v };
}
exports.ecsign = ecsign;
function calculateSigRecovery(v, chainId) {
    var vBN = (0, types_1.toType)(v, types_1.TypeOutput.BN);
    if (!chainId) {
        return vBN.subn(27);
    }
    var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
    return vBN.sub(chainIdBN.muln(2).addn(35));
}
function isValidSigRecovery(recovery) {
    var rec = new bn_js_1.default(recovery);
    return rec.eqn(0) || rec.eqn(1);
}
/**
 * ECDSA public key recovery from signature.
 * @returns Recovered public key
 */
var ecrecover = function (msgHash, v, r, s, chainId) {
    var signature = Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32)], 64);
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    var senderPubKey = (0, secp256k1_1.ecdsaRecover)(signature, recovery.toNumber(), msgHash);
    return Buffer.from((0, secp256k1_1.publicKeyConvert)(senderPubKey, false).slice(1));
};
exports.ecrecover = ecrecover;
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * @returns Signature
 */
var toRpcSig = function (v, r, s, chainId) {
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(s, 32), (0, bytes_1.toBuffer)(v)]));
};
exports.toRpcSig = toRpcSig;
/**
 * Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
 * @returns Signature
 */
var toCompactSig = function (v, r, s, chainId) {
    var recovery = calculateSigRecovery(v, chainId);
    if (!isValidSigRecovery(recovery)) {
        throw new Error('Invalid signature v value');
    }
    var vn = (0, types_1.toType)(v, types_1.TypeOutput.Number);
    var ss = s;
    if ((vn > 28 && vn % 2 === 1) || vn === 1 || vn === 28) {
        ss = Buffer.from(s);
        ss[0] |= 0x80;
    }
    return (0, bytes_1.bufferToHex)(Buffer.concat([(0, bytes_1.setLengthLeft)(r, 32), (0, bytes_1.setLengthLeft)(ss, 32)]));
};
exports.toCompactSig = toCompactSig;
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 */
var fromRpcSig = function (sig) {
    var buf = (0, bytes_1.toBuffer)(sig);
    var r;
    var s;
    var v;
    if (buf.length >= 65) {
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToInt)(buf.slice(64));
    }
    else if (buf.length === 64) {
        // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
        r = buf.slice(0, 32);
        s = buf.slice(32, 64);
        v = (0, bytes_1.bufferToInt)(buf.slice(32, 33)) >> 7;
        s[0] &= 0x7f;
    }
    else {
        throw new Error('Invalid signature length');
    }
    // support both versions of `eth_sign` responses
    if (v < 27) {
        v += 27;
    }
    return {
        v: v,
        r: r,
        s: s,
    };
};
exports.fromRpcSig = fromRpcSig;
/**
 * Validate a ECDSA signature.
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */
var isValidSignature = function (v, r, s, homesteadOrLater, chainId) {
    if (homesteadOrLater === void 0) { homesteadOrLater = true; }
    var SECP256K1_N_DIV_2 = new bn_js_1.default('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
    var SECP256K1_N = new bn_js_1.default('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
    if (r.length !== 32 || s.length !== 32) {
        return false;
    }
    if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
        return false;
    }
    var rBN = new bn_js_1.default(r);
    var sBN = new bn_js_1.default(s);
    if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
        return false;
    }
    if (homesteadOrLater && sBN.cmp(SECP256K1_N_DIV_2) === 1) {
        return false;
    }
    return true;
};
exports.isValidSignature = isValidSignature;
/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 */
var hashPersonalMessage = function (message) {
    (0, helpers_1.assertIsBuffer)(message);
    var prefix = Buffer.from("\u0019Ethereum Signed Message:\n" + message.length, 'utf-8');
    return (0, hash_1.keccak)(Buffer.concat([prefix, message]));
};
exports.hashPersonalMessage = hashPersonalMessage;
//# sourceMappingURL=signature.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineProperties = void 0;
var assert_1 = __importDefault(__webpack_require__(57));
var internal_1 = __webpack_require__(548);
var rlp = __importStar(__webpack_require__(45));
var bytes_1 = __webpack_require__(535);
/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param self the `Object` to define properties on
 * @param fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param data data to be validated against the definitions
 * @deprecated
 */
var defineProperties = function (self, fields, data) {
    self.raw = [];
    self._fields = [];
    // attach the `toJSON`
    self.toJSON = function (label) {
        if (label === void 0) { label = false; }
        if (label) {
            var obj_1 = {};
            self._fields.forEach(function (field) {
                obj_1[field] = "0x" + self[field].toString('hex');
            });
            return obj_1;
        }
        return (0, bytes_1.baToJSON)(self.raw);
    };
    self.serialize = function serialize() {
        return rlp.encode(self.raw);
    };
    fields.forEach(function (field, i) {
        self._fields.push(field.name);
        function getter() {
            return self.raw[i];
        }
        function setter(v) {
            v = (0, bytes_1.toBuffer)(v);
            if (v.toString('hex') === '00' && !field.allowZero) {
                v = Buffer.allocUnsafe(0);
            }
            if (field.allowLess && field.length) {
                v = (0, bytes_1.unpadBuffer)(v);
                (0, assert_1.default)(field.length >= v.length, "The field " + field.name + " must not have more " + field.length + " bytes");
            }
            else if (!(field.allowZero && v.length === 0) && field.length) {
                (0, assert_1.default)(field.length === v.length, "The field " + field.name + " must have byte length of " + field.length);
            }
            self.raw[i] = v;
        }
        Object.defineProperty(self, field.name, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter,
        });
        if (field.default) {
            self[field.name] = field.default;
        }
        // attach alias
        if (field.alias) {
            Object.defineProperty(self, field.alias, {
                enumerable: false,
                configurable: true,
                set: setter,
                get: getter,
            });
        }
    });
    // if the constuctor is passed data
    if (data) {
        if (typeof data === 'string') {
            data = Buffer.from((0, internal_1.stripHexPrefix)(data), 'hex');
        }
        if (Buffer.isBuffer(data)) {
            data = rlp.decode(data);
        }
        if (Array.isArray(data)) {
            if (data.length > self._fields.length) {
                throw new Error('wrong number of fields in data');
            }
            // make sure all the items are buffers
            data.forEach(function (d, i) {
                self[self._fields[i]] = (0, bytes_1.toBuffer)(d);
            });
        }
        else if (typeof data === 'object') {
            var keys_1 = Object.keys(data);
            fields.forEach(function (field) {
                if (keys_1.indexOf(field.name) !== -1)
                    self[field.name] = data[field.name];
                if (keys_1.indexOf(field.alias) !== -1)
                    self[field.alias] = data[field.alias];
            });
        }
        else {
            throw new Error('invalid data');
        }
    }
};
exports.defineProperties = defineProperties;
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).Buffer))

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Re-exports commonly used modules:
 * * Exports [`BN`](https://github.com/indutny/bn.js), [`rlp`](https://github.com/ethereumjs/rlp).
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rlp = exports.BN = void 0;
var bn_js_1 = __importDefault(__webpack_require__(534));
exports.BN = bn_js_1.default;
var rlp = __importStar(__webpack_require__(45));
exports.rlp = rlp;
//# sourceMappingURL=externals.js.map

/***/ })

});