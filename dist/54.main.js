webpackJsonp([54],{

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(898);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CALL = exports.ERROR = exports.INIT = exports.LOADED = exports.BOOTSTRAP = void 0;
// Message called from iframe.html inline script before "window.onload" event. This is first message from iframe to window.opener.
var BOOTSTRAP = 'iframe-bootstrap'; // Message from iframe.js to window.opener, called after "window.onload" event. This is second message from iframe to window.opener.

exports.BOOTSTRAP = BOOTSTRAP;
var LOADED = 'iframe-loaded'; // Message from window.opener to iframe.js

exports.LOADED = LOADED;
var INIT = 'iframe-init'; // Error message from iframe.js to window.opener. Could be thrown during iframe initialization process

exports.INIT = INIT;
var ERROR = 'iframe-error'; // Message from window.opener to iframe. Call method

exports.ERROR = ERROR;
var CALL = 'iframe-call';
exports.CALL = CALL;

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CLOSE_WINDOW = exports.CANCEL_POPUP_REQUEST = exports.CLOSED = exports.HANDSHAKE = exports.EXTENSION_USB_PERMISSIONS = exports.ERROR = exports.INIT = exports.LOADED = exports.BOOTSTRAP = void 0;
// Message called from popup.html inline script before "window.onload" event. This is first message from popup to window.opener.
var BOOTSTRAP = 'popup-bootstrap'; // Message from popup.js to window.opener, called after "window.onload" event. This is second message from popup to window.opener.

exports.BOOTSTRAP = BOOTSTRAP;
var LOADED = 'popup-loaded'; // Message from window.opener to popup.js. Send settings to popup. This is first message from window.opener to popup.

exports.LOADED = LOADED;
var INIT = 'popup-init'; // Error message from popup to window.opener. Could be thrown during popup initialization process (POPUP.INIT)

exports.INIT = INIT;
var ERROR = 'popup-error'; // Message to webextensions, opens "trezor-usb-permission.html" within webextension

exports.ERROR = ERROR;
var EXTENSION_USB_PERMISSIONS = 'open-usb-permissions'; // Message called from both [popup > iframe] then [iframe > popup] in this exact order.
// Firstly popup call iframe to resolve popup promise in Core
// Then iframe reacts to POPUP.HANDSHAKE message and sends ConnectSettings, transport information and requested method details back to popup

exports.EXTENSION_USB_PERMISSIONS = EXTENSION_USB_PERMISSIONS;
var HANDSHAKE = 'popup-handshake'; // Event emitted from PopupManager at the end of popup closing process.
// Sent from popup thru window.opener to an iframe because message channel between popup and iframe is no longer available

exports.HANDSHAKE = HANDSHAKE;
var CLOSED = 'popup-closed'; // Message called from iframe to popup, it means that popup will not be needed (example: Blockchain methods are not using popup at all)
// This will close active popup window and/or clear opening process in PopupManager (maybe popup wasn't opened yet)

exports.CLOSED = CLOSED;
var CANCEL_POPUP_REQUEST = 'ui-cancel-popup-request'; // Message called from inline element in popup.html (window.closeWindow), this is used only with webextensions to properly handle popup close event

exports.CANCEL_POPUP_REQUEST = CANCEL_POPUP_REQUEST;
var CLOSE_WINDOW = 'window.close';
exports.CLOSE_WINDOW = CLOSE_WINDOW;

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.IFRAME_FAILURE = exports.ADDRESS_VALIDATION = exports.BUNDLE_PROGRESS = exports.LOGIN_CHALLENGE_RESPONSE = exports.LOGIN_CHALLENGE_REQUEST = exports.CUSTOM_MESSAGE_RESPONSE = exports.CUSTOM_MESSAGE_REQUEST = exports.CHANGE_SETTINGS = exports.RECEIVE_WORD = exports.RECEIVE_FEE = exports.RECEIVE_ACCOUNT = exports.CHANGE_ACCOUNT = exports.RECEIVE_DEVICE = exports.RECEIVE_PASSPHRASE = exports.RECEIVE_PIN = exports.RECEIVE_CONFIRMATION = exports.RECEIVE_PERMISSION = exports.REQUEST_WORD = exports.REQUEST_BUTTON = exports.INSUFFICIENT_FUNDS = exports.UPDATE_CUSTOM_FEE = exports.SELECT_FEE = exports.SELECT_ACCOUNT = exports.SELECT_DEVICE = exports.SET_OPERATION = exports.LOADING = exports.CONNECT = exports.INVALID_PASSPHRASE_ACTION = exports.INVALID_PASSPHRASE = exports.REQUEST_PASSPHRASE_ON_DEVICE = exports.REQUEST_PASSPHRASE = exports.INVALID_PIN = exports.REQUEST_PIN = exports.REQUEST_CONFIRMATION = exports.REQUEST_PERMISSION = exports.CLOSE_UI_WINDOW = exports.REQUEST_UI_WINDOW = exports.DEVICE_NEEDS_BACKUP = exports.FIRMWARE_PROGRESS = exports.FIRMWARE_NOT_INSTALLED = exports.FIRMWARE_NOT_COMPATIBLE = exports.FIRMWARE_NOT_SUPPORTED = exports.FIRMWARE_OUTDATED = exports.FIRMWARE_OLD = exports.SEEDLESS = exports.INITIALIZE = exports.REQUIRE_MODE = exports.NOT_IN_BOOTLOADER = exports.BOOTLOADER = exports.TRANSPORT = void 0;
var TRANSPORT = 'ui-no_transport';
exports.TRANSPORT = TRANSPORT;
var BOOTLOADER = 'ui-device_bootloader_mode';
exports.BOOTLOADER = BOOTLOADER;
var NOT_IN_BOOTLOADER = 'ui-device_not_in_bootloader_mode';
exports.NOT_IN_BOOTLOADER = NOT_IN_BOOTLOADER;
var REQUIRE_MODE = 'ui-device_require_mode';
exports.REQUIRE_MODE = REQUIRE_MODE;
var INITIALIZE = 'ui-device_not_initialized';
exports.INITIALIZE = INITIALIZE;
var SEEDLESS = 'ui-device_seedless';
exports.SEEDLESS = SEEDLESS;
var FIRMWARE_OLD = 'ui-device_firmware_old';
exports.FIRMWARE_OLD = FIRMWARE_OLD;
var FIRMWARE_OUTDATED = 'ui-device_firmware_outdated';
exports.FIRMWARE_OUTDATED = FIRMWARE_OUTDATED;
var FIRMWARE_NOT_SUPPORTED = 'ui-device_firmware_unsupported';
exports.FIRMWARE_NOT_SUPPORTED = FIRMWARE_NOT_SUPPORTED;
var FIRMWARE_NOT_COMPATIBLE = 'ui-device_firmware_not_compatible';
exports.FIRMWARE_NOT_COMPATIBLE = FIRMWARE_NOT_COMPATIBLE;
var FIRMWARE_NOT_INSTALLED = 'ui-device_firmware_not_installed';
exports.FIRMWARE_NOT_INSTALLED = FIRMWARE_NOT_INSTALLED;
var FIRMWARE_PROGRESS = 'ui-firmware-progress';
exports.FIRMWARE_PROGRESS = FIRMWARE_PROGRESS;
var DEVICE_NEEDS_BACKUP = 'ui-device_needs_backup';
exports.DEVICE_NEEDS_BACKUP = DEVICE_NEEDS_BACKUP;
var REQUEST_UI_WINDOW = 'ui-request_window';
exports.REQUEST_UI_WINDOW = REQUEST_UI_WINDOW;
var CLOSE_UI_WINDOW = 'ui-close_window';
exports.CLOSE_UI_WINDOW = CLOSE_UI_WINDOW;
var REQUEST_PERMISSION = 'ui-request_permission';
exports.REQUEST_PERMISSION = REQUEST_PERMISSION;
var REQUEST_CONFIRMATION = 'ui-request_confirmation';
exports.REQUEST_CONFIRMATION = REQUEST_CONFIRMATION;
var REQUEST_PIN = 'ui-request_pin';
exports.REQUEST_PIN = REQUEST_PIN;
var INVALID_PIN = 'ui-invalid_pin';
exports.INVALID_PIN = INVALID_PIN;
var REQUEST_PASSPHRASE = 'ui-request_passphrase';
exports.REQUEST_PASSPHRASE = REQUEST_PASSPHRASE;
var REQUEST_PASSPHRASE_ON_DEVICE = 'ui-request_passphrase_on_device';
exports.REQUEST_PASSPHRASE_ON_DEVICE = REQUEST_PASSPHRASE_ON_DEVICE;
var INVALID_PASSPHRASE = 'ui-invalid_passphrase';
exports.INVALID_PASSPHRASE = INVALID_PASSPHRASE;
var INVALID_PASSPHRASE_ACTION = 'ui-invalid_passphrase_action';
exports.INVALID_PASSPHRASE_ACTION = INVALID_PASSPHRASE_ACTION;
var CONNECT = 'ui-connect';
exports.CONNECT = CONNECT;
var LOADING = 'ui-loading';
exports.LOADING = LOADING;
var SET_OPERATION = 'ui-set_operation';
exports.SET_OPERATION = SET_OPERATION;
var SELECT_DEVICE = 'ui-select_device';
exports.SELECT_DEVICE = SELECT_DEVICE;
var SELECT_ACCOUNT = 'ui-select_account';
exports.SELECT_ACCOUNT = SELECT_ACCOUNT;
var SELECT_FEE = 'ui-select_fee';
exports.SELECT_FEE = SELECT_FEE;
var UPDATE_CUSTOM_FEE = 'ui-update_custom_fee';
exports.UPDATE_CUSTOM_FEE = UPDATE_CUSTOM_FEE;
var INSUFFICIENT_FUNDS = 'ui-insufficient_funds';
exports.INSUFFICIENT_FUNDS = INSUFFICIENT_FUNDS;
var REQUEST_BUTTON = 'ui-button';
exports.REQUEST_BUTTON = REQUEST_BUTTON;
var REQUEST_WORD = 'ui-request_word';
exports.REQUEST_WORD = REQUEST_WORD;
var RECEIVE_PERMISSION = 'ui-receive_permission';
exports.RECEIVE_PERMISSION = RECEIVE_PERMISSION;
var RECEIVE_CONFIRMATION = 'ui-receive_confirmation';
exports.RECEIVE_CONFIRMATION = RECEIVE_CONFIRMATION;
var RECEIVE_PIN = 'ui-receive_pin';
exports.RECEIVE_PIN = RECEIVE_PIN;
var RECEIVE_PASSPHRASE = 'ui-receive_passphrase';
exports.RECEIVE_PASSPHRASE = RECEIVE_PASSPHRASE;
var RECEIVE_DEVICE = 'ui-receive_device';
exports.RECEIVE_DEVICE = RECEIVE_DEVICE;
var CHANGE_ACCOUNT = 'ui-change_account';
exports.CHANGE_ACCOUNT = CHANGE_ACCOUNT;
var RECEIVE_ACCOUNT = 'ui-receive_account';
exports.RECEIVE_ACCOUNT = RECEIVE_ACCOUNT;
var RECEIVE_FEE = 'ui-receive_fee';
exports.RECEIVE_FEE = RECEIVE_FEE;
var RECEIVE_WORD = 'ui-receive_word';
exports.RECEIVE_WORD = RECEIVE_WORD;
var CHANGE_SETTINGS = 'ui-change_settings';
exports.CHANGE_SETTINGS = CHANGE_SETTINGS;
var CUSTOM_MESSAGE_REQUEST = 'ui-custom_request';
exports.CUSTOM_MESSAGE_REQUEST = CUSTOM_MESSAGE_REQUEST;
var CUSTOM_MESSAGE_RESPONSE = 'ui-custom_response';
exports.CUSTOM_MESSAGE_RESPONSE = CUSTOM_MESSAGE_RESPONSE;
var LOGIN_CHALLENGE_REQUEST = 'ui-login_challenge_request';
exports.LOGIN_CHALLENGE_REQUEST = LOGIN_CHALLENGE_REQUEST;
var LOGIN_CHALLENGE_RESPONSE = 'ui-login_challenge_response';
exports.LOGIN_CHALLENGE_RESPONSE = LOGIN_CHALLENGE_RESPONSE;
var BUNDLE_PROGRESS = 'ui-bundle_progress';
exports.BUNDLE_PROGRESS = BUNDLE_PROGRESS;
var ADDRESS_VALIDATION = 'ui-address_validation';
exports.ADDRESS_VALIDATION = ADDRESS_VALIDATION;
var IFRAME_FAILURE = 'ui-iframe_failure';
exports.IFRAME_FAILURE = IFRAME_FAILURE;

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.getOrigin = exports.httpRequest = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(571));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(572));

