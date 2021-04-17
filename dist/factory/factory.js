"use strict";
//The Factory Concept
class ConcreteProductA {
    constructor() {
        this.name = "ConcreteProductA";
    }
    create_object() {
        return this;
    }
}
class ConcreteProductB {
    constructor() {
        this.name = "ConcreteProductB";
    }
    create_object() {
        return this;
    }
}
class ConcreteProductC {
    constructor() {
        this.name = "ConcreteProductC";
    }
    create_object() {
        return this;
    }
}
class Creator {
    // A static method to get a concrete product
    static create_object(some_property) {
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
const PRODUCT = Creator.create_object('b');
console.log(PRODUCT.name);
