"use strict";
// A Singleton Dictionary of User Wallets
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Wallets_wallets, _Wallets_reports;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
class Wallets {
    constructor() {
        _Wallets_wallets.set(this, {});
        _Wallets_reports.set(this, new reports_1.default());
        if (Wallets.instance) {
            return Wallets.instance;
        }
        Wallets.instance = this;
    }
    createWallet(userId) {
        // A method to initialize a users wallet
        if (!(userId in __classPrivateFieldGet(this, _Wallets_wallets, "f"))) {
            __classPrivateFieldGet(this, _Wallets_wallets, "f")[userId] = 0;
            __classPrivateFieldGet(this, _Wallets_reports, "f").logEvent(`wallet for '${userId}' created and set to 0`);
            return true;
        }
        return false;
    }
    getBalance(userId) {
        // A method to check a users balance
        __classPrivateFieldGet(this, _Wallets_reports, "f").logEvent(`Balance check for '${userId}' = ${__classPrivateFieldGet(this, _Wallets_wallets, "f")[userId]}`);
        return __classPrivateFieldGet(this, _Wallets_wallets, "f")[userId];
    }
    adjustBalance(userId, amount) {
        // A method to adjust a user balance up or down
        __classPrivateFieldGet(this, _Wallets_wallets, "f")[userId] = __classPrivateFieldGet(this, _Wallets_wallets, "f")[userId] + amount;
        __classPrivateFieldGet(this, _Wallets_reports, "f").logEvent(`Balance adjustment for '${userId}'. New balance = ${__classPrivateFieldGet(this, _Wallets_wallets, "f")[userId]}`);
        return __classPrivateFieldGet(this, _Wallets_wallets, "f")[userId];
    }
}
_Wallets_wallets = new WeakMap(), _Wallets_reports = new WeakMap();
exports.default = Wallets;
