"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A Singleton Dictionary of Users
const reports_1 = require("./reports");
const wallets_1 = require("./wallets");
class Users {
    constructor() {
        this.users = {};
        this.reports = new reports_1.default();
        this.wallets = new wallets_1.default();
        if (Users.instance) {
            return Users.instance;
        }
        Users.instance = this;
    }
    registerUser(new_user) {
        // register a user
        if (!(new_user["user_name"] in this.users)) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            const user_id = new_user["user_name"];
            this.users[user_id] = new_user;
            this.reports.logEvent(`new user '${user_id}' created`);
            // create a wallet for the new user
            this.wallets.createWallet(user_id);
            // give the user a sign up bonus
            this.reports.logEvent(`Give new user '${user_id}' sign up bonus of 10`);
            this.wallets.adjustBalance(user_id, 10);
            return user_id;
        }
        return "";
    }
    editUser(user_id, user) {
        "do nothing. Not implemented yet";
        console.log(user_id);
        console.log(user);
        return false;
    }
    changePwd(user_id, password) {
        "do nothing. Not implemented yet";
        console.log(user_id);
        console.log(password);
        return false;
    }
}
exports.default = Users;
