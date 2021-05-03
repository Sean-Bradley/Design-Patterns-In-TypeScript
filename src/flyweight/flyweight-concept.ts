// The Flyweight Concept

interface IFlyweight {
    code: number
}

class Flyweight implements IFlyweight {
    // The Concrete Flyweight
    code: number
    constructor(code: number) {
        this.code = code
    }
}

class FlyweightFactory {
    // Creating the FlyweightFactory as a static class

    static flyweights: { [id: number]: Flyweight } = {}

    static getFlyweight(code: number): Flyweight {
        // A static method to get a flyweight based on a code
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code)
        }
        return FlyweightFactory.flyweights[code]
    }

    static getCount(): number {
        // Return the number of flyweights in the cache
        return Object.keys(FlyweightFactory.flyweights).length
    }
}

class AppContext {
    // An example context that holds references to the flyweights in a
    // particular order and converts the code to an ascii letter
    private codes: number[] = []

    constructor(codes: string) {
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i))
        }
    }

    output() {
        // The context specific output that uses flyweights
        let ret = ''
        this.codes.forEach((c) => {
            ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code)
        })

        return ret
    }
}

// The Client
const APP_CONTEXT = new AppContext('abracadabra')

// use flyweights in a context
console.log(APP_CONTEXT.output())

console.log(`abracadabra has ${'abracadabra'.length} letters`)
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`)
