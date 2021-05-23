// FactoryBSample Code

export interface IProductB {
    name: string
}

class ConcreteProduct implements IProductB {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductC'
    }
}

export class FactoryB {
    static getObject(some_property: string): IProductB {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA()
            } else if (some_property === 'b') {
                return new ConcreteProductB()
            } else if (some_property === 'c') {
                return new ConcreteProductC()
            } else {
                throw new Error('Class Not Found')
            }
        } catch (e) {
            console.log(e)
        }
        return new ConcreteProduct()
    }
}
