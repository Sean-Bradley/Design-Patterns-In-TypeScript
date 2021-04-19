"use strict";
// A Singleton Dictionary of User Wallets
Object.defineProperty(exports, "__esModule", { value: true });
const reports_1 = require("./reports");
class Wallets {
    constructor() {
        this.wallets = {};
        this.reports = new reports_1.default();
        if (Wallets.instance) {
            return Wallets.instance;
        }
        Wallets.instance = this;
    }
    createWallet(user_id) {
        // A method to initialize a users wallet
        if (!(user_id in this.wallets)) {
            this.wallets[user_id] = 0;
            this.reports.logEvent(`wallet for '${user_id}' created and set to 0`);
            return true;
        }
        return false;
    }
    getBalance(user_id) {
        // A method to check a users balance
        this.reports.logEvent(`Balance check for '${user_id}' = ${this.wallets[user_id]}`);
        return this.wallets[user_id];
    }
    adjustBalance(user_id, amount) {
        // A method to adjust a user balance up or down
        this.wallets[user_id] = this.wallets[user_id] + amount;
        this.reports.logEvent(`Balance adjustment for '${user_id}'. New balance = ${this.wallets[user_id]}`);
        return this.wallets[user_id];
    }
}
exports.default = Wallets;
