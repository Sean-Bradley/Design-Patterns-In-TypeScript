"use strict";
// A Leaderboard Singleton Class
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Leaderboard_table;
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    constructor() {
        _Leaderboard_table.set(this, {});
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }
        Leaderboard.instance = this;
    }
    addWinner(position, name) {
        __classPrivateFieldGet(this, _Leaderboard_table, "f")[position] = name;
    }
    print() {
        console.log('-----------Leaderboard-----------');
        for (const key in __classPrivateFieldGet(this, _Leaderboard_table, "f")) {
            console.log(`|\t${key}\t|\t${__classPrivateFieldGet(this, _Leaderboard_table, "f")[key]}\t|`);
        }
        console.log();
    }
}
_Leaderboard_table = new WeakMap();
exports.default = Leaderboard;
