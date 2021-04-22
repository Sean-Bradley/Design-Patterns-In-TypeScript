"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
// The Strategy Pattern Example Use Case
var StrategyUseCase;
(function (StrategyUseCase) {
    var _position;
    class GameCharacter {
        constructor() {
            // This is the context whose strategy will change
            _position.set(this, [0, 0]);
        }
        move(movementStyle) {
            // The movement algorithm has been decided by the client
            new movementStyle().move(__classPrivateFieldGet(this, _position));
        }
    }
    _position = new WeakMap();
    class Walking {
        // A concrete movement strategy for walking
        move(position) {
            position[0] += 1;
            console.log(`I am Walking. New position = ${position}`);
        }
    }
    class Running {
        // A concrete movement strategy for running
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
    GAME_CHARACTER.move(Running);
    // Character finds a small cave to hide in
    GAME_CHARACTER.move(Crawling);
})(StrategyUseCase || (StrategyUseCase = {}));
