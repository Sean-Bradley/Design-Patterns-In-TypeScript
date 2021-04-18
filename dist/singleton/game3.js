"use strict";
// A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game3 = void 0;
const leaderboard_1 = require("./leaderboard");
class Game3 {
    constructor() {
        this.leaderboard = new leaderboard_1.default();
    }
    addWinner(position, name) {
        this.leaderboard.addWinner(position, name);
    }
}
exports.Game3 = Game3;
