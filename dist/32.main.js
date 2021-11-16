webpackJsonp([32],{

/***/ 460:
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

var trezorIcon = "\n\t<svg width=\"40px\" height=\"40px\" viewBox=\"0 0 114 166\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t<g id=\"Styles\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t<path d=\"M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z\" id=\"Trezor-logo\" fill=\"currentColor\"></path>\n\t\t</g>\n\t</svg>\n";

function trezor(options) {
  var rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      email = options.email,
      appUrl = options.appUrl,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      customNetwork = options.customNetwork;
  return {
    name: label || 'Trezor',
    svg: svg || trezorIcon,
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
                return trezorProvider({
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  email: email,
                  appUrl: appUrl,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  customNetwork: customNetwork,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Trezor',
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

function trezorProvider(_x2) {
  return _trezorProvider.apply(this, arguments);
}

function _trezorProvider() {
  _trezorProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(options) {
    var TrezorConnectLibrary, _yield$import, Transaction, _yield$import2, Common, ethUtil, _yield$import3, createProvider, _yield$import4, generateAddresses, isValidPath, TrezorConnect, DEVICE_EVENT, DEVICE, TREZOR_DEFAULT_PATH, networkId, email, appUrl, rpcUrl, BigNumber, networkName, customNetwork, resetWalletState, dPath, addressToPath, enabled, customPath, account, provider, disconnect, setPath, _setPath, isCustomPath, enable, getAddress, _getAddress, addresses, setPrimaryAccount, getPublicKey, _getPublicKey, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, trezorSignTransaction, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(message) {
                var _, address, path;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context12.next = 3;
                          break;
                        }

                        _context12.next = 3;
                        return enable();

                      case 3:
                        _ = _slicedToArray(_toConsumableArray(addressToPath.entries())[0], 2), address = _[0], path = _[1];
                        return _context12.abrupt("return", new Promise(function (resolve, reject) {
                          TrezorConnect.ethereumSignMessage({
                            path: path,
                            message: ethUtil.stripHexPrefix(message.data),
                            hex: true
                          }).then(function (response) {
                            if (response.success) {
                              if (response.payload.address !== ethUtil.toChecksumAddress(address)) {
                                reject(new Error('signature doesnt match the right address'));
                              }

                              var signature = "0x".concat(response.payload.signature);
                              resolve(signature);
                            } else {
                              reject(new Error(response.payload && response.payload.error || 'There was an error signing a message'));
                            }
                          });
                        }));

                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x9) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(transactionData) {
                var _transactionData$gas;

                var path, BN, toBuffer, common, transaction, trezorResult, v, rv, cv;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context11.next = 3;
                          break;
                        }

                        _context11.next = 3;
                        return enable();

                      case 3:
                        path = _toConsumableArray(addressToPath.values())[0];
                        BN = ethUtil.BN, toBuffer = ethUtil.toBuffer;
                        common = new Common({
                          chain: customNetwork || networkName(networkId)
                        });
                        transaction = Transaction.fromTxData(_objectSpread(_objectSpread({}, transactionData), {}, {
                          gasLimit: (_transactionData$gas = transactionData.gas) !== null && _transactionData$gas !== void 0 ? _transactionData$gas : transactionData.gasLimit
                        }), {
                          common: common,
                          freeze: false
                        });
                        transaction.v = new BN(toBuffer(networkId));
                        transaction.r = transaction.s = new BN(toBuffer(0));
                        _context11.next = 11;
                        return trezorSignTransaction(path, transactionData);

                      case 11:
                        trezorResult = _context11.sent;

                        if (trezorResult.success) {
                          _context11.next = 14;
                          break;
                        }

                        throw new Error(trezorResult.payload.error);

                      case 14:
                        v = trezorResult.payload.v.toString(16); // EIP155 support. check/recalc signature v value.

                        rv = parseInt(v, 16);
                        cv = networkId * 2 + 35;

                        if (rv !== cv && (rv & cv) !== rv) {
                          cv += 1; // add signature v bit.
                        }

                        v = cv.toString(16);
                        transaction.v = new BN(toBuffer("0x".concat(v)));
                        transaction.r = new BN(toBuffer("".concat(trezorResult.payload.r)));
                        transaction.s = new BN(toBuffer("".concat(trezorResult.payload.s)));
                        return _context11.abrupt("return", "0x".concat(transaction.serialize().toString('hex')));

                      case 23:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x8) {
              return _signTransaction2.apply(this, arguments);
            };

            trezorSignTransaction = function _trezorSignTransactio(path, transactionData) {
              var nonce = transactionData.nonce,
                  gasPrice = transactionData.gasPrice,
                  gas = transactionData.gas,
                  to = transactionData.to,
                  value = transactionData.value,
                  data = transactionData.data;
              return TrezorConnect.ethereumSignTransaction({
                path: path,
                transaction: {
                  nonce: nonce,
                  gasPrice: gasPrice,
                  gasLimit: gas,
                  to: to,
                  value: value || '',
                  data: data || '',
                  chainId: networkId
                }
              });
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
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(getMore) {
                var addressInfo;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (enabled) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return", [undefined]);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context10.next = 4;
                          break;
                        }

                        return _context10.abrupt("return", addresses());

                      case 4:
                        if (dPath === '') {
                          dPath = TREZOR_DEFAULT_PATH;
                        }

                        if (account) {
                          _context10.next = 15;
                          break;
                        }

                        _context10.prev = 6;
                        _context10.next = 9;
                        return getPublicKey();

                      case 9:
                        account = _context10.sent;
                        _context10.next = 15;
                        break;

                      case 12:
                        _context10.prev = 12;
                        _context10.t0 = _context10["catch"](6);
                        throw _context10.t0;

                      case 15:
                        addressInfo = generateAddresses(account, addressToPath.size);
                        addressInfo.forEach(function (_ref4) {
                          var dPath = _ref4.dPath,
                              address = _ref4.address;
                          addressToPath.set(address, dPath);
                        });
                        return _context10.abrupt("return", addresses());

                      case 18:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[6, 12]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x6) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context9.sent;
                        return _context9.abrupt("return", getBalances(accounts));

                      case 4:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
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
              _getPublicKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var result;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (dPath) {
                          _context8.next = 2;
                          break;
                        }

                        throw new Error('a derivation path is needed to get the public key');

                      case 2:
                        _context8.prev = 2;
                        _context8.next = 5;
                        return TrezorConnect.getPublicKey({
                          path: dPath,
                          coin: 'eth'
                        });

                      case 5:
                        result = _context8.sent;

                        if (result.success) {
                          _context8.next = 8;
                          break;
                        }

                        throw new Error(result.payload.error);

                      case 8:
                        account = {
                          publicKey: result.payload.publicKey,
                          chainCode: result.payload.chainCode,
                          path: result.payload.serializedPath
                        };
                        return _context8.abrupt("return", account);

                      case 12:
                        _context8.prev = 12;
                        _context8.t0 = _context8["catch"](2);
                        throw new Error('There was an error accessing your Trezor accounts.');

                      case 15:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[2, 12]]);
              }));
              return _getPublicKey.apply(this, arguments);
            };

            getPublicKey = function _getPublicKey2() {
              return _getPublicKey.apply(this, arguments);
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

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(path) {
                var errorMsg, result;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        errorMsg = "Unable to derive address from path ".concat(path);
                        _context7.prev = 1;
                        _context7.next = 4;
                        return TrezorConnect.ethereumGetAddress({
                          path: path,
                          showOnTrezor: false
                        });

                      case 4:
                        result = _context7.sent;

                        if (result.success) {
                          _context7.next = 7;
                          break;
                        }

                        throw new Error(errorMsg);

                      case 7:
                        return _context7.abrupt("return", result.payload.address);

                      case 10:
                        _context7.prev = 10;
                        _context7.t0 = _context7["catch"](1);
                        throw new Error(errorMsg);

                      case 13:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 10]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5) {
              return _getAddress.apply(this, arguments);
            };

            enable = function _enable() {
              enabled = true;
              return _getAccounts();
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
                          _context6.next = 17;
                          break;
                        }

                        _context6.prev = 4;
                        _context6.next = 7;
                        return getAddress(path);

                      case 7:
                        address = _context6.sent;
                        addressToPath.set(address, path);
                        dPath = path;
                        customPath = true;
                        return _context6.abrupt("return", true);

                      case 14:
                        _context6.prev = 14;
                        _context6.t0 = _context6["catch"](4);
                        throw new Error("There was a problem deriving an address from path ".concat(path));

                      case 17:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 20:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[4, 14]]);
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
              provider.stop();
            };

            _context13.next = 25;
            return __webpack_require__.e/* import() */(54).then(__webpack_require__.bind(null, 1653));

          case 25:
            TrezorConnectLibrary = _context13.sent;
            _context13.next = 28;
            return __webpack_require__.e/* import() */(43/* duplicate */).then(__webpack_require__.bind(null, 662));

          case 28:
            _yield$import = _context13.sent;
            Transaction = _yield$import.Transaction;
            _context13.next = 32;
            return __webpack_require__.e/* import() */(44/* duplicate */).then(__webpack_require__.bind(null, 642));

          case 32:
            _yield$import2 = _context13.sent;
            Common = _yield$import2["default"];
            _context13.next = 36;
            return __webpack_require__.e/* import() */(46/* duplicate */).then(__webpack_require__.bind(null, 817));

          case 36:
            ethUtil = _context13.sent;
            _context13.next = 39;
            return __webpack_require__.e/* import() */(42/* duplicate */).then(__webpack_require__.bind(null, 609));

          case 39:
            _yield$import3 = _context13.sent;
            createProvider = _yield$import3["default"];
            _context13.next = 43;
            return __webpack_require__.e/* import() */(45/* duplicate */).then(__webpack_require__.bind(null, 1025));

          case 43:
            _yield$import4 = _context13.sent;
            generateAddresses = _yield$import4.generateAddresses;
            isValidPath = _yield$import4.isValidPath;
            TrezorConnect = TrezorConnectLibrary["default"], DEVICE_EVENT = TrezorConnectLibrary.DEVICE_EVENT, DEVICE = TrezorConnectLibrary.DEVICE;
            TREZOR_DEFAULT_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, email = options.email, appUrl = options.appUrl, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName, customNetwork = options.customNetwork, resetWalletState = options.resetWalletState;
            dPath = '';
            addressToPath = new Map();
            enabled = false;
            customPath = false;
            TrezorConnect.manifest({
              email: email,
              appUrl: appUrl
            });
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
            TrezorConnect.on(DEVICE_EVENT, function (event) {
              if (event.type === DEVICE.DISCONNECT) {
                provider.stop();
                resetWalletState({
                  disconnected: true,
                  walletName: 'Trezor'
                });
              }
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
            return _context13.abrupt("return", provider);

          case 69:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _trezorProvider.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (trezor);

/***/ })

});