__webpack_require__(1667);

var httpRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, type) {
    var response, txt;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (type === void 0) {
              type = 'text';
            }

            _context.next = 3;
            return fetch(url, {
              credentials: 'same-origin'
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 13;
              break;
            }

            if (!(type === 'json')) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            txt = _context.sent;
            return _context.abrupt("return", JSON.parse(txt));

          case 10:
            if (!(type === 'binary')) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", response.arrayBuffer());

          case 12:
            return _context.abrupt("return", response.text());

          case 13:
            throw new Error("httpRequest error: " + url + " " + response.statusText);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function httpRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.httpRequest = httpRequest;

var getOrigin = function getOrigin(url) {
  if (url.indexOf('file://') === 0) return 'file://'; // eslint-disable-next-line no-useless-escape

  var parts = url.match(/^.+\:\/\/[^\/]+/);
  return Array.isArray(parts) && parts.length > 0 ? parts[0] : 'unknown';
};

exports.getOrigin = getOrigin;

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.create = create;
exports.createAsync = createAsync;
exports.resolveTimeoutPromise = resolveTimeoutPromise;
exports.rejectTimeoutPromise = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(571));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(572));

function create(arg, device) {
  var localResolve = function localResolve(_t) {};

  var localReject = function localReject(_e) {};

  var id; // eslint-disable-next-line no-async-promise-executor

  var promise = new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localResolve = resolve;
              localReject = reject;

              if (!(typeof arg === 'function')) {
                _context.next = 11;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return arg();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              reject(_context.t0);

            case 11:
              if (typeof arg === 'string') id = arg;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    id: id,
    device: device,
    resolve: localResolve,
    reject: localReject,
    promise: promise
  };
}

function createAsync(innerFn) {
  var localResolve = function localResolve(_t) {};

  var localReject = function localReject(_e) {};

  var promise = new Promise(function (resolve, reject) {
    localResolve = resolve;
    localReject = reject;
  });

  var inner = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return innerFn();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function inner() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    resolve: localResolve,
    reject: localReject,
    promise: promise,
    run: function run() {
      inner();
      return promise;
    }
  };
}

function resolveTimeoutPromise(delay, result) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(result);
    }, delay);
  });
}

var rejectTimeoutPromise = function rejectTimeoutPromise(delay, error) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(error);
    }, delay);
  });
};

exports.rejectTimeoutPromise = rejectTimeoutPromise;

/***/ }),

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _api = __webpack_require__(1675);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  exports[key] = _api[key];
});

var _events = __webpack_require__(1351);

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _events[key]) return;
  exports[key] = _events[key];
});

var _misc = __webpack_require__(1350);

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  exports[key] = _misc[key];
});

var _params = __webpack_require__(1335);

Object.keys(_params).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _params[key]) return;
  exports[key] = _params[key];
});

var _account = __webpack_require__(1339);

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _account[key]) return;
  exports[key] = _account[key];
});

var _device = __webpack_require__(1336);

Object.keys(_device).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _device[key]) return;
  exports[key] = _device[key];
});

var _management = __webpack_require__(1337);

Object.keys(_management).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _management[key]) return;
  exports[key] = _management[key];
});

var _bitcoin = __webpack_require__(1340);

Object.keys(_bitcoin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bitcoin[key]) return;
  exports[key] = _bitcoin[key];
});

var _binance = __webpack_require__(1341);

Object.keys(_binance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _binance[key]) return;
  exports[key] = _binance[key];
});

var _cardano = __webpack_require__(1342);

Object.keys(_cardano).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cardano[key]) return;
  exports[key] = _cardano[key];
});

var _coinInfo = __webpack_require__(1343);

Object.keys(_coinInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _coinInfo[key]) return;
  exports[key] = _coinInfo[key];
});

var _eos = __webpack_require__(1344);

Object.keys(_eos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eos[key]) return;
  exports[key] = _eos[key];
});

var _ethereum = __webpack_require__(1345);

Object.keys(_ethereum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ethereum[key]) return;
  exports[key] = _ethereum[key];
});

var _nem = __webpack_require__(1346);

Object.keys(_nem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nem[key]) return;
  exports[key] = _nem[key];
});

var _ripple = __webpack_require__(1347);

Object.keys(_ripple).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ripple[key]) return;
  exports[key] = _ripple[key];
});

var _stellar = __webpack_require__(1348);

Object.keys(_stellar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stellar[key]) return;
  exports[key] = _stellar[key];
});

var _tezos = __webpack_require__(1349);

Object.keys(_tezos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tezos[key]) return;
  exports[key] = _tezos[key];
});

var _blockchain = __webpack_require__(1352);

Object.keys(_blockchain).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _blockchain[key]) return;
  exports[key] = _blockchain[key];
});

var _transactions = __webpack_require__(1676);

Object.keys(_transactions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transactions[key]) return;
  exports[key] = _transactions[key];
});

/***/ }),

/***/ 1335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(717);

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Enum_TezosBallotType = exports.Enum_TezosContractType = exports.Enum_NEMImportanceTransferMode = exports.Enum_NEMModificationType = exports.Enum_NEMSupplyChangeType = exports.Enum_NEMMosaicLevy = exports.Enum_WordRequestType = exports.Enum_RecoveryDeviceType = exports.Enum_SdProtectOperationType = exports.Enum_Capability = exports.Enum_DebugSwipeDirection = exports.Enum_PinMatrixRequestType = exports.Enum_ButtonRequestType = exports.Enum_FailureType = exports.Enum_RequestType = exports.Enum_BinanceTimeInForce = exports.Enum_BinanceOrderSide = exports.Enum_BinanceOrderType = exports.Enum_SafetyCheckLevel = exports.Enum_BackupType = exports.Enum_CardanoTxWitnessType = exports.Enum_CardanoTxSigningMode = exports.Enum_CardanoTxAuxiliaryDataSupplementType = exports.Enum_CardanoPoolRelayType = exports.Enum_CardanoCertificateType = exports.Enum_CardanoAddressType = exports.Enum_AmountUnit = exports.Enum_DecredStakingSpendType = exports.Enum_OutputScriptType = exports.Enum_InputScriptType = void 0;
// This file is auto generated from data/messages/message.json
var Enum_InputScriptType = Object.freeze({
  SPENDADDRESS: 0,
  SPENDMULTISIG: 1,
  EXTERNAL: 2,
  SPENDWITNESS: 3,
  SPENDP2SHWITNESS: 4
});
exports.Enum_InputScriptType = Enum_InputScriptType;
var Enum_OutputScriptType = Object.freeze({
  PAYTOADDRESS: 0,
  PAYTOSCRIPTHASH: 1,
  PAYTOMULTISIG: 2,
  PAYTOOPRETURN: 3,
  PAYTOWITNESS: 4,
  PAYTOP2SHWITNESS: 5
});
exports.Enum_OutputScriptType = Enum_OutputScriptType;
var Enum_DecredStakingSpendType = Object.freeze({
  SSGen: 0,
  SSRTX: 1
});
exports.Enum_DecredStakingSpendType = Enum_DecredStakingSpendType;
var Enum_AmountUnit = Object.freeze({
  BITCOIN: 0,
  MILLIBITCOIN: 1,
  MICROBITCOIN: 2,
  SATOSHI: 3
});
exports.Enum_AmountUnit = Enum_AmountUnit;
var Enum_CardanoAddressType = Object.freeze({
  BASE: 0,
  BASE_SCRIPT_KEY: 1,
  BASE_KEY_SCRIPT: 2,
  BASE_SCRIPT_SCRIPT: 3,
  POINTER: 4,
  POINTER_SCRIPT: 5,
  ENTERPRISE: 6,
  ENTERPRISE_SCRIPT: 7,
  BYRON: 8,
  REWARD: 14,
  REWARD_SCRIPT: 15
});
exports.Enum_CardanoAddressType = Enum_CardanoAddressType;
var Enum_CardanoCertificateType = Object.freeze({
  STAKE_REGISTRATION: 0,
  STAKE_DEREGISTRATION: 1,
  STAKE_DELEGATION: 2,
  STAKE_POOL_REGISTRATION: 3
});
exports.Enum_CardanoCertificateType = Enum_CardanoCertificateType;
var Enum_CardanoPoolRelayType = Object.freeze({
  SINGLE_HOST_IP: 0,
  SINGLE_HOST_NAME: 1,
  MULTIPLE_HOST_NAME: 2
});
exports.Enum_CardanoPoolRelayType = Enum_CardanoPoolRelayType;
var Enum_CardanoTxAuxiliaryDataSupplementType = Object.freeze({
  NONE: 0,
  CATALYST_REGISTRATION_SIGNATURE: 1
});
exports.Enum_CardanoTxAuxiliaryDataSupplementType = Enum_CardanoTxAuxiliaryDataSupplementType;
var Enum_CardanoTxSigningMode = Object.freeze({
  ORDINARY_TRANSACTION: 0,
  POOL_REGISTRATION_AS_OWNER: 1
});
exports.Enum_CardanoTxSigningMode = Enum_CardanoTxSigningMode;
var Enum_CardanoTxWitnessType = Object.freeze({
  BYRON_WITNESS: 0,
  SHELLEY_WITNESS: 1
});
exports.Enum_CardanoTxWitnessType = Enum_CardanoTxWitnessType;
var Enum_BackupType = Object.freeze({
  Bip39: 0,
  Slip39_Basic: 1,
  Slip39_Advanced: 2
});
exports.Enum_BackupType = Enum_BackupType;
var Enum_SafetyCheckLevel = Object.freeze({
  Strict: 0,
  PromptAlways: 1,
  PromptTemporarily: 2
});
exports.Enum_SafetyCheckLevel = Enum_SafetyCheckLevel;
var Enum_BinanceOrderType = Object.freeze({
  OT_UNKNOWN: 0,
  MARKET: 1,
  LIMIT: 2,
  OT_RESERVED: 3
});
exports.Enum_BinanceOrderType = Enum_BinanceOrderType;
var Enum_BinanceOrderSide = Object.freeze({
  SIDE_UNKNOWN: 0,
  BUY: 1,
  SELL: 2
});
exports.Enum_BinanceOrderSide = Enum_BinanceOrderSide;
var Enum_BinanceTimeInForce = Object.freeze({
  TIF_UNKNOWN: 0,
  GTE: 1,
  TIF_RESERVED: 2,
  IOC: 3
});
exports.Enum_BinanceTimeInForce = Enum_BinanceTimeInForce;
var Enum_RequestType = Object.freeze({
  TXINPUT: 0,
  TXOUTPUT: 1,
  TXMETA: 2,
  TXFINISHED: 3,
  TXEXTRADATA: 4,
  TXORIGINPUT: 5,
  TXORIGOUTPUT: 6
});
exports.Enum_RequestType = Enum_RequestType;
var Enum_FailureType = Object.freeze({
  Failure_UnexpectedMessage: 1,
  Failure_ButtonExpected: 2,
  Failure_DataError: 3,
  Failure_ActionCancelled: 4,
  Failure_PinExpected: 5,
  Failure_PinCancelled: 6,
  Failure_PinInvalid: 7,
  Failure_InvalidSignature: 8,
  Failure_ProcessError: 9,
  Failure_NotEnoughFunds: 10,
  Failure_NotInitialized: 11,
  Failure_PinMismatch: 12,
  Failure_WipeCodeMismatch: 13,
  Failure_InvalidSession: 14,
  Failure_FirmwareError: 99
});
exports.Enum_FailureType = Enum_FailureType;
var Enum_ButtonRequestType = Object.freeze({
  ButtonRequest_Other: 1,
  ButtonRequest_FeeOverThreshold: 2,
  ButtonRequest_ConfirmOutput: 3,
  ButtonRequest_ResetDevice: 4,
  ButtonRequest_ConfirmWord: 5,
  ButtonRequest_WipeDevice: 6,
  ButtonRequest_ProtectCall: 7,
  ButtonRequest_SignTx: 8,
  ButtonRequest_FirmwareCheck: 9,
  ButtonRequest_Address: 10,
  ButtonRequest_PublicKey: 11,
  ButtonRequest_MnemonicWordCount: 12,
  ButtonRequest_MnemonicInput: 13,
  _Deprecated_ButtonRequest_PassphraseType: 14,
  ButtonRequest_UnknownDerivationPath: 15,
  ButtonRequest_RecoveryHomepage: 16,
  ButtonRequest_Success: 17,
  ButtonRequest_Warning: 18,
  ButtonRequest_PassphraseEntry: 19,
  ButtonRequest_PinEntry: 20
});
exports.Enum_ButtonRequestType = Enum_ButtonRequestType;
var Enum_PinMatrixRequestType = Object.freeze({
  PinMatrixRequestType_Current: 1,
  PinMatrixRequestType_NewFirst: 2,
  PinMatrixRequestType_NewSecond: 3,
  PinMatrixRequestType_WipeCodeFirst: 4,
  PinMatrixRequestType_WipeCodeSecond: 5
});
exports.Enum_PinMatrixRequestType = Enum_PinMatrixRequestType;
var Enum_DebugSwipeDirection = Object.freeze({
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
});
exports.Enum_DebugSwipeDirection = Enum_DebugSwipeDirection;
var Enum_Capability = Object.freeze({
  Capability_Bitcoin: 1,
  Capability_Bitcoin_like: 2,
  Capability_Binance: 3,
  Capability_Cardano: 4,
  Capability_Crypto: 5,
  Capability_EOS: 6,
  Capability_Ethereum: 7,
  Capability_Lisk: 8,
  Capability_Monero: 9,
  Capability_NEM: 10,
  Capability_Ripple: 11,
  Capability_Stellar: 12,
  Capability_Tezos: 13,
  Capability_U2F: 14,
  Capability_Shamir: 15,
  Capability_ShamirGroups: 16,
  Capability_PassphraseEntry: 17
});
exports.Enum_Capability = Enum_Capability;
var Enum_SdProtectOperationType = Object.freeze({
  DISABLE: 0,
  ENABLE: 1,
  REFRESH: 2
});
exports.Enum_SdProtectOperationType = Enum_SdProtectOperationType;
var Enum_RecoveryDeviceType = Object.freeze({
  RecoveryDeviceType_ScrambledWords: 0,
  RecoveryDeviceType_Matrix: 1
});
exports.Enum_RecoveryDeviceType = Enum_RecoveryDeviceType;
var Enum_WordRequestType = Object.freeze({
  WordRequestType_Plain: 0,
  WordRequestType_Matrix9: 1,
  WordRequestType_Matrix6: 2
});
exports.Enum_WordRequestType = Enum_WordRequestType;
var Enum_NEMMosaicLevy = Object.freeze({
  MosaicLevy_Absolute: 1,
  MosaicLevy_Percentile: 2
});
exports.Enum_NEMMosaicLevy = Enum_NEMMosaicLevy;
var Enum_NEMSupplyChangeType = Object.freeze({
  SupplyChange_Increase: 1,
  SupplyChange_Decrease: 2
});
exports.Enum_NEMSupplyChangeType = Enum_NEMSupplyChangeType;
var Enum_NEMModificationType = Object.freeze({
  CosignatoryModification_Add: 1,
  CosignatoryModification_Delete: 2
});
exports.Enum_NEMModificationType = Enum_NEMModificationType;
var Enum_NEMImportanceTransferMode = Object.freeze({
  ImportanceTransfer_Activate: 1,
  ImportanceTransfer_Deactivate: 2
});
exports.Enum_NEMImportanceTransferMode = Enum_NEMImportanceTransferMode;
var Enum_TezosContractType = Object.freeze({
  Implicit: 0,
  Originated: 1
});
exports.Enum_TezosContractType = Enum_TezosContractType;
var Enum_TezosBallotType = Object.freeze({
  Yay: 0,
  Nay: 1,
  Pass: 2
});
exports.Enum_TezosBallotType = Enum_TezosBallotType;

