"use strict";
// Singleton Use Case Example Code
Object.defineProperty(exports, "__esModule", { value: true });
const game1_1 = require("./game1");
const game2_1 = require("./game2");
const game3_1 = require("./game3");
// The Client
// Despite all games instantiating a leaderboard, they all point
// to the same memory object since the leaderboard is a singleton.
const GAME1 = new game1_1.Game1();
GAME1.addWinner(2, 'Cosmo');
const GAME2 = new game2_1.Game2();
GAME2.addWinner(3, 'Sean');
const GAME3 = new game3_1.Game3();
GAME3.addWinner(1, 'Emmy');
GAME1.leaderboard.print();
GAME2.leaderboard.print();
GAME3.leaderboard.print();
