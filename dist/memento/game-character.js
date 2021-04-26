"use strict";
// The Game Character whose state changes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _score, _inventory, _level, _location;
Object.defineProperty(exports, "__esModule", { value: true });
const memento_1 = require("./memento");
class GameCharacter {
    constructor() {
        _score.set(this, void 0);
        _inventory.set(this, void 0);
        _level.set(this, void 0);
        _location.set(this, void 0);
        __classPrivateFieldSet(this, _score, 0);
        __classPrivateFieldSet(this, _inventory, new Set());
        __classPrivateFieldSet(this, _level, 0);
        __classPrivateFieldSet(this, _location, { x: 0, y: 0, z: 0 });
    }
    get score() {
        // A getter for the score"
        return __classPrivateFieldGet(this, _score);
    }
    registerKill() {
        // The character kills its enemies as it progresses
        __classPrivateFieldSet(this, _score, __classPrivateFieldGet(this, _score) + 100);
    }
    addInventory(item) {
        // The character finds objects in the game
        __classPrivateFieldGet(this, _inventory).add(item);
    }
    progressToNextLevel() {
        // The character progresses to the next level
        __classPrivateFieldSet(this, _level, __classPrivateFieldGet(this, _level) + 1);
    }
    moveForward(amount) {
        // The character moves around the environment
        __classPrivateFieldGet(this, _location)['z'] += amount;
    }
    status() {
        return (`Score: ${__classPrivateFieldGet(this, _score)}, ` +
            `Level: ${__classPrivateFieldGet(this, _level)}, ` +
            `Location: ${JSON.stringify(__classPrivateFieldGet(this, _location))}\n` +
            `Inventory: ${JSON.stringify(Array.from(__classPrivateFieldGet(this, _inventory)))}`);
    }
    get memento() {
        'A `getter` for the characters attributes as a Memento';
        return new memento_1.default(__classPrivateFieldGet(this, _score), new Set(__classPrivateFieldGet(this, _inventory)), __classPrivateFieldGet(this, _level), Object.assign({}, __classPrivateFieldGet(this, _location)));
    }
    set memento(value) {
        __classPrivateFieldSet(this, _score, value.score);
        __classPrivateFieldSet(this, _inventory, value.inventory);
        __classPrivateFieldSet(this, _level, value.level);
        __classPrivateFieldSet(this, _location, value.location);
    }
}
exports.default = GameCharacter;
_score = new WeakMap(), _inventory = new WeakMap(), _level = new WeakMap(), _location = new WeakMap();
