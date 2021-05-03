// Singleton Concept Sample Code

export class Singleton {
    // The Singleton Class
    static instance: Singleton
    id: number

    constructor(id: number) {
        this.id = id
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

// The Client
// All uses of the singleton point to the same original object

const OBJECT1 = new Singleton(1) // setting its id property to 1
const OBJECT2 = new Singleton(2) // setting its id property to 2

console.log(OBJECT1 === OBJECT2) // = true
console.log(OBJECT1.id) // returns 1
console.log(OBJECT2.id) // returns 1
