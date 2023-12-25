"use strict";
// A Singleton Dictionary of Users
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Users_users, _Users_reports, _Users_wallets;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class Users {
    constructor() {
        _Users_users.set(this, {});
        _Users_reports.set(this, new reports_1.default());
        _Users_wallets.set(this, new wallets_1.default());
        if (Users.instance) {
            return Users.instance;
        }
        Users.instance = this;
    }
    registerUser(newUser) {
        // register a user
        if (!(newUser['user_name'] in __classPrivateFieldGet(this, _Users_users, "f"))) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            const userId = newUser['user_name'];
            __classPrivateFieldGet(this, _Users_users, "f")[userId] = newUser;
            __classPrivateFieldGet(this, _Users_reports, "f").logEvent(`new user '${userId}' created`);
            // create a wallet for the new user
            __classPrivateFieldGet(this, _Users_wallets, "f").createWallet(userId);
            // give the user a sign up bonus
            __classPrivateFieldGet(this, _Users_reports, "f").logEvent(`Give new user '${userId}' sign up bonus of 10`);
            __classPrivateFieldGet(this, _Users_wallets, "f").adjustBalance(userId, 10);
            return userId;
        }
        return '';
    }
    editUser(userId, user) {
        // do nothing. Not implemented yet
        console.log(userId);
        console.log(user);
        return false;
    }
    changePwd(userId, password) {
        // do nothing. Not implemented yet
        console.log(userId);
        console.log(password);
        return false;
    }
}
_Users_users = new WeakMap(), _Users_reports = new WeakMap(), _Users_wallets = new WeakMap();
exports.default = Users;
