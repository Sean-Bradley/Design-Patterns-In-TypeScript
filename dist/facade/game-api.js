"use strict";
// The Game API facade
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wallets, _reports, _users, _gameEngine;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
const users_1 = require("./users");
const game_engine_1 = require("./game-engine");
class GameAPI {
    constructor() {
        _wallets.set(this, void 0);
        _reports.set(this, void 0);
        _users.set(this, void 0);
        _gameEngine.set(this, void 0);
        __classPrivateFieldSet(this, _wallets, new wallets_1.default());
        __classPrivateFieldSet(this, _reports, new reports_1.default());
        __classPrivateFieldSet(this, _users, new users_1.default());
        __classPrivateFieldSet(this, _gameEngine, new game_engine_1.default());
    }
    getBalance(userId) {
        // Get a players balance
        return __classPrivateFieldGet(this, _wallets).getBalance(userId);
    }
    gameState() {
        // Get the current game state
        return __classPrivateFieldGet(this, _gameEngine).getGameState();
    }
    getHistory() {
        // get the game history
        return __classPrivateFieldGet(this, _reports).getHistory();
    }
    changePwd(userId, password) {
        // change users password
        return __classPrivateFieldGet(this, _users).changePwd(userId, password);
    }
    submitEntry(userId, entry) {
        // submit a bet
        return __classPrivateFieldGet(this, _gameEngine).submitEntry(userId, entry);
    }
    registerUser(value) {
        // register a new user and returns the new id
        return __classPrivateFieldGet(this, _users).registerUser(value);
    }
}
exports.default = GameAPI;
_wallets = new WeakMap(), _reports = new WeakMap(), _users = new WeakMap(), _gameEngine = new WeakMap();
