"use strict";
// Memento example Use Case
Object.defineProperty(exports, "__esModule", { value: true });
const caretaker_1 = require("./caretaker");
const game_character_1 = require("./game-character");
const GAME_CHARACTER = new game_character_1.default();
const CARETAKER = new caretaker_1.default(GAME_CHARACTER);
// start the game
GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.addInventory('sword');
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('rifle');
GAME_CHARACTER.moveForward(1);
console.log(GAME_CHARACTER.status());
// save progress
CARETAKER.save();
GAME_CHARACTER.registerKill();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
GAME_CHARACTER.addInventory('motorbike');
GAME_CHARACTER.moveForward(10);
GAME_CHARACTER.registerKill();
console.log(GAME_CHARACTER.status());
// save progress
CARETAKER.save();
GAME_CHARACTER.moveForward(1);
GAME_CHARACTER.progressToNextLevel();
GAME_CHARACTER.registerKill();
console.log(GAME_CHARACTER.status());
// decide you made a mistake, go back to first save
CARETAKER.restore(0);
console.log(GAME_CHARACTER.status());
// continue
GAME_CHARACTER.registerKill();
