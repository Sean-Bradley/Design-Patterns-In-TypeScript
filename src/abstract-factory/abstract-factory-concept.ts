// Abstract Factory Concept Sample Code

import FactoryA from './factory-a'
import FactoryB from './factory-b'

interface AbstractFactory {
    createObject(factory: string): any;
}

class AbstractFactory implements AbstractFactory {
    // The Abstract Factory Concrete Class
    static createObject(factory: string): any {
        try {
            if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
                return FactoryA.getObject(factory[1])
            }
            if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                return FactoryB.getObject(factory[1])
            }
            throw new Error('No Factory Found');
        } catch (e) {
            console.log(e)
        }
        return null
    }
}


// The Client
let PRODUCT = AbstractFactory.createObject('ab')
console.log(PRODUCT)

PRODUCT = AbstractFactory.createObject('bc')
console.log(PRODUCT)