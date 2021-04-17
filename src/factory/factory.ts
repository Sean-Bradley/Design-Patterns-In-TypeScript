//The Factory Concept

interface IProduct {
    //A Hypothetical Class Interface (Product)"

    name: String;

    //An abstract interface method
    create_object(): IProduct;
}

class ConcreteProductA implements IProduct {
    //A Concrete Class that implements the IProduct interface
    name: String;
    constructor() {
        this.name = "ConcreteProductA"
    }

    create_object() {
        return this
    }
}

class ConcreteProductB implements IProduct {
    //A Concrete Class that implements the IProduct interface

    name: String;
    constructor() {
        this.name = "ConcreteProductB"
    }

    create_object() {
        return this
    }
}

class ConcreteProductC implements IProduct {
    //A Concrete Class that implements the IProduct interface

    name: String;
    constructor() {
        this.name = "ConcreteProductC"
    }

    create_object() {
        return this
    }
}

class Creator {
    // A static method to get a concrete product
    static create_object(some_property: string): IProduct {
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
const PRODUCT = Creator.create_object('b')
console.log(PRODUCT.name)