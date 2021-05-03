"use strict";
// The Facade Example Use Case
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_api_1 = require("./game-api");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function facadeExample() {
    return __awaiter(this, void 0, void 0, function* () {
        const gameAPI = new game_api_1.default();
        const user = { user_name: 'sean' };
        const userId = gameAPI.registerUser(user);
        yield sleep(500);
        gameAPI.submitEntry(userId, 5);
        yield sleep(500);
        console.log();
        console.log('---- GameState Snapshot ----');
        console.log(gameAPI.gameState());
        yield sleep(1000);
        const HISTORY = gameAPI.getHistory();
        console.log();
        console.log('---- Reports History ----');
        Object.keys(HISTORY).forEach((key) => {
            console.log(`${key} : ${HISTORY[key][0]} : ${HISTORY[key][1]}`);
        });
        yield sleep(1000);
        console.log();
        console.log('---- User Balance ----');
        console.log(user.user_name + ' : ' + gameAPI.getBalance(userId));
        yield sleep(1000);
        console.log();
        console.log('---- GameState Snapshot ----');
        console.log(gameAPI.gameState());
    });
}
facadeExample();