/***/ }),

/***/ 1339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CardanoTxWitnessType = exports.CardanoTxSigningMode = exports.CardanoPoolRelayType = exports.CardanoCertificateType = exports.CardanoAddressType = void 0;

var _protobuf = __webpack_require__(1338);

exports.CardanoAddressType = _protobuf.Enum_CardanoAddressType;
exports.CardanoCertificateType = _protobuf.Enum_CardanoCertificateType;
exports.CardanoPoolRelayType = _protobuf.Enum_CardanoPoolRelayType;
exports.CardanoTxSigningMode = _protobuf.Enum_CardanoTxSigningMode;
exports.CardanoTxWitnessType = _protobuf.Enum_CardanoTxWitnessType;

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(717);

/***/ }),

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(717);

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
var _exportNames = {};
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(503));

var _constants = __webpack_require__(717);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  exports[key] = _constants[key];
});

var _node = __webpack_require__(1664);

var _types = __webpack_require__(1334);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  exports[key] = _types[key];
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TrezorConnect = {
  manifest: _node.manifest,
  init: _node.init,
  getSettings: _node.getSettings,
  on: function on(type, fn) {
    _node.eventEmitter.on(type, fn);
  },
  off: function off(type, fn) {
    _node.eventEmitter.removeListener(type, fn);
  },
  removeAllListeners: function removeAllListeners() {
    _node.eventEmitter.removeAllListeners();
  },
  uiResponse: _node.uiResponse,
  // methods
  blockchainGetAccountBalanceHistory: function blockchainGetAccountBalanceHistory(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainGetAccountBalanceHistory'
    }, params));
  },
  blockchainGetCurrentFiatRates: function blockchainGetCurrentFiatRates(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainGetCurrentFiatRates'
    }, params));
  },
  blockchainGetFiatRatesForTimestamps: function blockchainGetFiatRatesForTimestamps(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainGetFiatRatesForTimestamps'
    }, params));
  },
  blockchainDisconnect: function blockchainDisconnect(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainDisconnect'
    }, params));
  },
  blockchainEstimateFee: function blockchainEstimateFee(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainEstimateFee'
    }, params));
  },
  blockchainGetTransactions: function blockchainGetTransactions(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainGetTransactions'
    }, params));
  },
  blockchainSetCustomBackend: function blockchainSetCustomBackend(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainSetCustomBackend'
    }, params));
  },
  blockchainSubscribe: function blockchainSubscribe(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainSubscribe'
    }, params));
  },
  blockchainSubscribeFiatRates: function blockchainSubscribeFiatRates(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainSubscribeFiatRates'
    }, params));
  },
  blockchainUnsubscribe: function blockchainUnsubscribe(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainUnsubscribe'
    }, params));
  },
  blockchainUnsubscribeFiatRates: function blockchainUnsubscribeFiatRates(params) {
    return (0, _node.call)(_objectSpread({
      method: 'blockchainUnsubscribeFiatRates'
    }, params));
  },
  customMessage: function customMessage(params) {
    return (0, _node.customMessage)(params);
  },
  requestLogin: function requestLogin(params) {
    return (0, _node.requestLogin)(params);
  },
  cardanoGetAddress: function cardanoGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'cardanoGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  cardanoGetPublicKey: function cardanoGetPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'cardanoGetPublicKey'
    }, params));
  },
  cardanoSignTransaction: function cardanoSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'cardanoSignTransaction'
    }, params));
  },
  cipherKeyValue: function cipherKeyValue(params) {
    return (0, _node.call)(_objectSpread({
      method: 'cipherKeyValue'
    }, params));
  },
  composeTransaction: function composeTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'composeTransaction'
    }, params));
  },
  debugLinkDecision: function debugLinkDecision(params) {
    return (0, _node.call)(_objectSpread({
      method: 'debugLinkDecision'
    }, params));
  },
  debugLinkGetState: function debugLinkGetState(params) {
    return (0, _node.call)(_objectSpread({
      method: 'debugLinkGetState'
    }, params));
  },
  ethereumGetAddress: function ethereumGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'ethereumGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  ethereumGetPublicKey: function ethereumGetPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'ethereumGetPublicKey'
    }, params));
  },
  ethereumSignMessage: function ethereumSignMessage(params) {
    return (0, _node.call)(_objectSpread({
      method: 'ethereumSignMessage'
    }, params));
  },
  ethereumSignTransaction: function ethereumSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'ethereumSignTransaction'
    }, params));
  },
  ethereumVerifyMessage: function ethereumVerifyMessage(params) {
    return (0, _node.call)(_objectSpread({
      method: 'ethereumVerifyMessage'
    }, params));
  },
  getAccountInfo: function getAccountInfo(params) {
    return (0, _node.call)(_objectSpread({
      method: 'getAccountInfo'
    }, params));
  },
  getAddress: function getAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'getAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  getDeviceState: function getDeviceState(params) {
    return (0, _node.call)(_objectSpread({
      method: 'getDeviceState'
    }, params));
  },
  getFeatures: function getFeatures(params) {
    return (0, _node.call)(_objectSpread({
      method: 'getFeatures'
    }, params));
  },
  getPublicKey: function getPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'getPublicKey'
    }, params));
  },
  liskGetAddress: function liskGetAddress() {
    return (0, _node.call)({
      method: 'liskDeprecated'
    });
  },
  liskGetPublicKey: function liskGetPublicKey() {
    return (0, _node.call)({
      method: 'liskDeprecated'
    });
  },
  liskSignMessage: function liskSignMessage() {
    return (0, _node.call)({
      method: 'liskDeprecated'
    });
  },
  liskSignTransaction: function liskSignTransaction() {
    return (0, _node.call)({
      method: 'liskDeprecated'
    });
  },
  liskVerifyMessage: function liskVerifyMessage() {
    return (0, _node.call)({
      method: 'liskDeprecated'
    });
  },
  nemGetAddress: function nemGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'nemGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  nemSignTransaction: function nemSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'nemSignTransaction'
    }, params));
  },
  pushTransaction: function pushTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'pushTransaction'
    }, params));
  },
  rippleGetAddress: function rippleGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'rippleGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  rippleSignTransaction: function rippleSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'rippleSignTransaction'
    }, params));
  },
  signMessage: function signMessage(params) {
    return (0, _node.call)(_objectSpread({
      method: 'signMessage'
    }, params));
  },
  signTransaction: function signTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'signTransaction'
    }, params));
  },
  stellarGetAddress: function stellarGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'stellarGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  stellarSignTransaction: function stellarSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'stellarSignTransaction'
    }, params));
  },
  tezosGetAddress: function tezosGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'tezosGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  tezosGetPublicKey: function tezosGetPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'tezosGetPublicKey'
    }, params));
  },
  tezosSignTransaction: function tezosSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'tezosSignTransaction'
    }, params));
  },
  eosGetPublicKey: function eosGetPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'eosGetPublicKey'
    }, params));
  },
  eosSignTransaction: function eosSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'eosSignTransaction'
    }, params));
  },
  binanceGetAddress: function binanceGetAddress(params) {
    var useEventListener = _node.eventEmitter.listenerCount(_constants.UI.ADDRESS_VALIDATION) > 0;
    return (0, _node.call)(_objectSpread(_objectSpread({
      method: 'binanceGetAddress'
    }, params), {}, {
      useEventListener: useEventListener
    }));
  },
  binanceGetPublicKey: function binanceGetPublicKey(params) {
    return (0, _node.call)(_objectSpread({
      method: 'binanceGetPublicKey'
    }, params));
  },
  binanceSignTransaction: function binanceSignTransaction(params) {
    return (0, _node.call)(_objectSpread({
      method: 'binanceSignTransaction'
    }, params));
  },
  verifyMessage: function verifyMessage(params) {
    return (0, _node.call)(_objectSpread({
      method: 'verifyMessage'
    }, params));
  },
  resetDevice: function resetDevice(params) {
    return (0, _node.call)(_objectSpread({
      method: 'resetDevice'
    }, params));
  },
  wipeDevice: function wipeDevice(params) {
    return (0, _node.call)(_objectSpread({
      method: 'wipeDevice'
    }, params));
  },
  applyFlags: function applyFlags(params) {
    return (0, _node.call)(_objectSpread({
      method: 'applyFlags'
    }, params));
  },
  applySettings: function applySettings(params) {
    return (0, _node.call)(_objectSpread({
      method: 'applySettings'
    }, params));
  },
  backupDevice: function backupDevice(params) {
    return (0, _node.call)(_objectSpread({
      method: 'backupDevice'
    }, params));
  },
  changePin: function changePin(params) {
    return (0, _node.call)(_objectSpread({
      method: 'changePin'
    }, params));
  },
  firmwareUpdate: function firmwareUpdate(params) {
    return (0, _node.call)(_objectSpread({
      method: 'firmwareUpdate'
    }, params));
  },
  recoveryDevice: function recoveryDevice(params) {
    return (0, _node.call)(_objectSpread({
      method: 'recoveryDevice'
    }, params));
  },
  getCoinInfo: function getCoinInfo(params) {
    return (0, _node.call)(_objectSpread({
      method: 'getCoinInfo'
    }, params));
  },
  rebootToBootloader: function rebootToBootloader(params) {
    return (0, _node.call)(_objectSpread({
      method: 'rebootToBootloader'
    }, params));
  },
  dispose: _node.dispose,
  cancel: _node.cancel,
  renderWebUSBButton: _node.renderWebUSBButton,
  disableWebUSB: _node.disableWebUSB
};
var _default = TrezorConnect;
exports["default"] = _default;

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FIAT_RATES_UPDATE = exports.NOTIFICATION = exports.BLOCK = exports.CONNECT = exports.ERROR = void 0;
// blockchain events
var ERROR = 'blockchain-error';
exports.ERROR = ERROR;
var CONNECT = 'blockchain-connect';
exports.CONNECT = CONNECT;
var BLOCK = 'blockchain-block';
exports.BLOCK = BLOCK;
var NOTIFICATION = 'blockchain-notification';
exports.NOTIFICATION = NOTIFICATION;
var FIAT_RATES_UPDATE = 'fiat-rates-update';
exports.FIAT_RATES_UPDATE = FIAT_RATES_UPDATE;

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.WAIT_FOR_SELECTION = exports.WORD = exports.PASSPHRASE_ON_DEVICE = exports.PASSPHRASE = exports.PIN = exports.BUTTON = exports.LOADING = exports.USED_ELSEWHERE = exports.RELEASED = exports.ACQUIRED = exports.RELEASE = exports.ACQUIRE = exports.CHANGED = exports.DISCONNECT = exports.CONNECT_UNACQUIRED = exports.CONNECT = void 0;
// device list events
var CONNECT = 'device-connect';
exports.CONNECT = CONNECT;
var CONNECT_UNACQUIRED = 'device-connect_unacquired';
exports.CONNECT_UNACQUIRED = CONNECT_UNACQUIRED;
var DISCONNECT = 'device-disconnect';
exports.DISCONNECT = DISCONNECT;
var CHANGED = 'device-changed';
exports.CHANGED = CHANGED;
var ACQUIRE = 'device-acquire';
exports.ACQUIRE = ACQUIRE;
var RELEASE = 'device-release';
exports.RELEASE = RELEASE;
var ACQUIRED = 'device-acquired';
exports.ACQUIRED = ACQUIRED;
var RELEASED = 'device-released';
exports.RELEASED = RELEASED;
var USED_ELSEWHERE = 'device-used_elsewhere';
exports.USED_ELSEWHERE = USED_ELSEWHERE;
var LOADING = 'device-loading'; // trezor-link events in protobuf format

