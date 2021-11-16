webpackJsonp([39],{

/***/ 485:
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function connect() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon,
      html = options.html,
      button = options.button;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(stateAndHelpers) {
      var wallet, address, stateSyncStatus, stateStore;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wallet = stateAndHelpers.wallet, address = stateAndHelpers.address, stateSyncStatus = stateAndHelpers.stateSyncStatus, stateStore = stateAndHelpers.stateStore;

              if (!(address === null)) {
                _context.next = 5;
                break;
              }

              if (!stateSyncStatus.address) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return new Promise(function (resolve) {
                stateSyncStatus.address && stateSyncStatus.address.then(resolve);
                setTimeout(function () {
                  if (address === null) {
                    // if prom isn't resolving after 500ms, then stop waiting
                    resolve(undefined);
                  }
                }, 500);
              });

            case 5:
              if (!(!stateStore.address.get() && wallet && wallet.name)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", {
                heading: heading || 'Login and Authorize Your Wallet',
                description: description || "This dapp requires access to your wallet, please login and authorize access to your ".concat(wallet.name, " accounts to continue."),
                eventCode: 'loginFail',
                action: wallet.connect,
                icon: icon || __WEBPACK_IMPORTED_MODULE_1__onboard_e5e6136d_js__["g" /* e */],
                html: html,
                button: button
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ })

});