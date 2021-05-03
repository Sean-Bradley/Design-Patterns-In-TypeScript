"use strict";
// A Singleton Dictionary of User Wallets
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wallets, _reports;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
class Wallets {
    constructor() {
        _wallets.set(this, {});
        _reports.set(this, new reports_1.default());
        if (Wallets.instance) {
            return Wallets.instance;
        }
        Wallets.instance = this;
    }
    createWallet(userId) {
        // A method to initialize a users wallet
        if (!(userId in __classPrivateFieldGet(this, _wallets))) {
            __classPrivateFieldGet(this, _wallets)[userId] = 0;
            __classPrivateFieldGet(this, _reports).logEvent(`wallet for '${userId}' created and set to 0`);
            return true;
        }
        return false;
    }
    getBalance(userId) {
        // A method to check a users balance
        __classPrivateFieldGet(this, _reports).logEvent(`Balance check for '${userId}' = ${__classPrivateFieldGet(this, _wallets)[userId]}`);
        return __classPrivateFieldGet(this, _wallets)[userId];
    }
    adjustBalance(userId, amount) {
        // A method to adjust a user balance up or down
        __classPrivateFieldGet(this, _wallets)[userId] = __classPrivateFieldGet(this, _wallets)[userId] + amount;
        __classPrivateFieldGet(this, _reports).logEvent(`Balance adjustment for '${userId}'. New balance = ${__classPrivateFieldGet(this, _wallets)[userId]}`);
        return __classPrivateFieldGet(this, _wallets)[userId];
    }
}
exports.default = Wallets;
_wallets = new WeakMap(), _reports = new WeakMap();
