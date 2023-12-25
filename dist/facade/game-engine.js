"use strict";
// The Game Engine
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
var _GameEngine_startTime, _GameEngine_clock, _GameEngine_entries, _GameEngine_gameOpen, _GameEngine_reports, _GameEngine_wallets;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class GameEngine {
    constructor() {
        _GameEngine_startTime.set(this, 0);
        _GameEngine_clock.set(this, 0);
        _GameEngine_entries.set(this, []);
        _GameEngine_gameOpen.set(this, true);
        _GameEngine_reports.set(this, new reports_1.default());
        _GameEngine_wallets.set(this, new wallets_1.default());
        if (GameEngine.instance) {
            return GameEngine.instance;
        }
        __classPrivateFieldSet(this, _GameEngine_startTime, Math.floor(Date.now() / 1000), "f");
        __classPrivateFieldSet(this, _GameEngine_clock, 60, "f");
        GameEngine.instance = this;
    }
    getGameState() {
        // Get a snapshot of the current game state
        const now = Math.floor(Date.now() / 1000);
        let timeRemaining = __classPrivateFieldGet(this, _GameEngine_startTime, "f") - now + __classPrivateFieldGet(this, _GameEngine_clock, "f");
        console.log('getGameState ' + timeRemaining);
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        __classPrivateFieldSet(this, _GameEngine_gameOpen, false, "f");
        return {
            clock: timeRemaining,
            gameOpen: __classPrivateFieldGet(this, _GameEngine_gameOpen, "f"),
            entries: __classPrivateFieldGet(this, _GameEngine_entries, "f"),
        };
    }
    submitEntry(userId, entry) {
        // Submit a new entry for the user in this game
        const now = Math.floor(Date.now() / 1000);
        const time_remaining = __classPrivateFieldGet(this, _GameEngine_startTime, "f") - now + __classPrivateFieldGet(this, _GameEngine_clock, "f");
        if (time_remaining > 0) {
            if (__classPrivateFieldGet(this, _GameEngine_wallets, "f").getBalance(userId) > 1) {
                if (__classPrivateFieldGet(this, _GameEngine_wallets, "f").adjustBalance(userId, -1)) {
                    __classPrivateFieldGet(this, _GameEngine_entries, "f").push([userId, entry]);
                    __classPrivateFieldGet(this, _GameEngine_reports, "f").logEvent(`New entry '${entry}' submitted by '${userId}'`);
                    return true;
                }
                __classPrivateFieldGet(this, _GameEngine_reports, "f").logEvent(`Problem adjusting balance for '${userId}'`);
                return false;
            }
            __classPrivateFieldGet(this, _GameEngine_reports, "f").logEvent(`User Balance for '${userId}' to low`);
            return false;
        }
        __classPrivateFieldGet(this, _GameEngine_reports, "f").logEvent('Game Closed');
        return false;
    }
}
_GameEngine_startTime = new WeakMap(), _GameEngine_clock = new WeakMap(), _GameEngine_entries = new WeakMap(), _GameEngine_gameOpen = new WeakMap(), _GameEngine_reports = new WeakMap(), _GameEngine_wallets = new WeakMap();
exports.default = GameEngine;
