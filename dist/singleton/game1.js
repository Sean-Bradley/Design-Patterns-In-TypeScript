"use strict";
// A Game Class that uses the Leaderboard Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game1 = void 0;
const leaderboard_1 = require("./leaderboard");
class Game1 {
    constructor() {
        this.leaderboard = new leaderboard_1.default();
    }
    addWinner(position, name) {
        this.leaderboard.addWinner(position, name);
    }
}
exports.Game1 = Game1;
