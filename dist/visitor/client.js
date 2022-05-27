"use strict";
// The Visitor Pattern Use Case Example
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
var _Car_parts;
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_car_part_1 = require("./abstract-car-part");
class CarBody extends abstract_car_part_1.default {
}
class Engine extends abstract_car_part_1.default {
}
class Wheel extends abstract_car_part_1.default {
}
class Car extends abstract_car_part_1.default {
    constructor(name) {
        super(name);
        // A Car with parts
        _Car_parts.set(this, void 0);
        __classPrivateFieldSet(this, _Car_parts, [
            new CarBody('Utility Body', 'ABC-123-21', 1001),
            new Engine('V8 engine', 'DEF-456-21', 2555),
            new Wheel('FrontLeft', 'GHI-789FL-21', 136),
            new Wheel('FrontRight', 'GHI-789FR-21', 136),
            new Wheel('BackLeft', 'GHI-789BL-21', 152),
            new Wheel('BackRight', 'GHI-789BR-21', 152),
        ], "f");
    }
    accept(visitor) {
        __classPrivateFieldGet(this, _Car_parts, "f").forEach((part) => {
            part.accept(visitor);
        });
        visitor.visit(this);
    }
}
_Car_parts = new WeakMap();
class PrintPartsVisitor {
    // Print out the part name and sku
    visit(abstractCarPart) {
        if (abstractCarPart.sku !== undefined) {
            console.log(`${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`);
        }
    }
}
class TotalPriceVisitor {
    constructor() {
        // Print out the total cost of the parts in the car
        this.totalPrice = 0;
    }
    visit(abstractCarPart) {
        if (abstractCarPart.price !== undefined) {
            this.totalPrice += abstractCarPart.price;
        }
    }
}
// The Client
const CAR = new Car('DeLorean');
// Print out the part name and sku using the PrintPartsVisitor
CAR.accept(new PrintPartsVisitor());
// Calculate the total prince of the parts using the TotalPriceVisitor
const TOTAL_PRICE_VISITOR = new TotalPriceVisitor();
CAR.accept(TOTAL_PRICE_VISITOR);
console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`);
