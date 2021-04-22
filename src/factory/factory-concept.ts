//The Factory Concept

module FactoryConcept {

    interface IProduct {
        name: String
        createObject(): this
    }

    class ConcreteProductA implements IProduct {

        name: String

        constructor() {
            this.name = "ConcreteProductA"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductB implements IProduct {

        name: String

        constructor() {
            this.name = "ConcreteProductB"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductC implements IProduct {

        name: String

        constructor() {
            this.name = "ConcreteProductC"
        }

        createObject() {
            return this
        }
    }

    class Creator {
        static createObject(someProperty: string): IProduct {
            if (someProperty === 'a') {
                return new ConcreteProductA()
            } else if (someProperty === 'b') {
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