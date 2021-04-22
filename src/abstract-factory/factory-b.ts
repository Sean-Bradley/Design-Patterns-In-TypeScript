// FactoryB Sample Code
export module FactoryB {

    interface Product {
        name: String
        createObject(): Product
    }

    class ConcreteProductA implements Product {
        name: String

        constructor() {
            this.name = "FactoryB:ConcreteProductA"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductB implements Product {
        name: String

        constructor() {
            this.name = "FactoryB:ConcreteProductB"
        }

        createObject() {
            return this
        }
    }

    class ConcreteProductC implements Product {
        name: String

        constructor() {
            this.name = "FactoryB:ConcreteProductC"
        }

        createObject() {
            return this
        }
    }

    export function getObject(some_property: string) {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA()
            } else if (some_property === 'b') {
                return new ConcreteProductB()
            } else if (some_property === 'c') {
                return new ConcreteProductC()
            } else {
                throw new Error('Class Not Found');
            }
        } catch (e) {
            console.log(e)
        }
        return null
    }
}