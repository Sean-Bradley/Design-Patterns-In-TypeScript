"use strict";
// A Singleton Dictionary of Users
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _users, _reports, _wallets;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class Users {
    constructor() {
        _users.set(this, {});
        _reports.set(this, new reports_1.default());
        _wallets.set(this, new wallets_1.default());
        if (Users.instance) {
            return Users.instance;
        }
        Users.instance = this;
    }
    registerUser(newUser) {
        // register a user
        if (!(newUser['user_name'] in __classPrivateFieldGet(this, _users))) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            const userId = newUser['user_name'];
            __classPrivateFieldGet(this, _users)[userId] = newUser;
            __classPrivateFieldGet(this, _reports).logEvent(`new user '${userId}' created`);
            // create a wallet for the new user
            __classPrivateFieldGet(this, _wallets).createWallet(userId);
            // give the user a sign up bonus
            __classPrivateFieldGet(this, _reports).logEvent(`Give new user '${userId}' sign up bonus of 10`);
            __classPrivateFieldGet(this, _wallets).adjustBalance(userId, 10);
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
exports.default = Users;
_users = new WeakMap(), _reports = new WeakMap(), _wallets = new WeakMap();
