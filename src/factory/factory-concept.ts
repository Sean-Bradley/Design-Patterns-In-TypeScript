//The Factory Concept
module FactoryConcept {

    interface Product {
        name: String;
        createObject(): this;
    }

    class ConcreteProductA implements Product {

        name: String;

        constructor() {
            this.name = "ConcreteProductA"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductB implements Product {

        name: String;

        constructor() {
            this.name = "ConcreteProductB"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductC implements Product {

        name: String;

        constructor() {
            this.name = "ConcreteProductC"
        }

        createObject() {
            return this
        }
    }

    class Creator {
        static createObject(some_property: string): Product {
            if (some_property === 'a') {
                return new ConcreteProductA()
            } else if (some_property === 'b') {
                return new ConcreteProductB()
            } else {
                return new ConcreteProductC()
            }
        }
    }

    // # The Client
    const PRODUCT = Creator.createObject('b')
    console.log(PRODUCT.name)
}