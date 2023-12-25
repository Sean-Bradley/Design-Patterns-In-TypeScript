"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flyweight_1 = require("./flyweight");
class FlyweightFactory {
    static getFlyweight(code) {
        // A static method to get a flyweight based on a code
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new flyweight_1.default(code);
        }
        return FlyweightFactory.flyweights[code];
    }
    static getCount() {
        // Return the number of flyweights in the cache
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}
// Creating the FlyweightFactory as a static class
FlyweightFactory.flyweights = {};
exports.default = FlyweightFactory;
