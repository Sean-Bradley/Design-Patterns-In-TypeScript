"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Cat = void 0;
const animal_1 = require("./animal");
class Cat extends animal_1.default {
    constructor(name, age) {
        super(name, age);
    }
}
exports.Cat = Cat;
class Dog extends animal_1.default {
}
exports.Dog = Dog;
