"use strict";
//The Factory Concept
class ConcreteProductA {
    constructor() {
        this.name = "ConcreteProductA";
    }
    createObject() {
        return this;
    }
}
class ConcreteProductB {
    constructor() {
        this.name = "ConcreteProductB";
    }
    createObject() {
        return this;
    }
}
class ConcreteProductC {
    constructor() {
        this.name = "ConcreteProductC";
    }
    createObject() {
        return this;
    }
}
class Creator {
    static createObject(some_property) {
        if (some_property === 'a') {
            return new ConcreteProductA();
        }
        else if (some_property === 'b') {
            return new ConcreteProductB();
        }
        else {
            return new ConcreteProductC();
        }
    }
}
// # The Client
const PRODUCT = Creator.createObject('b');
console.log(PRODUCT.name);
