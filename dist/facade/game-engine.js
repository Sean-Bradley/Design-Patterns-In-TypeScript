"use strict";
// The Game Engine
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
var _startTime, _clock, _entries, _gameOpen, _reports, _wallets;
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class GameEngine {
    constructor() {
        _startTime.set(this, 0);
        _clock.set(this, 0);
        _entries.set(this, []);
        _gameOpen.set(this, true);
        _reports.set(this, new reports_1.default());
        _wallets.set(this, new wallets_1.default());
        if (GameEngine.instance) {
            return GameEngine.instance;
        }
        __classPrivateFieldSet(this, _startTime, Math.floor(Date.now() / 1000));
        __classPrivateFieldSet(this, _clock, 60);
        GameEngine.instance = this;
    }
    getGameState() {
        // Get a snapshot of the current game state
        const now = Math.floor(Date.now() / 1000);
        let timeRemaining = __classPrivateFieldGet(this, _startTime) - now + __classPrivateFieldGet(this, _clock);
        console.log('getGameState ' + timeRemaining);
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        __classPrivateFieldSet(this, _gameOpen, false);
        return {
            clock: timeRemaining,
            gameOpen: __classPrivateFieldGet(this, _gameOpen),
            entries: __classPrivateFieldGet(this, _entries),
        };
    }
    submitEntry(userId, entry) {
        // Submit a new entry for the user in this game
        const now = Math.floor(Date.now() / 1000);
        const time_remaining = __classPrivateFieldGet(this, _startTime) - now + __classPrivateFieldGet(this, _clock);
        if (time_remaining > 0) {
            if (__classPrivateFieldGet(this, _wallets).getBalance(userId) > 1) {
                if (__classPrivateFieldGet(this, _wallets).adjustBalance(userId, -1)) {
                    __classPrivateFieldGet(this, _entries).push([userId, entry]);
                    __classPrivateFieldGet(this, _reports).logEvent(`New entry '${entry}' submitted by '${userId}'`);
                    return true;
                }
                __classPrivateFieldGet(this, _reports).logEvent(`Problem adjusting balance for '${userId}'`);
                return false;
            }
            __classPrivateFieldGet(this, _reports).logEvent(`User Balance for '${userId}' to low`);
            return false;
        }
        __classPrivateFieldGet(this, _reports).logEvent('Game Closed');
        return false;
    }
}
exports.default = GameEngine;
_startTime = new WeakMap(), _clock = new WeakMap(), _entries = new WeakMap(), _gameOpen = new WeakMap(), _reports = new WeakMap(), _wallets = new WeakMap();