exports.LOADING = LOADING;
var BUTTON = 'button';
exports.BUTTON = BUTTON;
var PIN = 'pin';
exports.PIN = PIN;
var PASSPHRASE = 'passphrase';
exports.PASSPHRASE = PASSPHRASE;
var PASSPHRASE_ON_DEVICE = 'passphrase_on_device';
exports.PASSPHRASE_ON_DEVICE = PASSPHRASE_ON_DEVICE;
var WORD = 'word'; // custom

exports.WORD = WORD;
var WAIT_FOR_SELECTION = 'device-wait_for_selection';
exports.WAIT_FOR_SELECTION = WAIT_FOR_SELECTION;

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.LIBUSB_ERROR_MESSAGE = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.TypedError = exports.TrezorError = exports.ERROR_CODES = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(1328));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(1657));

var ERROR_CODES = {
  Init_NotInitialized: 'TrezorConnect not yet initialized',
  // race condition: call on not initialized Core (usually hot-reloading)
  Init_AlreadyInitialized: 'TrezorConnect has been already initialized',
  // thrown by .init called multiple times
  Init_IframeBlocked: 'Iframe blocked',
  // iframe injection blocked (ad-blocker)
  Init_IframeTimeout: 'Iframe timeout',
  // iframe didn't load in specified time
  Init_ManifestMissing: 'Manifest not set. Read more at https://github.com/trezor/connect/blob/develop/docs/index.md',
  // manifest is not set
  Popup_ConnectionMissing: 'Unable to establish connection with iframe',
  // thrown by popup
  Transport_Missing: 'Transport is missing',
  // no transport available
  Transport_InvalidProtobuf: '',
  // generic error from transport layer (trezor-link)
  Method_InvalidPackage: 'This version of trezor-connect is not suitable to work without browser. Use trezor-connect@extended package instead',
  // thrown by node and react-native env while using regular 'web' package
  Method_InvalidParameter: '',
  // replaced by generic text
  Method_NotAllowed: 'Method not allowed for this configuration',
  // example: device management in popup mode
  Method_PermissionsNotGranted: 'Permissions not granted',
  // permission/confirmation not granted in popup
  Method_Cancel: 'Cancelled',
  // permission/confirmation not granted in popup OR .cancel() custom error
  Method_Interrupted: 'Popup closed',
  // interruption: popup closed
  Method_UnknownCoin: 'Coin not found',
  // coin definition not found
  Method_AddressNotMatch: 'Addresses do not match',
  // thrown by all getAddress methods with custom UI validation
  Method_FirmwareUpdate_DownloadFailed: 'Failed to download firmware binary',
  // thrown by FirmwareUpdate method
  Method_CustomMessage_Callback: 'Parameter "callback" is not a function',
  // thrown by CustomMessage method
  Method_Discovery_BundleException: '',
  // thrown by getAccountInfo method
  Method_Override: 'override',
  // inner "error", it's more like a interruption
  Method_NoResponse: 'Call resolved without response',
  // thrown by npm index(es), call to Core resolved without response, should not happen
  Backend_NotSupported: 'BlockchainLink settings not found in coins.json',
  // thrown by methods which using backends, blockchainLink not defined for this coin
  Backend_WorkerMissing: '',
  // thrown by BlockchainLink class, worker not specified
  Backend_Disconnected: 'Backend disconnected',
  // thrown by BlockchainLink class
  Backend_Invalid: 'Invalid backend',
  // thrown by BlockchainLink class, invalid backend (ie: backend for wrong coin set)
  Backend_Error: '',
  // thrown by BlockchainLink class, generic message from 'blockchain-link'
  Runtime: '',
  // thrown from several places, this shouldn't ever happen tho
  Device_NotFound: 'Device not found',
  Device_InitializeFailed: '',
  // generic error from firmware while calling "Initialize" message
  Device_FwException: '',
  // generic FirmwareException type
  Device_ModeException: '',
  // generic Device.UnexpectedMode type
  Device_Disconnected: 'Device disconnected',
  // device disconnected during call
  Device_UsedElsewhere: 'Device is used in another window',
  // interruption: current session toked by other application
  Device_InvalidState: 'Passphrase is incorrect',
  // authorization error (device state comparison)
  Device_CallInProgress: 'Device call in progress' // thrown when trying to make another call while current is still running

};
exports.ERROR_CODES = ERROR_CODES;

