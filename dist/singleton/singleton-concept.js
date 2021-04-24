"use strict";
// Singleton Concept Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}
exports.Singleton = Singleton;
// The Client
// All uses of the singleton point to the same original object
const OBJECT1 = new Singleton();
const OBJECT2 = new Singleton();
console.log(OBJECT1 === OBJECT2); // = true
