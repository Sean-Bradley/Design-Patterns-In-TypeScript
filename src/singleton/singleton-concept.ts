// Singleton Concept Sample Code
export class Singleton {
    // The Singleton Class
    static instance: Singleton

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = new Singleton()
const OBJECT2 = new Singleton()

console.log(OBJECT1 === OBJECT2) // = true