var TrezorError = /*#__PURE__*/function (_Error) {
  (0, _inheritsLoose2["default"])(TrezorError, _Error);

  function TrezorError(code, message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.code = code;
    _this.message = message;
    return _this;
  }

  return TrezorError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.TrezorError = TrezorError;

var TypedError = function TypedError(id, message) {
  return new TrezorError(id, message || ERROR_CODES[id]);
}; // a slight hack
// this error string is hard-coded
// in both bridge and extension


exports.TypedError = TypedError;
var WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = 'wrong previous session';
exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = WRONG_PREVIOUS_SESSION_ERROR_MESSAGE;
var INVALID_PIN_ERROR_MESSAGE = 'PIN invalid';
exports.INVALID_PIN_ERROR_MESSAGE = INVALID_PIN_ERROR_MESSAGE;
var WEBUSB_ERROR_MESSAGE = 'NetworkError: Unable to claim interface.'; // trezord error prefix.
// user has insufficient permissions. may occur in Linux (missing udev rules), Windows and MacOS.

exports.WEBUSB_ERROR_MESSAGE = WEBUSB_ERROR_MESSAGE;
var LIBUSB_ERROR_MESSAGE = 'LIBUSB_ERROR';
exports.LIBUSB_ERROR_MESSAGE = LIBUSB_ERROR_MESSAGE;

/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(523);

var setPrototypeOf = __webpack_require__(898);

var isNativeFunction = __webpack_require__(1658);

var construct = __webpack_require__(1659);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1658:
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(898);

var isNativeReflectConstruct = __webpack_require__(1660);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1660:
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TYPES = void 0;
var TYPES = Object.freeze({
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  eos: 'Eos',
  nem: 'NEM',
  stellar: 'Stellar',
  cardano: 'Cardano',
  ripple: 'Ripple',
  tezos: 'Tezors',
  binance: 'Binance'
});
exports.TYPES = TYPES;

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.START_PENDING = exports.DISABLE_WEBUSB = exports.REQUEST = exports.STREAM = exports.UPDATE = exports.ERROR = exports.START = void 0;
var START = 'transport-start';
exports.START = START;
var ERROR = 'transport-error';
exports.ERROR = ERROR;
var UPDATE = 'transport-update';
exports.UPDATE = UPDATE;
var STREAM = 'transport-stream';
exports.STREAM = STREAM;
var REQUEST = 'transport-request_device';
exports.REQUEST = REQUEST;
var DISABLE_WEBUSB = 'transport-disable_webusb';
exports.DISABLE_WEBUSB = DISABLE_WEBUSB;
var START_PENDING = 'transport-start_pending';
exports.START_PENDING = START_PENDING;

/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.POOL_RELAY_TYPE = exports.CERTIFICATE_TYPE = exports.ADDRESS_TYPE = exports.NETWORK_IDS = exports.PROTOCOL_MAGICS = void 0;
var PROTOCOL_MAGICS = Object.freeze({
  mainnet: 764824073,
  testnet: 42
});
exports.PROTOCOL_MAGICS = PROTOCOL_MAGICS;
var NETWORK_IDS = Object.freeze({
  mainnet: 1,
  testnet: 0
}); // constants below are deprecated
// use `CardanoAddressType`, `CardanoCertificateType` and `CardanoPoolRelayType` from protobuf instead

exports.NETWORK_IDS = NETWORK_IDS;
var ADDRESS_TYPE = Object.freeze({
  Base: 0,
  Pointer: 4,
  Enterprise: 6,
  Byron: 8,
  Reward: 14
});
exports.ADDRESS_TYPE = ADDRESS_TYPE;
var CERTIFICATE_TYPE = Object.freeze({
  StakeRegistration: 0,
  StakeDeregistration: 1,
  StakeDelegation: 2,
  StakePoolRegistration: 3
});
exports.CERTIFICATE_TYPE = CERTIFICATE_TYPE;
var POOL_RELAY_TYPE = Object.freeze({
  SingleHostIp: 0,
  SingleHostName: 1,
  MultipleHostName: 2
});
exports.POOL_RELAY_TYPE = POOL_RELAY_TYPE;

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(504);

var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.disableWebUSB = exports.requestLogin = exports.customMessage = exports.getSettings = exports.renderWebUSBButton = exports.uiResponse = exports.call = exports.init = exports.cancel = exports.dispose = exports.manifest = exports.eventEmitter = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(503));

var _regenerator = _interopRequireDefault(__webpack_require__(571));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(572));

var _events = _interopRequireDefault(__webpack_require__(13));

var _PopupManager = _interopRequireDefault(__webpack_require__(1665));

var iframe = _interopRequireWildcard(__webpack_require__(1668));

var _button = _interopRequireDefault(__webpack_require__(1670));

var _message = __webpack_require__(1671);

var _builder2 = __webpack_require__(1672);

var _ConnectSettings = __webpack_require__(1673);

var _debug = __webpack_require__(1674);

var _constants = __webpack_require__(717);

var $T = _interopRequireWildcard(__webpack_require__(1334));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var eventEmitter = new _events["default"]();
exports.eventEmitter = eventEmitter;

var _log = (0, _debug.initLog)('[trezor-connect.js]');

var _settings;

var _popupManager;

var initPopupManager = function initPopupManager() {
  var pm = new _PopupManager["default"](_settings);
  pm.on(_constants.POPUP.CLOSED, function (error) {
    iframe.postMessage({
      type: _constants.POPUP.CLOSED,
      payload: error ? {
        error: error
      } : null
    }, false);
  });
  return pm;
};

var manifest = function manifest(data) {
  _settings = (0, _ConnectSettings.parse)({
    manifest: data
  });
};

exports.manifest = manifest;

var dispose = function dispose() {
  eventEmitter.removeAllListeners();
  iframe.dispose();

  if (_popupManager) {
    _popupManager.close();
  }
};

exports.dispose = dispose;

var cancel = function cancel(error) {
  if (_popupManager) {
    _popupManager.emit(_constants.POPUP.CLOSED, error);
  }
}; // handle message received from iframe


exports.cancel = cancel;

var handleMessage = function handleMessage(messageEvent) {
  // ignore messages from domain other then iframe origin
  if (messageEvent.origin !== iframe.origin) return;
  var message = (0, _message.parseMessage)(messageEvent.data);
  var event = message.event,
      type = message.type,
      payload = message.payload;
  var id = message.id || 0;

  _log.log('handleMessage', message);

  switch (event) {
    case _constants.RESPONSE_EVENT:
      if (iframe.messagePromises[id]) {
        // resolve message promise (send result of call method)
        iframe.messagePromises[id].resolve({
          id: id,
          success: message.success,
          payload: payload
        });
        delete iframe.messagePromises[id];
      } else {
        _log.warn("Unknown message id " + id);
      }

      break;

    case _constants.DEVICE_EVENT:
      // pass DEVICE event up to html
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload); // DEVICE_EVENT also emit single events (connect/disconnect...)

      break;

    case _constants.TRANSPORT_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.BLOCKCHAIN_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.UI_EVENT:
      if (type === _constants.IFRAME.BOOTSTRAP) {
        iframe.clearTimeout();
        break;
      }

      if (type === _constants.IFRAME.LOADED) {
        iframe.initPromise.resolve();
      }

      if (type === _constants.IFRAME.ERROR) {
        iframe.initPromise.reject(payload.error);
      } // pass UI event up


      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    default:
      _log.log('Undefined message', event, messageEvent);

  }
};

var init = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(settings) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings === void 0) {
              settings = {};
            }

            if (!iframe.instance) {
              _context.next = 3;
              break;
            }

            throw _constants.ERRORS.TypedError('Init_AlreadyInitialized');

          case 3:
            if (!_settings) {
              _settings = (0, _ConnectSettings.parse)(settings);
            }

            if (_settings.manifest) {
              _context.next = 6;
              break;
            }

            throw _constants.ERRORS.TypedError('Init_ManifestMissing');

          case 6:
            if (!_settings.lazyLoad) {
              _context.next = 9;
              break;
            }

            // reset "lazyLoad" after first use
            _settings.lazyLoad = false;
            return _context.abrupt("return");

          case 9:
            if (!_popupManager) {
              _popupManager = initPopupManager();
            }

            _log.enabled = !!_settings.debug;
            window.addEventListener('message', handleMessage);
            window.addEventListener('unload', dispose);
            _context.next = 15;
            return iframe.init(_settings);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.init = init;

var call = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!iframe.instance && !iframe.timeout)) {
              _context2.next = 15;
              break;
            }

            // init popup with lazy loading before iframe initialization
            _settings = (0, _ConnectSettings.parse)(_settings);

            if (_settings.manifest) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(_constants.ERRORS.TypedError('Init_ManifestMissing')));

          case 4:
            if (!_popupManager) {
              _popupManager = initPopupManager();
            }

            _popupManager.request(true); // auto init with default settings


            _context2.prev = 6;
            _context2.next = 9;
            return init(_settings);

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](6);

            if (_popupManager) {
              // Catch fatal iframe errors (not loading)
              if (['Init_IframeBlocked', 'Init_IframeTimeout'].includes(_context2.t0.code)) {
                _popupManager.postMessage((0, _builder2.UiMessage)(_constants.UI.IFRAME_FAILURE));
              } else {
                _popupManager.close();
              }
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(_context2.t0));

          case 15:
            if (!iframe.timeout) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(_constants.ERRORS.TypedError('Init_ManifestMissing')));

          case 17:
            if (!iframe.error) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(iframe.error));

          case 19:
            // request popup window it might be used in the future
            if (_settings.popup && _popupManager) {
              _popupManager.request();
            } // post message to iframe


            _context2.prev = 20;
            _context2.next = 23;
            return iframe.postMessage({
              type: _constants.IFRAME.CALL,
              payload: params
            });

          case 23:
            response = _context2.sent;

            if (!response) {
              _context2.next = 27;
              break;
            }

            if (!response.success && response.payload.code !== 'Device_CallInProgress' && _popupManager) {
              _popupManager.unlock();
            }

            return _context2.abrupt("return", response);

          case 27:
            if (_popupManager) {
              _popupManager.unlock();
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(_constants.ERRORS.TypedError('Method_NoResponse')));

          case 31:
            _context2.prev = 31;
            _context2.t1 = _context2["catch"](20);

            _log.error('__call error', _context2.t1);

            if (_popupManager) {
              _popupManager.close();
            }

            return _context2.abrupt("return", (0, _message.errorMessage)(_context2.t1));

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 11], [20, 31]]);
  }));

  return function call(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.call = call;

var customMessageResponse = function customMessageResponse(payload) {
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: _constants.UI.CUSTOM_MESSAGE_RESPONSE,
    payload: payload
  });
};

var uiResponse = function uiResponse(response) {
  var type = response.type,
      payload = response.payload;
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: type,
    payload: payload
  });
};

exports.uiResponse = uiResponse;

var renderWebUSBButton = function renderWebUSBButton(className) {
  (0, _button["default"])(className, _settings.webusbSrc, iframe.origin);
};

exports.renderWebUSBButton = renderWebUSBButton;

var getSettings = function getSettings() {
  if (!iframe.instance) {
    return Promise.resolve((0, _message.errorMessage)(_constants.ERRORS.TypedError('Init_NotInitialized')));
  }

  return call({
    method: 'getSettings'
  });
};

exports.getSettings = getSettings;

var customMessage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
    var callback, customMessageListener, response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(typeof params.callback !== 'function')) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", (0, _message.errorMessage)(_constants.ERRORS.TypedError('Method_CustomMessage_Callback')));

          case 2:
            // TODO: set message listener only if iframe is loaded correctly
            callback = params.callback;

            customMessageListener = /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === _constants.UI.CUSTOM_MESSAGE_REQUEST)) {
                          _context3.next = 6;
                          break;
                        }

                        _context3.next = 4;
                        return callback(data.payload);

                      case 4:
                        payload = _context3.sent;

                        if (payload) {
                          customMessageResponse(payload);
                        } else {
                          customMessageResponse({
                            message: 'release'
                          });
                        }

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function customMessageListener(_x4) {
                return _ref4.apply(this, arguments);
              };
            }();

            window.addEventListener('message', customMessageListener, false);
            _context4.next = 7;
            return call(_objectSpread(_objectSpread({
              method: 'customMessage'
            }, params), {}, {
              callback: null
            }));

          case 7:
            response = _context4.sent;
            window.removeEventListener('message', customMessageListener);
            return _context4.abrupt("return", response);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function customMessage(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.customMessage = customMessage;

var requestLogin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
    var callback, loginChallengeListener, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(typeof params.callback === 'function')) {
              _context6.next = 9;
              break;
            }

            callback = params.callback; // TODO: set message listener only if iframe is loaded correctly

            loginChallengeListener = /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(event) {
                var data, payload;
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === _constants.UI.LOGIN_CHALLENGE_REQUEST)) {
                          _context5.next = 12;
                          break;
                        }

                        _context5.prev = 2;
                        _context5.next = 5;
                        return callback();

                      case 5:
                        payload = _context5.sent;
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: _constants.UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: payload
                        });
                        _context5.next = 12;
                        break;

                      case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5["catch"](2);
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: _constants.UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: _context5.t0.message
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[2, 9]]);
              }));

              return function loginChallengeListener(_x6) {
                return _ref6.apply(this, arguments);
              };
            }();

            window.addEventListener('message', loginChallengeListener, false);
            _context6.next = 6;
            return call(_objectSpread(_objectSpread({
              method: 'requestLogin'
            }, params), {}, {
              asyncChallenge: true,
              callback: null
            }));

          case 6:
            response = _context6.sent;
            window.removeEventListener('message', loginChallengeListener);
            return _context6.abrupt("return", response);

          case 9:
            return _context6.abrupt("return", call(_objectSpread({
              method: 'requestLogin'
            }, params)));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function requestLogin(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.requestLogin = requestLogin;

var disableWebUSB = function disableWebUSB() {
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: _constants.TRANSPORT.DISABLE_WEBUSB
  });
};

