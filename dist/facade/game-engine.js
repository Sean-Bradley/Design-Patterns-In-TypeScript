"use strict";
// The Game Engine
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class GameEngine {
    constructor() {
        this.startTime = 0;
        this.clock = 0;
        this.entries = [];
        this.gameOpen = true;
        this.reports = new reports_1.default();
        this.wallets = new wallets_1.default();
        if (GameEngine.instance) {
            return GameEngine.instance;
        }
        this.startTime = Math.floor(Date.now() / 1000);
        this.clock = 60;
        GameEngine.instance = this;
    }
    getGameState() {
        // Get a snapshot of the current game state
        const now = Math.floor(Date.now() / 1000);
        let timeRemaining = this.startTime - now + this.clock;
        console.log('getGameState ' + timeRemaining);
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        this.gameOpen = false;
        return {
            clock: timeRemaining,
            gameOpen: this.gameOpen,
            entries: this.entries,
        };
    }
    submitEntry(user_id, entry) {
        // Submit a new entry for the user in this game
        const now = Math.floor(Date.now() / 1000);
        const time_remaining = this.startTime - now + this.clock;
        if (time_remaining > 0) {
            if (this.wallets.getBalance(user_id) > 1) {
                if (this.wallets.adjustBalance(user_id, -1)) {
                    this.entries.push([user_id, entry]);
                    this.reports.logEvent(`New entry '${entry}' submitted by '${user_id}'`);
                    return true;
                }
                this.reports.logEvent(`Problem adjusting balance for '${user_id}'`);
                return false;
            }
            this.reports.logEvent(`User Balance for '${user_id}' to low`);
            return false;
        }
        this.reports.logEvent('Game Closed');
        return false;
    }
}
exports.default = GameEngine;
