"use strict";
// A Leaderboard Singleton Class
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    constructor() {
        this.table = {};
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }
        Leaderboard.instance = this;
    }
    addWinner(position, name) {
        this.table[position] = name;
    }
    print() {
        console.log("-----------Leaderboard-----------");
        for (let key in this.table) {
            console.log(`|\t${key}\t|\t${this.table[key]}\t|`);
        }
        console.log();
    }
}
exports.default = Leaderboard;
