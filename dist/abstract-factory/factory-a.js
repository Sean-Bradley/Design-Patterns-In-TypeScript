"use strict";
// FactoryA Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
class ConcreteProductA {
    constructor() {
        this.name = "FactoryA:ConcreteProductA";
    }
    createObject() {
        return this;
    }
}
class ConcreteProductB {
    constructor() {
        this.name = "FactoryA:ConcreteProductB";
    }
    createObject() {
        return this;
    }
}
class ConcreteProductC {
    constructor() {
        this.name = "FactoryA:ConcreteProductC";
    }
    createObject() {
        return this;
    }
}
class FactoryA {
    static getObject(some_property) {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA();
            }
            else if (some_property === 'b') {
                return new ConcreteProductB();
            }
            else if (some_property === 'c') {
                return new ConcreteProductC();
            }
            else {
                throw new Error('Class Not Found');
            }
        }
        catch (e) {
            console.log(e);
        }
        return null;
    }
}
exports.default = FactoryA;