exports.disableWebUSB = disableWebUSB;

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(504);

var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(571));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(572));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(522));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(1328));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(503));

var _events = _interopRequireDefault(__webpack_require__(13));

var POPUP = _interopRequireWildcard(__webpack_require__(1330));

var IFRAME = _interopRequireWildcard(__webpack_require__(1329));

var UI = _interopRequireWildcard(__webpack_require__(1331));

var _showPopupRequest = __webpack_require__(1666);

var _networkUtils = __webpack_require__(1332);

var _deferred = __webpack_require__(1333);

// const POPUP_REQUEST_TIMEOUT = 602;
var POPUP_REQUEST_TIMEOUT = 850;
var POPUP_CLOSE_INTERVAL = 500;
var POPUP_OPEN_TIMEOUT = 3000;

var PopupManager = /*#__PURE__*/function (_EventEmitter) {
  (0, _inheritsLoose2["default"])(PopupManager, _EventEmitter);

  // Window
  function PopupManager(settings) {
    var _this;

    _this = _EventEmitter.call(this) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "requestTimeout", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeInterval", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "extensionTabId", 0);
    _this.settings = settings;
    _this.origin = (0, _networkUtils.getOrigin)(settings.popupSrc);
    _this.handleMessage = _this.handleMessage.bind((0, _assertThisInitialized2["default"])(_this));
    _this.iframeHandshake = (0, _deferred.create)(IFRAME.LOADED);

    if (_this.settings.env === 'webextension') {
      _this.handleExtensionConnect = _this.handleExtensionConnect.bind((0, _assertThisInitialized2["default"])(_this));
      _this.handleExtensionMessage = _this.handleExtensionMessage.bind((0, _assertThisInitialized2["default"])(_this)); // $FlowIssue chrome not declared outside

      chrome.runtime.onConnect.addListener(_this.handleExtensionConnect);
    }

    window.addEventListener('message', _this.handleMessage, false);
    return _this;
  }

  var _proto = PopupManager.prototype;

  _proto.request = function request(lazyLoad) {
    var _this2 = this;

    if (lazyLoad === void 0) {
      lazyLoad = false;
    }

    // popup request
    // TODO: ie - open immediately and hide it but post handshake after timeout
    // bring popup window to front
    if (this.locked) {
      if (this._window) {
        if (this.settings.env === 'webextension') {
          // $FlowIssue chrome not declared outside
          chrome.tabs.update(this._window.id, {
            active: true
          });
        } else {
          this._window.focus();
        }
      }

      return;
    }

    var openFn = this.open.bind(this);
    this.locked = true;

    if (!this.settings.supportedBrowser) {
      openFn();
    } else {
      var timeout = lazyLoad || this.settings.env === 'webextension' ? 1 : POPUP_REQUEST_TIMEOUT;
      this.requestTimeout = window.setTimeout(function () {
        _this2.requestTimeout = 0;
        openFn(lazyLoad);
      }, timeout);
    }
  };

  _proto.cancel = function cancel() {
    this.close();
  };

  _proto.unlock = function unlock() {
    this.locked = false;
  };

  _proto.open = function open(lazyLoad) {
    var _this3 = this;

    var src = this.settings.popupSrc;

    if (!this.settings.supportedBrowser) {
      this.openWrapper(src + "#unsupported");
      return;
    }

    this.popupPromise = (0, _deferred.create)(POPUP.LOADED);
    this.openWrapper(lazyLoad ? src + "#loading" : src);
    this.closeInterval = window.setInterval(function () {
      if (!_this3._window) return;

      if (_this3.settings.env === 'webextension') {
        // $FlowIssue chrome not declared outside
        chrome.tabs.get(_this3._window.id, function (tab) {
          if (!tab) {
            _this3.close();

            _this3.emit(POPUP.CLOSED);
          }
        });
      } else if (_this3._window.closed) {
        _this3.close();

        _this3.emit(POPUP.CLOSED);
      }
    }, POPUP_CLOSE_INTERVAL); // open timeout will be cancelled by POPUP.BOOTSTRAP message

    this.openTimeout = window.setTimeout(function () {
      _this3.close();

      (0, _showPopupRequest.showPopupRequest)(_this3.open.bind(_this3), function () {
        _this3.emit(POPUP.CLOSED);
      });
    }, POPUP_OPEN_TIMEOUT);
  };

  _proto.openWrapper = function openWrapper(url) {
    var _this4 = this;

    if (this.settings.env === 'webextension') {
      // $FlowIssue chrome not declared outside
      chrome.windows.getCurrent(null, function (currentWindow) {
        // Request coming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          // $FlowIssue chrome not declared outside
          chrome.windows.create({
            url: url
          }, function (newWindow) {
            // $FlowIssue chrome not declared outside
            chrome.tabs.query({
              windowId: newWindow.id,
              active: true
            }, function (tabs) {
              // eslint-disable-next-line prefer-destructuring
              _this4._window = tabs[0];
            });
          });
        } else {
          // $FlowIssue chrome not declared outside
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, function (tabs) {
            _this4.extensionTabId = tabs[0].id; // $FlowIssue chrome not declared outside

            chrome.tabs.create({
              url: url,
              index: tabs[0].index + 1
            }, function (tab) {
              _this4._window = tab;
            });
          });
        }
      });
    } else if (this.settings.env === 'electron') {
      this._window = window.open(url, 'modal');
    } else {
      this._window = window.open('', '_blank');

      if (this._window) {
        this._window.location.href = url; // otherwise android/chrome loose window.opener reference
      }
    }
  };

  _proto.handleExtensionConnect = function handleExtensionConnect(port) {
    if (port.name !== 'trezor-connect') return;

    if (!this._window || this._window && this._window.id !== port.sender.tab.id) {
      port.disconnect();
      return;
    } // since POPUP.BOOTSTRAP will not be handled by "handleMessage" we need to threat "content-script" connection as the same event
    // popup is opened properly, now wait for POPUP.LOADED message (in this case handled by "handleExtensionMessage")


    window.clearTimeout(this.openTimeout);
    this.extensionPort = port; // $FlowIssue need to update ChromePort definition

    this.extensionPort.onMessage.addListener(this.handleExtensionMessage);
  };

  _proto.handleExtensionMessage = function handleExtensionMessage(message) {
    var _this5 = this;

    if (!this.extensionPort) return;
    var port = this.extensionPort;
    var data = message.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === POPUP.ERROR) {
      // handle popup error
      var errorMessage = data.payload && typeof data.payload.error === 'string' ? data.payload.error : null;
      this.emit(POPUP.CLOSED, errorMessage ? "Popup error: " + errorMessage : null);
      this.close();
    } else if (data.type === POPUP.LOADED) {
      if (this.popupPromise) {
        this.popupPromise.resolve();
      }

      this.iframeHandshake.promise.then(function (useBroadcastChannel) {
        port.postMessage({
          type: POPUP.INIT,
          payload: {
            settings: _this5.settings,
            useBroadcastChannel: useBroadcastChannel
          }
        });
      });
    } else if (data.type === POPUP.EXTENSION_USB_PERMISSIONS) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function (tabs) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, function (_tab) {// do nothing
        });
      });
    } else if (data.type === POPUP.CLOSE_WINDOW) {
      this.emit(POPUP.CLOSED);
      this.close();
    }
  };

  _proto.handleMessage = function handleMessage(message) {
    var _this6 = this;

    // ignore messages from domain other then popup origin and without data
    // const data: CoreMessage = message.data;
    var data = message.data;
    if ((0, _networkUtils.getOrigin)(message.origin) !== this.origin || !data || typeof data !== 'object') return;

    if (data.type === IFRAME.LOADED) {
      var useBroadcastChannel = data.payload && typeof data.payload.useBroadcastChannel === 'boolean' ? data.payload.useBroadcastChannel : false;
      this.iframeHandshake.resolve(useBroadcastChannel);
    } else if (data.type === POPUP.BOOTSTRAP) {
      // popup is opened properly, now wait for POPUP.LOADED message
      window.clearTimeout(this.openTimeout);
    } else if (data.type === POPUP.ERROR && this._window) {
      var errorMessage = data.payload && typeof data.payload.error === 'string' ? data.payload.error : null;
      this.emit(POPUP.CLOSED, errorMessage ? "Popup error: " + errorMessage : null);
      this.close();
    } else if (data.type === POPUP.LOADED) {
      if (this.popupPromise) {
        this.popupPromise.resolve();
      } // popup is successfully loaded


      this.iframeHandshake.promise.then(function (useBroadcastChannel) {
        _this6._window.postMessage({
          type: POPUP.INIT,
          payload: {
            settings: _this6.settings,
            useBroadcastChannel: useBroadcastChannel
          }
        }, _this6.origin);
      }); // send ConnectSettings to popup
      // note this settings and iframe.ConnectSettings could be different (especially: origin, popup, webusb, debug)
      // now popup is able to load assets
    } else if (data.type === POPUP.CANCEL_POPUP_REQUEST || data.type === UI.CLOSE_UI_WINDOW) {
      this.close();
    }
  };

  _proto.close = function close() {
    this.locked = false;
    this.popupPromise = undefined;

    if (this.requestTimeout) {
      window.clearTimeout(this.requestTimeout);
      this.requestTimeout = 0;
    }

    if (this.openTimeout) {
      window.clearTimeout(this.openTimeout);
      this.openTimeout = 0;
    }

    if (this.closeInterval) {
      window.clearInterval(this.closeInterval);
      this.closeInterval = 0;
    }

    if (this.extensionPort) {
      this.extensionPort.disconnect();
      this.extensionPort = null;
    } // switch to previously focused tab


    if (this.extensionTabId) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }

    if (this._window) {
      if (this.settings.env === 'webextension') {
        // eslint-disable-next-line no-unused-vars
        var _e = chrome.runtime.lastError; // $FlowIssue chrome not declared outside

        chrome.tabs.remove(this._window.id, function () {
          // eslint-disable-next-line no-unused-vars
          _e = chrome.runtime.lastError;
        });
      } else {
        this._window.close();
      }

      this._window = null;
    }
  };

  _proto.postMessage = /*#__PURE__*/function () {
    var _postMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(message) {
      var _this7 = this;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!this._window && message.type !== UI.REQUEST_UI_WINDOW && this.openTimeout)) {
                _context.next = 4;
                break;
              }

              this.close();
              (0, _showPopupRequest.showPopupRequest)(this.open.bind(this), function () {
                _this7.emit(POPUP.CLOSED);
              });
              return _context.abrupt("return");

            case 4:
              if (!this.popupPromise) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return this.popupPromise.promise;

            case 7:
              // post message to popup window
              if (this._window) {
                this._window.postMessage(message, this.origin);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function postMessage(_x) {
      return _postMessage.apply(this, arguments);
    }

    return postMessage;
  }();

  return PopupManager;
}(_events["default"]);

