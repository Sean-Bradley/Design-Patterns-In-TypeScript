"use strict";
// Abstract Factory Concept Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
const factory_a_1 = require("./factory-a");
const factory_b_1 = require("./factory-b");
class AbstractFactory {
    // The Abstract Factory Concrete Class
    static createObject(factory) {
        try {
            if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
                return factory_a_1.default.getObject(factory[1]);
            }
            if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                return factory_b_1.default.getObject(factory[1]);
            }
            throw new Error('No Factory Found');
        }
        catch (e) {
            console.log(e);
        }
        return null;
    }
}
// The Client
let PRODUCT = AbstractFactory.createObject('ab');
console.log(PRODUCT);
PRODUCT = AbstractFactory.createObject('bc');
console.log(PRODUCT);
