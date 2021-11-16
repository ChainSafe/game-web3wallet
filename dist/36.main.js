webpackJsonp([36],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ledgerIcon = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 450\" width=\"37\" height=\"37\"><style>.st0{fill:currentColor}</style><g id=\"squares_1_\"><path class=\"st0\" d=\"M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z\"/><path class=\"st0\" d=\"M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z\"/></g></svg>\n";
var LEDGER_LIVE_PATH = "m/44'/60'";
var ACCOUNTS_TO_GET = 5;

function ledger(options) {
  var rpcUrl = options.rpcUrl,
      LedgerTransport = options.LedgerTransport,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      customNetwork = options.customNetwork;
  return {
    name: label || 'Ledger',
    svg: svg || ledgerIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return ledgerProvider({
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  LedgerTransport: LedgerTransport,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState,
                  customNetwork: customNetwork
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Ledger',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: ['iOS'],
    preferred: preferred
  };
}

function ledgerProvider(_x2) {
  return _ledgerProvider.apply(this, arguments);
}

function _ledgerProvider() {
  _ledgerProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(options) {
    var _yield$import, createProvider, _yield$import2, generateAddresses, isValidPath, _yield$import3, Eth, _yield$import4, Transaction, Capability, _yield$import5, Common, Hardfork, ethUtil, _yield$import6, TypedDataUtils, domainHash, messageHash, networkId, rpcUrl, LedgerTransport, BigNumber, networkName, resetWalletState, customNetwork, dPath, addressToPath, enabled, customPath, account, provider, transport, transportSubscription, eth, disconnect, setPath, _setPath, isCustomPath, createTransport, _createTransport, enable, addresses, setPrimaryAccount, getAddress, _getAddress, getPublicKey, _getPublicKey, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2, _signTypedMessage, _signTypedMessage2;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _signTypedMessage2 = function _signTypedMessage4() {
              _signTypedMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_ref4) {
                var data, path;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        data = _ref4.data;

                        if (!(addressToPath.size === 0)) {
                          _context14.next = 4;
                          break;
                        }

                        _context14.next = 4;
                        return enable();

                      case 4:
                        path = _toConsumableArray(addressToPath.values())[0];
                        return _context14.abrupt("return", eth.signEIP712HashedMessage(path, ethUtil.bufferToHex(domainHash(data)), ethUtil.bufferToHex(messageHash(data))).then(function (result) {
                          var v = (result['v'] - 27).toString(16);

                          if (v.length < 2) {
                            v = '0' + v;
                          }

                          return "0x".concat(result['r']).concat(result['s']).concat(v);
                        }));

                      case 6:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));
              return _signTypedMessage2.apply(this, arguments);
            };

            _signTypedMessage = function _signTypedMessage3(_x10) {
              return _signTypedMessage2.apply(this, arguments);
            };

            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(message) {
                var path;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context13.next = 3;
                          break;
                        }

                        _context13.next = 3;
                        return enable();

                      case 3:
                        path = _toConsumableArray(addressToPath.values())[0];
                        return _context13.abrupt("return", eth.signPersonalMessage(path, ethUtil.stripHexPrefix(message.data)).then(function (result) {
                          var v = (result['v'] - 27).toString(16);

                          if (v.length < 2) {
                            v = '0' + v;
                          }

                          return "0x".concat(result['r']).concat(result['s']).concat(v);
                        }));

                      case 5:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x9) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(transactionData) {
                var path, rlp, common, _transactionData$gas, transaction, unsignedTx, _yield$eth$signTransa, v, r, s, signedTx;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        path = _toConsumableArray(addressToPath.values())[0];
                        rlp = ethUtil.rlp;
                        common = new Common({
                          chain: customNetwork || networkName(networkId),
                          // Berlin is the minimum hardfork that will allow for EIP1559
                          hardfork: Hardfork.Berlin,
                          // List of supported EIPS
                          eips: [1559]
                        });
                        _context12.prev = 3;
                        // The below implemenation is adapted from:
                        // https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/tx#signing-with-a-hardware-or-external-wallet
                        transactionData.gasLimit = (_transactionData$gas = transactionData.gas) !== null && _transactionData$gas !== void 0 ? _transactionData$gas : transactionData.gasLimit;
                        transaction = Transaction.fromTxData(_objectSpread({}, transactionData), {
                          common: common
                        });
                        unsignedTx = transaction.getMessageToSign(false); // If this is not an EIP1559 transaction then it is legacy and it needs to be
                        // rlp encoded before being passed to ledger

                        if (!transaction.supports(Capability.EIP1559FeeMarket)) {
                          unsignedTx = rlp.encode(unsignedTx);
                        }

                        _context12.next = 10;
                        return eth.signTransaction(path, unsignedTx);

                      case 10:
                        _yield$eth$signTransa = _context12.sent;
                        v = _yield$eth$signTransa.v;
                        r = _yield$eth$signTransa.r;
                        s = _yield$eth$signTransa.s;
                        // Reconstruct the signed transaction
                        signedTx = Transaction.fromTxData(_objectSpread(_objectSpread({}, transactionData), {}, {
                          v: "0x".concat(v),
                          r: "0x".concat(r),
                          s: "0x".concat(s)
                        }), {
                          common: common
                        });
                        return _context12.abrupt("return", "0x".concat(signedTx.serialize().toString('hex')));

                      case 18:
                        _context12.prev = 18;
                        _context12.t0 = _context12["catch"](3);
                        throw _context12.t0;

                      case 21:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[3, 18]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x8) {
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
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x7) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(getMore) {
                var currentAccounts, paths, i, _i2, _paths, path, res, addressInfo;

                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (enabled) {
                          _context11.next = 2;
                          break;
                        }

                        return _context11.abrupt("return", []);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context11.next = 4;
                          break;
                        }

                        return _context11.abrupt("return", addresses());

                      case 4:
                        if (eth) {
                          _context11.next = 7;
                          break;
                        }

                        _context11.next = 7;
                        return createTransport();

                      case 7:
                        if (dPath === '') {
                          dPath = LEDGER_LIVE_PATH;
                        }

                        if (!(dPath === LEDGER_LIVE_PATH)) {
                          _context11.next = 24;
                          break;
                        }

                        currentAccounts = addressToPath.size;
                        paths = [];

                        for (i = currentAccounts; i < ACCOUNTS_TO_GET + currentAccounts; i++) {
                          paths.push("".concat(LEDGER_LIVE_PATH, "/").concat(i, "'/0/0"));
                        }

                        _i2 = 0, _paths = paths;

                      case 13:
                        if (!(_i2 < _paths.length)) {
                          _context11.next = 22;
                          break;
                        }

                        path = _paths[_i2];
                        _context11.next = 17;
                        return eth.getAddress(path);

                      case 17:
                        res = _context11.sent;
                        addressToPath.set(res.address, path);

                      case 19:
                        _i2++;
                        _context11.next = 13;
                        break;

                      case 22:
                        _context11.next = 36;
                        break;

                      case 24:
                        if (account) {
                          _context11.next = 34;
                          break;
                        }

                        _context11.prev = 25;
                        _context11.next = 28;
                        return getPublicKey();

                      case 28:
                        account = _context11.sent;
                        _context11.next = 34;
                        break;

                      case 31:
                        _context11.prev = 31;
                        _context11.t0 = _context11["catch"](25);
                        throw _context11.t0;

                      case 34:
                        addressInfo = generateAddresses(account, addressToPath.size);
                        addressInfo.forEach(function (_ref5) {
                          var dPath = _ref5.dPath,
                              address = _ref5.address;
                          addressToPath.set(address, dPath);
                        });

                      case 36:
                        return _context11.abrupt("return", addresses());

                      case 37:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[25, 31]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x6) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context10.sent;
                        return _context10.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return enabled ? addresses()[0] : undefined;
            };

            _getPublicKey = function _getPublicKey3() {
              _getPublicKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var result, publicKey, chainCode;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (dPath) {
                          _context9.next = 2;
                          break;
                        }

                        throw new Error('a derivation path is needed to get the public key');

                      case 2:
                        if (eth) {
                          _context9.next = 5;
                          break;
                        }

                        _context9.next = 5;
                        return createTransport();

                      case 5:
                        _context9.prev = 5;
                        _context9.next = 8;
                        return eth.getAddress(dPath, false, true);

                      case 8:
                        result = _context9.sent;
                        publicKey = result.publicKey, chainCode = result.chainCode;
                        account = {
                          publicKey: publicKey,
                          chainCode: chainCode,
                          path: dPath
                        };
                        return _context9.abrupt("return", account);

                      case 14:
                        _context9.prev = 14;
                        _context9.t0 = _context9["catch"](5);
                        console.error({
                          error: _context9.t0
                        });
                        throw new Error('There was a problem accessing your Ledger accounts.');

                      case 18:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[5, 14]]);
              }));
              return _getPublicKey.apply(this, arguments);
            };

            getPublicKey = function _getPublicKey2() {
              return _getPublicKey.apply(this, arguments);
            };

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(path) {
                var result;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (eth) {
                          _context8.next = 3;
                          break;
                        }

                        _context8.next = 3;
                        return createTransport();

                      case 3:
                        _context8.prev = 3;
                        _context8.next = 6;
                        return eth.getAddress(path);

                      case 6:
                        result = _context8.sent;
                        return _context8.abrupt("return", result.address);

                      case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](3);

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[3, 10]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5) {
              return _getAddress.apply(this, arguments);
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              // make a copy and put in an array
              var accounts = _toConsumableArray(addressToPath.entries());

              var accountIndex = accounts.findIndex(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 1),
                    accountAddress = _ref2[0];

                return accountAddress === address;
              }); // pull the item at the account index out of the array and place at the front

              accounts.unshift(accounts.splice(accountIndex, 1)[0]); // reassign addressToPath to new ordered accounts

              addressToPath = new Map(accounts);
            };

            addresses = function _addresses() {
              return Array.from(addressToPath.keys());
            };

            enable = function _enable() {
              enabled = true;
              return _getAccounts();
            };

            _createTransport = function _createTransport3() {
              _createTransport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var observer, Transport;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        observer = {
                          next: function next(event) {
                            if (event.type === 'remove') {
                              disconnect();
                            }
                          },
                          error: function error() {},
                          complete: function complete() {}
                        }; // Get the Transport class

                        Transport = LedgerTransport;

                        if (Transport) {
                          _context7.next = 16;
                          break;
                        }

                        _context7.next = 6;
                        return supportsWebUSB();

                      case 6:
                        if (!_context7.sent) {
                          _context7.next = 12;
                          break;
                        }

                        _context7.next = 9;
                        return __webpack_require__.e/* import() */(55).then(__webpack_require__.bind(null, 1777));

                      case 9:
                        _context7.t0 = _context7.sent["default"];
                        _context7.next = 15;
                        break;

                      case 12:
                        _context7.next = 14;
                        return __webpack_require__.e/* import() */(62).then(__webpack_require__.bind(null, 1808));

                      case 14:
                        _context7.t0 = _context7.sent["default"];

                      case 15:
                        Transport = _context7.t0;

                      case 16:
                        _context7.next = 18;
                        return Transport.create();

                      case 18:
                        transport = _context7.sent;
                        eth = new Eth(transport);
                        Transport.listen(observer);
                        _context7.next = 27;
                        break;

                      case 23:
                        _context7.prev = 23;
                        _context7.t1 = _context7["catch"](0);
                        console.error(_context7.t1);
                        throw new Error('Error connecting to Ledger wallet');

                      case 27:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[0, 23]]);
              }));
              return _createTransport.apply(this, arguments);
            };

            createTransport = function _createTransport2() {
              return _createTransport.apply(this, arguments);
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path, custom) {
                var address;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (isValidPath(path)) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return", false);

                      case 2:
                        if (path !== dPath) {
                          // clear any exsting addresses if different path
                          addressToPath = new Map();
                        }

                        if (!custom) {
                          _context6.next = 10;
                          break;
                        }

                        _context6.next = 6;
                        return getAddress(path);

                      case 6:
                        address = _context6.sent;
                        addressToPath.set(address, path);
                        customPath = true;
                        return _context6.abrupt("return", true);

                      case 10:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 13:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3, _x4) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              var _transport;

              (_transport = transport) === null || _transport === void 0 ? void 0 : _transport.close();
              transportSubscription === null || transportSubscription === void 0 ? void 0 : transportSubscription.unsubscribe();
              provider.stop();
              resetWalletState({
                disconnected: true,
                walletName: 'Ledger'
              });
            };

            _context15.next = 28;
            return __webpack_require__.e/* import() */(42/* duplicate */).then(__webpack_require__.bind(null, 609));

          case 28:
            _yield$import = _context15.sent;
            createProvider = _yield$import["default"];
            _context15.next = 32;
            return __webpack_require__.e/* import() */(45/* duplicate */).then(__webpack_require__.bind(null, 1025));

          case 32:
            _yield$import2 = _context15.sent;
            generateAddresses = _yield$import2.generateAddresses;
            isValidPath = _yield$import2.isValidPath;
            _context15.next = 37;
            return __webpack_require__.e/* import() */(53).then(__webpack_require__.bind(null, 1814));

          case 37:
            _yield$import3 = _context15.sent;
            Eth = _yield$import3["default"];
            _context15.next = 41;
            return __webpack_require__.e/* import() */(43/* duplicate */).then(__webpack_require__.bind(null, 662));

          case 41:
            _yield$import4 = _context15.sent;
            Transaction = _yield$import4.TransactionFactory;
            Capability = _yield$import4.Capability;
            _context15.next = 46;
            return __webpack_require__.e/* import() */(44/* duplicate */).then(__webpack_require__.bind(null, 642));

          case 46:
            _yield$import5 = _context15.sent;
            Common = _yield$import5["default"];
            Hardfork = _yield$import5.Hardfork;
            _context15.next = 51;
            return __webpack_require__.e/* import() */(46/* duplicate */).then(__webpack_require__.bind(null, 817));

          case 51:
            ethUtil = _context15.sent;
            _context15.next = 54;
            return __webpack_require__.e/* import() */(59).then(__webpack_require__.bind(null, 1838));

          case 54:
            _yield$import6 = _context15.sent;
            TypedDataUtils = _yield$import6.TypedDataUtils;

            domainHash = function domainHash(message) {
              return TypedDataUtils.hashStruct('EIP712Domain', message.domain, message.types, true);
            };

            messageHash = function messageHash(message) {
              return TypedDataUtils.hashStruct(message.primaryType, message.message, message.types, true);
            };

            networkId = options.networkId, rpcUrl = options.rpcUrl, LedgerTransport = options.LedgerTransport, BigNumber = options.BigNumber, networkName = options.networkName, resetWalletState = options.resetWalletState, customNetwork = options.customNetwork;
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
              signTypedMessage: function signTypedMessage(messageData, callback) {
                _signTypedMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
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
            return _context15.abrupt("return", provider);

          case 77:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _ledgerProvider.apply(this, arguments);
}

var supportsWebUSB = function supportsWebUSB() {
  return Promise.resolve(!!navigator && !!navigator.usb && typeof navigator.usb.getDevices === 'function');
};

/* harmony default export */ __webpack_exports__["default"] = (ledger);

/***/ })

});