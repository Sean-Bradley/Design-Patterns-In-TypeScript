"use strict";
// The Game API facade
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GameAPI_wallets, _GameAPI_reports, _GameAPI_users, _GameAPI_gameEngine;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
const users_1 = require("./users");
const game_engine_1 = require("./game-engine");
class GameAPI {
    constructor() {
        _GameAPI_wallets.set(this, void 0);
        _GameAPI_reports.set(this, void 0);
        _GameAPI_users.set(this, void 0);
        _GameAPI_gameEngine.set(this, void 0);
        __classPrivateFieldSet(this, _GameAPI_wallets, new wallets_1.default(), "f");
        __classPrivateFieldSet(this, _GameAPI_reports, new reports_1.default(), "f");
        __classPrivateFieldSet(this, _GameAPI_users, new users_1.default(), "f");
        __classPrivateFieldSet(this, _GameAPI_gameEngine, new game_engine_1.default(), "f");
    }
    getBalance(userId) {
        // Get a players balance
        return __classPrivateFieldGet(this, _GameAPI_wallets, "f").getBalance(userId);
    }
    gameState() {
        // Get the current game state
        return __classPrivateFieldGet(this, _GameAPI_gameEngine, "f").getGameState();
    }
    getHistory() {
        // get the game history
        return __classPrivateFieldGet(this, _GameAPI_reports, "f").getHistory();
    }
    changePwd(userId, password) {
        // change users password
        return __classPrivateFieldGet(this, _GameAPI_users, "f").changePwd(userId, password);
    }
    submitEntry(userId, entry) {
        // submit a bet
        return __classPrivateFieldGet(this, _GameAPI_gameEngine, "f").submitEntry(userId, entry);
    }
    registerUser(value) {
        // register a new user and returns the new id
        return __classPrivateFieldGet(this, _GameAPI_users, "f").registerUser(value);
    }
}
_GameAPI_wallets = new WeakMap(), _GameAPI_reports = new WeakMap(), _GameAPI_users = new WeakMap(), _GameAPI_gameEngine = new WeakMap();
exports.default = GameAPI;
