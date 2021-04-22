"use strict";
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
// The Visitor Pattern Use Case Example
var VisitorUseCase;
(function (VisitorUseCase) {
    var _name, _sku, _price, _parts;
    class AbstractCarPart {
        constructor(name, sku, price) {
            // The Abstract Car Part
            _name.set(this, void 0);
            _sku.set(this, void 0);
            _price.set(this, void 0);
            __classPrivateFieldSet(this, _name, name);
            __classPrivateFieldSet(this, _sku, sku);
            __classPrivateFieldSet(this, _price, price);
        }
        get name() {
            return __classPrivateFieldGet(this, _name);
        }
        set name(value) {
            __classPrivateFieldSet(this, _name, value);
        }
        get sku() {
            return __classPrivateFieldGet(this, _sku);
        }
        set sku(value) {
            __classPrivateFieldSet(this, _sku, value);
        }
        get price() {
            return __classPrivateFieldGet(this, _price);
        }
        set price(value) {
            __classPrivateFieldSet(this, _price, value);
        }
        accept(visitor) {
            visitor.visit(this);
        }
    }
    _name = new WeakMap(), _sku = new WeakMap(), _price = new WeakMap();
    class Body extends AbstractCarPart {
    }
    class Engine extends AbstractCarPart {
    }
    class Wheel extends AbstractCarPart {
    }
    class Car extends AbstractCarPart {
        constructor(name) {
            super(name);
            // A Car with parts
            _parts.set(this, void 0);
            __classPrivateFieldSet(this, _parts, [
                new Body("Utility Body", "ABC-123-21", 1001),
                new Engine("V8 engine", "DEF-456-21", 2555),
                new Wheel("FrontLeft", "GHI-789FL-21", 136),
                new Wheel("FrontRight", "GHI-789FR-21", 136),
                new Wheel("BackLeft", "GHI-789BL-21", 152),
                new Wheel("BackRight", "GHI-789BR-21", 152),
            ]);
        }
        accept(visitor) {
            __classPrivateFieldGet(this, _parts).forEach(part => {
                part.accept(visitor);
            });
            visitor.visit(this);
        }
    }
    _parts = new WeakMap();
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
            return this.totalPrice;
        }
    }
    // The Client
    const CAR = new Car("DeLorean");
    // Print out the part name and sku using the PrintPartsVisitor
    CAR.accept(new PrintPartsVisitor());
    // Calculate the total prince of the parts using the TotalPriceVisitor
    const TOTAL_PRICE_VISITOR = new TotalPriceVisitor();
    CAR.accept(TOTAL_PRICE_VISITOR);
    console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`);
})(VisitorUseCase || (VisitorUseCase = {}));