exports["default"] = PopupManager;

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.showPopupRequest = void 0;
var LAYER_ID = 'TrezorConnectInteractionLayer';
var HTML = "\n    <div class=\"trezorconnect-container\" id=\"" + LAYER_ID + "\">\n        <div class=\"trezorconnect-window\">\n            <div class=\"trezorconnect-head\">\n                <svg class=\"trezorconnect-logo\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.7 41.9\" width=\"78px\" height=\"20px\" preserveAspectRatio=\"xMinYMin meet\">\n                    <polygon points=\"101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1\"/>\n                    <path d=\"M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z\"/>\n                    <path d=\"M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z\"/>\n                    <polygon points=\"82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 \"/>\n                    <path d=\"M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z\"/>\n                    <path d=\"M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z\"/>\n                    <polygon points=\"40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 \"/>\n                </svg>\n                <div class=\"trezorconnect-close\">\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"24 24 60 60\" width=\"24px\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\">\n                        <polygon class=\"st0\" points=\"40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 \"/>\n                    </svg>\n                </div>\n            </div>\n            <div class=\"trezorconnect-body\">\n                <h3>Popup was blocked</h3>\n                <p>Please click to \u201CContinue\u201D to open popup manually</p>\n                <button class=\"trezorconnect-open\">Continue</button>\n            </div>\n        </div>\n    </div>\n";

var showPopupRequest = function showPopupRequest(open, cancel) {
  if (document.getElementById(LAYER_ID)) {
    return;
  }

  var div = document.createElement('div');
  div.id = LAYER_ID;
  div.className = 'trezorconnect-container';
  div.innerHTML = HTML;

  if (document.body) {
    document.body.appendChild(div);
  }

  var button = div.getElementsByClassName('trezorconnect-open')[0];

  button.onclick = function () {
    open();

    if (document.body) {
      document.body.removeChild(div);
    }
  };

  var close = div.getElementsByClassName('trezorconnect-close')[0];

  close.onclick = function () {
    cancel();

    if (document.body) {
      document.body.removeChild(div);
    }
  };
};

exports.showPopupRequest = showPopupRequest;

/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Headers"] = Headers;
/* harmony export (immutable) */ __webpack_exports__["Request"] = Request;
/* harmony export (immutable) */ __webpack_exports__["Response"] = Response;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.clearTimeout = exports.dispose = exports.postMessage = exports.init = exports.messagePromises = exports.error = exports.timeout = exports.initPromise = exports.origin = exports.instance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(571));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(572));

var _deferred = __webpack_require__(1333);

var _constants = __webpack_require__(717);

var _networkUtils = __webpack_require__(1332);

var _inlineStyles = _interopRequireDefault(__webpack_require__(1669));

/* eslint-disable import/no-mutable-exports */
var instance;
exports.instance = instance;
var origin;
exports.origin = origin;
var initPromise = (0, _deferred.create)();
exports.initPromise = initPromise;
var timeout = 0;
exports.timeout = timeout;
var error;
/* eslint-enable import/no-mutable-exports */

exports.error = error;
var _messageID = 0; // every postMessage to iframe has its own promise to resolve

var messagePromises = {};
exports.messagePromises = messagePromises;

var init = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(settings) {
    var existedFrame, src, manifestString, manifest, onLoad;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            exports.initPromise = initPromise = (0, _deferred.create)();
            existedFrame = document.getElementById('trezorconnect');

            if (existedFrame) {
              exports.instance = instance = existedFrame;
            } else {
              exports.instance = instance = document.createElement('iframe');
              instance.frameBorder = '0';
              instance.width = '0px';
              instance.height = '0px';
              instance.style.position = 'absolute';
              instance.style.display = 'none';
              instance.style.border = '0px';
              instance.style.width = '0px';
              instance.style.height = '0px';
              instance.id = 'trezorconnect';
            }

            if (settings.env === 'web') {
              manifestString = settings.manifest ? JSON.stringify(settings.manifest) : 'undefined'; // note: btoa(undefined) === btoa('undefined') === "dW5kZWZpbmVk"

              manifest = "version=" + settings.version + "&manifest=" + encodeURIComponent(btoa(JSON.stringify(manifestString)));
              src = settings.iframeSrc + "?" + manifest;
            } else {
              src = settings.iframeSrc;
            }

            instance.setAttribute('src', src);

            if (settings.webusb) {
              instance.setAttribute('allow', 'usb');
            }

            exports.origin = origin = (0, _networkUtils.getOrigin)(instance.src);
            exports.timeout = timeout = window.setTimeout(function () {
              initPromise.reject(_constants.ERRORS.TypedError('Init_IframeTimeout'));
            }, 10000);

            onLoad = function onLoad() {
              if (!instance) {
                initPromise.reject(_constants.ERRORS.TypedError('Init_IframeBlocked'));
                return;
              }

              try {
                // if hosting page is able to access cross-origin location it means that the iframe is not loaded
                var iframeOrigin = instance.contentWindow.location.origin;

                if (!iframeOrigin || iframeOrigin === 'null') {
                  // eslint-disable-next-line no-use-before-define
                  handleIframeBlocked();
                  return;
                }
              } catch (e) {// empty
              }

              var extension; // $FlowIssue chrome is not declared outside

              if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
                chrome.runtime.onConnect.addListener(function () {});
                extension = chrome.runtime.id;
              }

              instance.contentWindow.postMessage({
                type: _constants.IFRAME.INIT,
                payload: {
                  settings: settings,
                  extension: extension
                }
              }, origin);
              instance.onload = undefined;
            }; // IE hack


            if (instance.attachEvent) {
              instance.attachEvent('onload', onLoad);
            } else {
              instance.onload = onLoad;
            } // inject iframe into host document body


            if (document.body) {
              document.body.appendChild(instance); // eslint-disable-next-line no-use-before-define

              injectStyleSheet();
            }

            _context.prev = 11;
            _context.next = 14;
            return initPromise.promise;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](11);

            // reset state to allow initialization again
            if (instance) {
              if (instance.parentNode) {
                instance.parentNode.removeChild(instance);
              }

              exports.instance = instance = null;
            }

            throw _context.t0;

          case 20:
            _context.prev = 20;
            window.clearTimeout(timeout);
            exports.timeout = timeout = 0;
            return _context.finish(20);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 16, 20, 24]]);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.init = init;

var injectStyleSheet = function injectStyleSheet() {
  if (!instance) {
    throw _constants.ERRORS.TypedError('Init_IframeBlocked');
  }

  var doc = instance.ownerDocument;
  var head = doc.head || doc.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'TrezorConnectStylesheet'); // $FlowIssue

  if (style.styleSheet) {
    // IE
    // $FlowIssue
    style.styleSheet.cssText = _inlineStyles["default"];
    head.appendChild(style);
  } else {
    style.appendChild(document.createTextNode(_inlineStyles["default"]));
    head.append(style);
  }
};

var handleIframeBlocked = function handleIframeBlocked() {
  window.clearTimeout(timeout);
  exports.error = error = _constants.ERRORS.TypedError('Init_IframeBlocked'); // eslint-disable-next-line no-use-before-define

  dispose();
  initPromise.reject(error);
}; // post messages to iframe


var postMessage = function postMessage(message, usePromise) {
  if (usePromise === void 0) {
    usePromise = true;
  }

  if (!instance) {
    throw _constants.ERRORS.TypedError('Init_IframeBlocked');
  }

  if (usePromise) {
    _messageID++;
    message.id = _messageID;
    messagePromises[_messageID] = (0, _deferred.create)();
    var promise = messagePromises[_messageID].promise;
    instance.contentWindow.postMessage(message, origin);
    return promise;
  }

  instance.contentWindow.postMessage(message, origin);
  return null;
};

exports.postMessage = postMessage;

var dispose = function dispose() {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (e) {// do nothing
    }
  }

  exports.instance = instance = null;
  exports.timeout = timeout = 0;
};

exports.dispose = dispose;

var clearTimeout = function clearTimeout() {
  window.clearTimeout(timeout);
};

exports.clearTimeout = clearTimeout;

/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var render = function render(className, url, origin) {
  var query = className || '.trezor-webusb-button';
  var buttons = document.querySelectorAll(query);
  var src = url + "?" + Date.now();
  buttons.forEach(function (b) {
    if (b.getElementsByTagName('iframe').length < 1) {
      var bounds = b.getBoundingClientRect();
      var btnIframe = document.createElement('iframe');
      btnIframe.frameBorder = '0';
      btnIframe.width = Math.round(bounds.width) + "px";
      btnIframe.height = Math.round(bounds.height) + "px";
      btnIframe.style.position = 'absolute';
      btnIframe.style.top = '0px';
      btnIframe.style.left = '0px';
      btnIframe.style.zIndex = '1'; // btnIframe.style.opacity = '0'; // this makes click impossible on cross-origin

      btnIframe.setAttribute('allow', 'usb');
      btnIframe.setAttribute('scrolling', 'no');

      btnIframe.onload = function () {
        btnIframe.contentWindow.postMessage({// style: JSON.stringify( window.getComputedStyle(b) ),
          // outer: b.outerHTML,
          // inner: b.innerHTML
        }, origin);
      };

      btnIframe.src = src; // inject iframe into button

      b.append(btnIframe);
    }
  });
};

var _default = render;
exports["default"] = _default;

/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.errorMessage = exports.parseMessage = void 0;

// parse MessageEvent .data into CoreMessage
var parseMessage = function parseMessage(messageData) {
  var message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };

  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }

  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }

  return message;
}; // common response used straight from npm index (not from Core)


exports.parseMessage = parseMessage;

var errorMessage = function errorMessage(error) {
  return {
    success: false,
    payload: {
      error: error.message,
      code: error.code
    }
  };
};

exports.errorMessage = errorMessage;

/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.BlockchainMessage = exports.ResponseMessage = exports.TransportMessage = exports.DeviceMessage = exports.UiMessage = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(503));

var _constants = __webpack_require__(717);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UiMessage = function UiMessage(type, payload) {
  return {
    event: _constants.UI_EVENT,
    type: type,
    payload: payload
  };
};

exports.UiMessage = UiMessage;

var DeviceMessage = function DeviceMessage(type, payload) {
  return {
    event: _constants.DEVICE_EVENT,
    type: type,
    payload: payload
  };
};

exports.DeviceMessage = DeviceMessage;

var TransportMessage = function TransportMessage(type, payload) {
  return {
    event: _constants.TRANSPORT_EVENT,
    type: type,
    // convert Error/TypeError object into payload error type (Error object/class is converted to string while sent via postMessage)
    payload: payload.error ? _objectSpread(_objectSpread({}, payload), {}, {
      error: payload.error.message,
      code: payload.error.code
    }) : payload
  };
};

exports.TransportMessage = TransportMessage;

var ResponseMessage = function ResponseMessage(id, success, payload) {
  if (payload === void 0) {
    payload = null;
  }

  return {
    event: _constants.RESPONSE_EVENT,
    type: _constants.RESPONSE_EVENT,
    id: id,
    success: success,
    // convert Error/TypeError object into payload error type (Error object/class is converted to string while sent via postMessage)
    payload: success ? payload : {
      error: payload.error.message,
      code: payload.error.code
    }
  };
};

exports.ResponseMessage = ResponseMessage;

var BlockchainMessage = function BlockchainMessage(type, payload) {
  return {
    event: _constants.BLOCKCHAIN_EVENT,
    type: type,
    payload: payload
  };
};

exports.BlockchainMessage = BlockchainMessage;

/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(495);

