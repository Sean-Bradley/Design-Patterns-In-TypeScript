// The Iterator Pattern Concept

class NumberWheel {
    // The concrete iterator (iterable)

    index: number

    constructor() {
        this.index = 0
    }

    next() {
        // Return a new number next in the wheel
        this.index = this.index + 1
        return (this.index * 2) % 11
    }
}

// The Client
const NUMBERWHEEL = new NumberWheel()

for (let i = 0; i < 22; i++) {
    process.stdout.write(NUMBERWHEEL.next() + ' ')
}
