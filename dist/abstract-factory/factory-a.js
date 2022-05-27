"use strict";
// FactoryA Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryA = void 0;
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA:ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA:ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryA:ConcreteProductC';
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
        return new ConcreteProduct();
    }
}
exports.FactoryA = FactoryA;
