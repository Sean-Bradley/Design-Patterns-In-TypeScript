"use strict";
// The Factory Concept
class ConcreteProduct {
    constructor() {
        this.name = '';
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductA';
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductB';
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'ConcreteProductC';
    }
}
class Creator {
    static createObject(someProperty) {
        if (someProperty === 'a') {
            return new ConcreteProductA();
        }
        else if (someProperty === 'b') {
            return new ConcreteProductB();
        }
        else {
            return new ConcreteProductC();
        }
    }
}
// The Client
const PRODUCT = Creator.createObject('b');
console.log(PRODUCT.name);
