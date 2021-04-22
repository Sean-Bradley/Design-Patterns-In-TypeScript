"use strict";
//The Factory Concept
var FactoryConcept;
(function (FactoryConcept) {
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
    // # The Client
    const PRODUCT = Creator.createObject('b');
    console.log(PRODUCT.name);
})(FactoryConcept || (FactoryConcept = {}));
