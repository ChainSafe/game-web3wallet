webpackJsonp([47],{

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.METHODS = void 0;
exports.METHODS = {
    getEnvInfo: 'getEnvInfo',
    sendTransactions: 'sendTransactions',
    rpcCall: 'rpcCall',
    getSafeInfo: 'getSafeInfo',
};
//# sourceMappingURL=methods.js.map

/***/ }),

/***/ 1447:
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSDKVersion = void 0;
const sdk_1 = __importDefault(__webpack_require__(1448));
exports.default = sdk_1.default;
__exportStar(__webpack_require__(1448), exports);
__exportStar(__webpack_require__(2069), exports);
__exportStar(__webpack_require__(1018), exports);
__exportStar(__webpack_require__(1450), exports);
var utils_1 = __webpack_require__(1451);
Object.defineProperty(exports, "getSDKVersion", { enumerable: true, get: function () { return utils_1.getSDKVersion; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const communication_1 = __webpack_require__(1449);
const communication_2 = __importDefault(__webpack_require__(1449));
const txs_1 = __webpack_require__(2066);
const eth_1 = __webpack_require__(2067);
class SafeAppsSDK {
    constructor(opts = {}) {
        if (typeof window === 'undefined') {
            throw new Error('Error initializing the sdk: window is undefined');
        }
        const { whitelistedDomains = null, debug = false } = opts;
        this.communicator = new communication_2.default(whitelistedDomains, debug);
        this.eth = new eth_1.Eth(this.communicator);
        this.txs = new txs_1.TXs(this.communicator);
        this.bootstrap();
    }
    async bootstrap() {
        const { txServiceUrl } = await this.getEnvInfo();
        this.txs.setTxServiceUrl(txServiceUrl);
    }
    async getEnvInfo() {
        const response = await this.communicator.send(communication_1.METHODS.getEnvInfo, undefined);
        if (!response.success) {
            throw new Error(response.error);
        }
        return response.data;
    }
    async getSafeInfo() {
        const response = await this.communicator.send(communication_1.METHODS.getSafeInfo, undefined);
        if (!response.success) {
            throw new Error(response.error);
        }
        return response.data;
    }
}
exports.default = SafeAppsSDK;
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ 1449:
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
const messageFormatter_1 = __webpack_require__(1450);
class PostMessageCommunicator {
    constructor(allowedOrigins = null, debugMode = false) {
        this.allowedOrigins = null;
        this.callbacks = new Map();
        this.debugMode = false;
        this.isValidMessage = ({ origin, data, source }) => {
            const emptyOrMalformed = !data;
            const sentFromParentEl = source === window.parent;
            const majorVersionNumber = typeof data.version !== 'undefined' && parseInt(data.version.split('.')[0]);
            const allowedSDKVersion = majorVersionNumber >= 1;
            let validOrigin = true;
            if (Array.isArray(this.allowedOrigins)) {
                validOrigin = this.allowedOrigins.find((regExp) => regExp.test(origin)) !== undefined;
            }
            return !emptyOrMalformed && sentFromParentEl && allowedSDKVersion && validOrigin;
        };
        this.logIncomingMessage = (msg) => {
            console.info(`Safe Apps SDK v1: A message was received from origin ${msg.origin}. `, msg.data);
        };
        this.onParentMessage = (msg) => {
            if (this.isValidMessage(msg)) {
                this.debugMode && this.logIncomingMessage(msg);
                this.handleIncomingMessage(msg.data);
            }
        };
        this.handleIncomingMessage = (payload) => {
            const { id } = payload;
            const cb = this.callbacks.get(id);
            if (cb) {
                cb(payload);
                this.callbacks.delete(id);
            }
        };
        this.send = (method, params) => {
            const request = messageFormatter_1.MessageFormatter.makeRequest(method, params);
            if (typeof window === 'undefined') {
                throw new Error("Window doesn't exist");
            }
            window.parent.postMessage(request, '*');
            return new Promise((resolve) => {
                this.callbacks.set(request.id, (response) => {
                    resolve(response);
                });
            });
        };
        this.allowedOrigins = allowedOrigins;
        this.debugMode = debugMode;
        window.addEventListener('message', this.onParentMessage);
    }
}
exports.default = PostMessageCommunicator;
__exportStar(__webpack_require__(1018), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFormatter = void 0;
const utils_1 = __webpack_require__(2064);
const utils_2 = __webpack_require__(1451);
class MessageFormatter {
}
exports.MessageFormatter = MessageFormatter;
MessageFormatter.makeRequest = (method, params) => {
    const id = utils_1.generateRequestId();
    return {
        id,
        method,
        params,
        env: {
            sdkVersion: utils_2.getSDKVersion(),
        },
    };
};
MessageFormatter.makeResponse = (id, data, version) => ({
    id,
    success: true,
    version,
    data,
});
MessageFormatter.makeErrorResponse = (id, error, version) => ({
    id,
    success: false,
    error,
    version,
});
//# sourceMappingURL=messageFormatter.js.map

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSDKVersion = void 0;
const package_json_1 = __importDefault(__webpack_require__(2065));
// console.log({ pkg });
// Slice is needed for versions like '1.0.0-beta.0'
const getSDKVersion = () => package_json_1.default.version.slice(0, 5);
exports.getSDKVersion = getSDKVersion;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 2064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestId = void 0;
// i.e. 0-255 -> '00'-'ff'
const dec2hex = (dec) => dec.toString(16).padStart(2, '0');
const generateId = (len) => {
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
const generateRequestId = () => {
    if (typeof window !== 'undefined') {
        return generateId(10);
    }
    return new Date().getTime().toString(36);
};
exports.generateRequestId = generateRequestId;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 2065:
/***/ (function(module, exports) {

module.exports = {"name":"@gnosis.pm/safe-apps-sdk","version":"3.0.0","description":"SDK developed to integrate third-party apps with Safe-Multisig app.","main":"dist/src/index.js","typings":"dist/src/index.d.ts","_files":["dist/**/*","README.md"],"keywords":["Gnosis","sdk","apps"],"scripts":{"test":"jest","format-dist":"sed -i '' 's/\"files\":/\"_files\":/' dist/package.json","build":"yarn rimraf dist && tsc && yarn format-dist","format":"prettier --write \"src/**/*.ts\"","lint":"tslint -p tsconfig.json","prepublishOnly":"yarn build"},"author":"Gnosis (https://gnosis.io)","license":"MIT","dependencies":{},"devDependencies":{"@types/jest":"^26.0.23","@types/node":"^15.3.0","husky":"^6.0.0","lint-staged":"^11.0.0","prettier":"^2.2.1","rimraf":"^3.0.2"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/!(*test).ts":["yarn lint","prettier --write"]},"repository":{"type":"git","url":"git+https://github.com/gnosis/safe-apps-sdk.git"},"bugs":{"url":"https://github.com/gnosis/safe-apps-sdk/issues"},"homepage":"https://github.com/gnosis/safe-apps-sdk#readme"}

/***/ }),

/***/ 2066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TXs = void 0;
const methods_1 = __webpack_require__(1018);
class TXs {
    constructor(communicator) {
        this.txServiceUrl = null;
        this.communicator = communicator;
    }
    async getBySafeTxHash(safeTxHash) {
        if (!this.txServiceUrl) {
            throw new Error("ENV information hasn't been synced yet or there was an error during the process");
        }
        const controller = new AbortController();
        const options = {
            method: 'GET',
            signal: controller.signal,
        };
        setTimeout(() => controller.abort(), 10000);
        try {
            const res = await fetch(`${this.txServiceUrl}/transactions/${safeTxHash}`, options);
            if (res.status !== 200) {
                throw new Error("Failed to get the transaction. Either safeTxHash is incorrect or transaction hasn't been indexed by the service yet");
            }
            const json = await res.json();
            return json;
        }
        catch (err) {
            throw err;
        }
    }
    async send({ txs, params }) {
        if (!txs || !txs.length) {
            throw new Error('No transactions were passed');
        }
        const messagePayload = {
            txs,
            params,
        };
        const response = await this.communicator.send(methods_1.METHODS.sendTransactions, messagePayload);
        if (!response.success) {
            throw new Error(response.error);
        }
        return response.data;
    }
    setTxServiceUrl(url) {
        this.txServiceUrl = url;
    }
}
exports.TXs = TXs;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Eth = void 0;
const constants_1 = __webpack_require__(2068);
const methods_1 = __webpack_require__(1018);
const inputFormatters = {
    defaultBlockParam: (arg = 'latest') => arg,
    returnFullTxObjectParam: (arg = false) => arg,
    blockNumberToHex: (arg) => Number.isInteger(arg) ? `0x${arg.toString(16)}` : arg,
};
class Eth {
    constructor(communicator) {
        this.communicator = communicator;
        this.call = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_call,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getBalance = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getBalance,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getCode = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getCode,
            formatters: [null, inputFormatters.defaultBlockParam],
        });
        this.getStorageAt = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getStorageAt,
            formatters: [null, inputFormatters.blockNumberToHex, inputFormatters.defaultBlockParam],
        });
        this.getPastLogs = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getLogs,
        });
        this.getBlockByHash = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getBlockByHash,
            formatters: [null, inputFormatters.returnFullTxObjectParam],
        });
        this.getBlockByNumber = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getBlockByNumber,
            formatters: [inputFormatters.blockNumberToHex, inputFormatters.returnFullTxObjectParam],
        });
        this.getTransactionByHash = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getTransactionByHash,
        });
        this.getTransactionReceipt = this.buildRequest({
            call: constants_1.RPC_CALLS.eth_getTransactionReceipt,
        });
    }
    buildRequest({ call, formatters }) {
        return async (params) => {
            if (formatters && Array.isArray(params)) {
                formatters.forEach((formatter, i) => {
                    if (formatter) {
                        params[i] = formatter(params[i]);
                    }
                });
            }
            const payload = {
                call,
                params,
            };
            const response = await this.communicator.send(methods_1.METHODS.rpcCall, payload);
            if (!response.success) {
                throw new Error(response.error);
            }
            return response.data;
        };
    }
}
exports.Eth = Eth;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC_CALLS = void 0;
exports.RPC_CALLS = {
    eth_call: 'eth_call',
    eth_getLogs: 'eth_getLogs',
    eth_getBalance: 'eth_getBalance',
    eth_getCode: 'eth_getCode',
    eth_getBlockByHash: 'eth_getBlockByHash',
    eth_getBlockByNumber: 'eth_getBlockByNumber',
    eth_getStorageAt: 'eth_getStorageAt',
    eth_getTransactionByHash: 'eth_getTransactionByHash',
    eth_getTransactionReceipt: 'eth_getTransactionReceipt',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 2069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsChangeMethods = exports.TransferMethods = exports.Operation = void 0;
const methods_1 = __webpack_require__(1018);
// copy-pasting all the types below from safe-react makes me think we might want to export them to a package
var Operation;
(function (Operation) {
    Operation[Operation["CALL"] = 0] = "CALL";
    Operation[Operation["DELEGATE_CALL"] = 1] = "DELEGATE_CALL";
    Operation[Operation["CREATE"] = 2] = "CREATE";
})(Operation = exports.Operation || (exports.Operation = {}));
// types comes from: https://github.com/gnosis/safe-client-gateway/blob/752e76b6d1d475791dbd7917b174bb41d2d9d8be/src/utils.rs
var TransferMethods;
(function (TransferMethods) {
    TransferMethods["TRANSFER"] = "transfer";
    TransferMethods["TRANSFER_FROM"] = "transferFrom";
    TransferMethods["SAFE_TRANSFER_FROM"] = "safeTransferFrom";
})(TransferMethods = exports.TransferMethods || (exports.TransferMethods = {}));
var SettingsChangeMethods;
(function (SettingsChangeMethods) {
    SettingsChangeMethods["SETUP"] = "setup";
    SettingsChangeMethods["SET_FALLBACK_HANDLER"] = "setFallbackHandler";
    SettingsChangeMethods["ADD_OWNER_WITH_THRESHOLD"] = "addOwnerWithThreshold";
    SettingsChangeMethods["REMOVE_OWNER"] = "removeOwner";
    SettingsChangeMethods["REMOVE_OWNER_WITH_THRESHOLD"] = "removeOwnerWithThreshold";
    SettingsChangeMethods["SWAP_OWNER"] = "swapOwner";
    SettingsChangeMethods["CHANGE_THRESHOLD"] = "changeThreshold";
    SettingsChangeMethods["CHANGE_MASTER_COPY"] = "changeMasterCopy";
    SettingsChangeMethods["ENABLE_MODULE"] = "enableModule";
    SettingsChangeMethods["DISABLE_MODULE"] = "disableModule";
    SettingsChangeMethods["EXEC_TRANSACTION_FROM_MODULE"] = "execTransactionFromModule";
    SettingsChangeMethods["APPROVE_HASH"] = "approveHash";
    SettingsChangeMethods["EXEC_TRANSACTION"] = "execTransaction";
})(SettingsChangeMethods = exports.SettingsChangeMethods || (exports.SettingsChangeMethods = {}));
//# sourceMappingURL=types.js.map

/***/ })

});