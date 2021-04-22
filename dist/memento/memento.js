"use strict";
// A Memento to store character attributes
Object.defineProperty(exports, "__esModule", { value: true });
class Memento {
    constructor(score, inventory, level, location) {
        this.score = score;
        this.inventory = inventory;
        this.level = level;
        this.location = location;
    }
}
exports.default = Memento;
