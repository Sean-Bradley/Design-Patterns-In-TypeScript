"use strict";
// The Game Character whose state changes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GameCharacter_score, _GameCharacter_inventory, _GameCharacter_level, _GameCharacter_location;
Object.defineProperty(exports, "__esModule", { value: true });
const memento_1 = require("./memento");
class GameCharacter {
    constructor() {
        _GameCharacter_score.set(this, void 0);
        _GameCharacter_inventory.set(this, void 0);
        _GameCharacter_level.set(this, void 0);
        _GameCharacter_location.set(this, void 0);
        __classPrivateFieldSet(this, _GameCharacter_score, 0, "f");
        __classPrivateFieldSet(this, _GameCharacter_inventory, new Set(), "f");
        __classPrivateFieldSet(this, _GameCharacter_level, 0, "f");
        __classPrivateFieldSet(this, _GameCharacter_location, { x: 0, y: 0, z: 0 }, "f");
    }
    get score() {
        // A getter for the score"
        return __classPrivateFieldGet(this, _GameCharacter_score, "f");
    }
    registerKill() {
        // The character kills its enemies as it progresses
        __classPrivateFieldSet(this, _GameCharacter_score, __classPrivateFieldGet(this, _GameCharacter_score, "f") + 100, "f");
    }
    addInventory(item) {
        // The character finds objects in the game
        __classPrivateFieldGet(this, _GameCharacter_inventory, "f").add(item);
    }
    progressToNextLevel() {
        // The character progresses to the next level
        __classPrivateFieldSet(this, _GameCharacter_level, __classPrivateFieldGet(this, _GameCharacter_level, "f") + 1, "f");
    }
    moveForward(amount) {
        // The character moves around the environment
        __classPrivateFieldGet(this, _GameCharacter_location, "f")['z'] += amount;
    }
    status() {
        return (`Score: ${__classPrivateFieldGet(this, _GameCharacter_score, "f")}, ` +
            `Level: ${__classPrivateFieldGet(this, _GameCharacter_level, "f")}, ` +
            `Location: ${JSON.stringify(__classPrivateFieldGet(this, _GameCharacter_location, "f"))}\n` +
            `Inventory: ${JSON.stringify(Array.from(__classPrivateFieldGet(this, _GameCharacter_inventory, "f")))}`);
    }
    get memento() {
        'A `getter` for the characters attributes as a Memento';
        return new memento_1.default(__classPrivateFieldGet(this, _GameCharacter_score, "f"), new Set(__classPrivateFieldGet(this, _GameCharacter_inventory, "f")), __classPrivateFieldGet(this, _GameCharacter_level, "f"), Object.assign({}, __classPrivateFieldGet(this, _GameCharacter_location, "f")));
    }
    set memento(value) {
        __classPrivateFieldSet(this, _GameCharacter_score, value.score, "f");
        __classPrivateFieldSet(this, _GameCharacter_inventory, value.inventory, "f");
        __classPrivateFieldSet(this, _GameCharacter_level, value.level, "f");
        __classPrivateFieldSet(this, _GameCharacter_location, value.location, "f");
    }
}
_GameCharacter_score = new WeakMap(), _GameCharacter_inventory = new WeakMap(), _GameCharacter_level = new WeakMap(), _GameCharacter_location = new WeakMap();
exports.default = GameCharacter;
