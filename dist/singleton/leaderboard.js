"use strict";
// A Leaderboard Singleton Class
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _table;
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    constructor() {
        _table.set(this, {});
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }
        Leaderboard.instance = this;
    }
    addWinner(position, name) {
        __classPrivateFieldGet(this, _table)[position] = name;
    }
    print() {
        console.log('-----------Leaderboard-----------');
        for (const key in __classPrivateFieldGet(this, _table)) {
            console.log(`|\t${key}\t|\t${__classPrivateFieldGet(this, _table)[key]}\t|`);
        }
        console.log();
    }
}
exports.default = Leaderboard;
_table = new WeakMap();
