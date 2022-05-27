"use strict";
// The Strategy Pattern Example Use Case
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GameCharacter_position;
class GameCharacter {
    constructor() {
        // This is the context whose strategy will change
        _GameCharacter_position.set(this, [0, 0]);
    }
    move(movementStyle) {
        // The movement algorithm has been decided by the client
        new movementStyle().move(__classPrivateFieldGet(this, _GameCharacter_position, "f"));
    }
}
_GameCharacter_position = new WeakMap();
class Walking {
    // A concrete movement strategy for walking
    move(position) {
        position[0] += 1;
        console.log(`I am Walking. New position = ${position}`);
    }
}
class Sprinting {
    // A concrete movement strategy for sprinting
    move(position) {
        position[0] += 2;
        console.log(`I am Running. New position = ${position}`);
    }
}
class Crawling {
    // A concrete movement strategy for crawling
    move(position) {
        position[0] += 0.5;
        console.log(`I am Crawling. New position = ${position} `);
    }
}
// The Client
const GAME_CHARACTER = new GameCharacter();
GAME_CHARACTER.move(Walking);
// Character sees the enemy
GAME_CHARACTER.move(Sprinting);
// Character finds a small cave to hide in
GAME_CHARACTER.move(Crawling);
