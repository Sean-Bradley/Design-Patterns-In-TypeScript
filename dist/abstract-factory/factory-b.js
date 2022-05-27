"use strict";
// FactoryBSample Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductC';
    }
}
class FactoryB {
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
exports.FactoryB = FactoryB;
