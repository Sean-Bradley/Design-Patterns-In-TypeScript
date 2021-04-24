"use strict";
// The Game API facade
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
const users_1 = require("./users");
const game_engine_1 = require("./game-engine");
class GameAPI {
    constructor() {
        this.wallets = new wallets_1.default();
        this.reports = new reports_1.default();
        this.users = new users_1.default();
        this.gameEngine = new game_engine_1.default();
    }
    getBalance(user_id) {
        // Get a players balance
        return this.wallets.getBalance(user_id);
    }
    gameState() {
        // Get the current game state
        return this.gameEngine.getGameState();
    }
    getHistory() {
        // get the game history
        return this.reports.getHistory();
    }
    changePwd(user_id, password) {
        // change users password
        return this.users.changePwd(user_id, password);
    }
    submitEntry(user_id, entry) {
        // submit a bet
        return this.gameEngine.submitEntry(user_id, entry);
    }
    registerUser(value) {
        // register a new user and returns the new id
        return this.users.registerUser(value);
    }
}
exports.default = GameAPI;