exports.__esModule = true;
exports.parse = exports.corsValidator = exports.getEnv = exports.DEFAULT_PRIORITY = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(503));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */
var VERSION = '8.2.1';
var versionN = VERSION.split('.').map(function (s) {
  return parseInt(s, 10);
}); // const DIRECTORY = `${ versionN[0] }${ (versionN[1] > 0 ? `.${versionN[1]}` : '') }/`;

var DIRECTORY = versionN[0] + "/";
var DEFAULT_DOMAIN = "https://connect.trezor.io/" + DIRECTORY;
var DEFAULT_PRIORITY = 2;
exports.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
var initialSettings = {
  configSrc: './data/config.json',
  // constant
  version: VERSION,
  // constant
  debug: false,
  priority: DEFAULT_PRIORITY,
  trustedHost: false,
  connectSrc: DEFAULT_DOMAIN,
  iframeSrc: DEFAULT_DOMAIN + "iframe.html",
  popup: true,
  popupSrc: DEFAULT_DOMAIN + "popup.html",
  webusbSrc: DEFAULT_DOMAIN + "webusb.html",
  transportReconnect: false,
  webusb: true,
  pendingTransportEvent: true,
  supportedBrowser: typeof navigator !== 'undefined' ? !/Trident|MSIE|Edge/.test(navigator.userAgent) : true,
  manifest: null,
  env: 'web',
  lazyLoad: false,
  timestamp: new Date().getTime(),
  interactionTimeout: 600 // 5 minutes

};
var currentSettings = initialSettings;

var parseManifest = function parseManifest(manifest) {
  if (!manifest) return;
  if (typeof manifest.email !== 'string') return;
  if (typeof manifest.appUrl !== 'string') return;
  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};

var getEnv = function getEnv() {
  // $FlowIssue: chrome is not declared outside the project
  if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
    return 'webextension';
  }

  if (typeof navigator !== 'undefined') {
    if (typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative') {
      return 'react-native';
    }

    var userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf(' electron/') > -1) {
      return 'electron';
    }
  } // if (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative') {
  //     return 'react-native';
  // }
  // if (typeof process !== 'undefined' && process.versions.hasOwnProperty('electron')) {
  //     return 'electron';
  // }


  return 'web';
}; // Cors validation copied from Trezor Bridge
// see: https://github.com/trezor/trezord-go/blob/05991cea5900d18bcc6ece5ae5e319d138fc5551/server/api/api.go#L229
// Its pointless to allow `trezor-connect` endpoints { connectSrc } for domains other than listed below
// `trezord` will block communication anyway


exports.getEnv = getEnv;

var corsValidator = function corsValidator(url) {
  if (typeof url !== 'string') return;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*trezor\.io\//)) return url;
  if (url.match(/^https?:\/\/localhost:[58][0-9]{3}\//)) return url;
  if (url.match(/^https:\/\/([A-Za-z0-9\-_]+\.)*sldev\.cz\//)) return url;
  if (url.match(/^https?:\/\/([A-Za-z0-9\-_]+\.)*trezoriovpjcahpzkrewelclulmszwbqpzmzgub37gbcjlvluxtruqad\.onion\//)) return url;
};

exports.corsValidator = corsValidator;

var parse = function parse(input) {
  if (input === void 0) {
    input = {};
  }

  var settings = _objectSpread({}, currentSettings);

  if (Object.prototype.hasOwnProperty.call(input, 'debug')) {
    if (Array.isArray(input)) {// enable log with prefix
    }

    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }

  if (typeof input.connectSrc === 'string') {
    settings.connectSrc = input.connectSrc;
  } // For debugging purposes `connectSrc` could be defined in `global.__TREZOR_CONNECT_SRC` variable


  if (typeof global !== 'undefined' && typeof global.__TREZOR_CONNECT_SRC === 'string') {
    settings.connectSrc = corsValidator(global.__TREZOR_CONNECT_SRC);
    settings.debug = true;
  } // For debugging purposes `connectSrc` could be defined in url query of hosting page. Usage:
  // https://3rdparty-page.com/?trezor-connect-src=https://localhost:8088/


  if (typeof window !== 'undefined' && window.location && typeof window.location.search === 'string') {
    var vars = window.location.search.split('&');
    var customUrl = vars.find(function (v) {
      return v.indexOf('trezor-connect-src') >= 0;
    });

    if (customUrl) {
      var _customUrl$split = customUrl.split('='),
          connectSrc = _customUrl$split[1];

      settings.connectSrc = corsValidator(decodeURIComponent(connectSrc));
      settings.debug = true;
    }
  }

  var src = settings.connectSrc || DEFAULT_DOMAIN;
  settings.iframeSrc = src + "iframe.html";
  settings.popupSrc = src + "popup.html";
  settings.webusbSrc = src + "webusb.html";

  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }

  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }

  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }

  if (typeof input.lazyLoad === 'boolean') {
    settings.lazyLoad = input.lazyLoad;
  }

  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  } // local files


  if (typeof window !== 'undefined' && window.location && window.location.protocol === 'file:') {
    settings.origin = "file://" + window.location.pathname;
    settings.webusb = false;
  }

  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }

  if (typeof input.env === 'string') {
    settings.env = input.env;
  } else {
    settings.env = getEnv();
  }

  if (typeof input.timestamp === 'number') {
    settings.timestamp = input.timestamp;
  }

  if (typeof input.interactionTimeout === 'number') {
    settings.interactionTimeout = input.interactionTimeout;
  }

  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }

  currentSettings = settings;
  return currentSettings;
};

exports.parse = parse;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getLog = exports.enableLogByPrefix = exports.enableLog = exports.initLog = void 0;

/* eslint-disable no-console */
var colors = {
  // green
  DescriptorStream: 'color: #77ab59',
  DeviceList: 'color: #36802d',
  Device: 'color: #bada55',
  Core: 'color: #c9df8a',
  IFrame: 'color: #FFFFFF; background: #f4a742;',
  Popup: 'color: #f48a00'
};
var MAX_ENTRIES = 100;

var Log = /*#__PURE__*/function () {
  function Log(prefix, enabled) {
    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = colors[prefix] || 'color: #000000; background: #FFFFFF;';
  }

  var _proto = Log.prototype;

  _proto.addMessage = function addMessage(level, prefix) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.messages.push({
      level: level,
      prefix: prefix,
      message: args,
      timestamp: new Date().getTime()
    });

    if (this.messages.length > MAX_ENTRIES) {
      this.messages.shift();
    }
  };

  _proto.log = function log() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.addMessage.apply(this, ['log', this.prefix].concat(args));

    if (this.enabled) {
      var _console;

      (_console = console).log.apply(_console, [this.prefix].concat(args));
    }
  };

  _proto.error = function error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.addMessage.apply(this, ['error', this.prefix].concat(args));

    if (this.enabled) {
      var _console2;

      (_console2 = console).error.apply(_console2, [this.prefix].concat(args));
    }
  };

  _proto.warn = function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.addMessage.apply(this, ['warn', this.prefix].concat(args));

    if (this.enabled) {
      var _console3;

      (_console3 = console).warn.apply(_console3, [this.prefix].concat(args));
    }
  };

  _proto.debug = function debug() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.addMessage.apply(this, ['debug', this.prefix].concat(args));

    if (this.enabled) {
      var _console4;

      (_console4 = console).log.apply(_console4, ["%c" + this.prefix, this.css].concat(args));
    }
  };

  return Log;
}();

var _logs = {};

var initLog = function initLog(prefix, enabled) {
  var instance = new Log(prefix, !!enabled);
  _logs[prefix] = instance;
  return instance;
};

exports.initLog = initLog;

var enableLog = function enableLog(enabled) {
  Object.keys(_logs).forEach(function (key) {
    _logs[key].enabled = enabled;
  });
};

exports.enableLog = enableLog;

var enableLogByPrefix = function enableLogByPrefix(prefix, enabled) {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
};

exports.enableLogByPrefix = enableLogByPrefix;

var getLog = function getLog() {
  var logs = [];
  Object.keys(_logs).forEach(function (key) {
    logs = logs.concat(_logs[key].messages);
  });
  logs.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return logs;
};

exports.getLog = getLog;

/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(504);

var CONSTANTS = _interopRequireWildcard(__webpack_require__(717));

var P = _interopRequireWildcard(__webpack_require__(1335));

var Device = _interopRequireWildcard(__webpack_require__(1336));

var Mgmnt = _interopRequireWildcard(__webpack_require__(1337));

var Protobuf = _interopRequireWildcard(__webpack_require__(1338));

var Account = _interopRequireWildcard(__webpack_require__(1339));

var Bitcoin = _interopRequireWildcard(__webpack_require__(1340));

var Binance = _interopRequireWildcard(__webpack_require__(1341));

var Cardano = _interopRequireWildcard(__webpack_require__(1342));

var CoinInfo = _interopRequireWildcard(__webpack_require__(1343));

var EOS = _interopRequireWildcard(__webpack_require__(1344));

var Ethereum = _interopRequireWildcard(__webpack_require__(1345));

var NEM = _interopRequireWildcard(__webpack_require__(1346));

var Ripple = _interopRequireWildcard(__webpack_require__(1347));

var Stellar = _interopRequireWildcard(__webpack_require__(1348));

var Tezos = _interopRequireWildcard(__webpack_require__(1349));

var Misc = _interopRequireWildcard(__webpack_require__(1350));

var Events = _interopRequireWildcard(__webpack_require__(1351));

var Blockchain = _interopRequireWildcard(__webpack_require__(1352));

/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 495:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(837)["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 572:
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(504);

exports.__esModule = true;
exports.CARDANO = exports.UI = exports.TRANSPORT = exports.POPUP = exports.NETWORK = exports.IFRAME = exports.ERRORS = exports.DEVICE = exports.BLOCKCHAIN = exports.BLOCKCHAIN_EVENT = exports.RESPONSE_EVENT = exports.TRANSPORT_EVENT = exports.DEVICE_EVENT = exports.UI_EVENT = exports.CORE_EVENT = void 0;

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(1654));

exports.BLOCKCHAIN = BLOCKCHAIN;

var DEVICE = _interopRequireWildcard(__webpack_require__(1655));

exports.DEVICE = DEVICE;

var ERRORS = _interopRequireWildcard(__webpack_require__(1656));

exports.ERRORS = ERRORS;

var IFRAME = _interopRequireWildcard(__webpack_require__(1329));

exports.IFRAME = IFRAME;

var NETWORK = _interopRequireWildcard(__webpack_require__(1661));

exports.NETWORK = NETWORK;

var POPUP = _interopRequireWildcard(__webpack_require__(1330));

exports.POPUP = POPUP;

var TRANSPORT = _interopRequireWildcard(__webpack_require__(1662));

exports.TRANSPORT = TRANSPORT;

var UI = _interopRequireWildcard(__webpack_require__(1331));

exports.UI = UI;

var CARDANO = _interopRequireWildcard(__webpack_require__(1663));

exports.CARDANO = CARDANO;
var CORE_EVENT = 'CORE_EVENT';
exports.CORE_EVENT = CORE_EVENT;
var UI_EVENT = 'UI_EVENT';
exports.UI_EVENT = UI_EVENT;
var DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE_EVENT = DEVICE_EVENT;
var TRANSPORT_EVENT = 'TRANSPORT_EVENT';
exports.TRANSPORT_EVENT = TRANSPORT_EVENT;
var RESPONSE_EVENT = 'RESPONSE_EVENT';
exports.RESPONSE_EVENT = RESPONSE_EVENT;
var BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN_EVENT = BLOCKCHAIN_EVENT;

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ })

});