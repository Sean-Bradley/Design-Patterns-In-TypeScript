// A dispenser of £20 notes

export default class Dispenser50 implements Dispenser {
    // Dispenses £10s if applicable, otherwise continues to next successor
    successor: Dispenser | undefined

    // constructor() {
    //     this.successor = undefined
    // }

    nextSuccessor(successor: Dispenser): void {
        // Set the next successor
        this.successor = successor
    }

    handle(amount: number) {
        //Handle the dispensing of notes"
        if (amount >= 50) {
            const num = Math.floor(amount / 50)
            const remainder = amount % 50
            console.log(`Dispensing ${num} £50 note`)
            if (remainder !== 0) {
                (this.successor as Dispenser).handle(remainder)
            }
        } else {
            (this.successor as Dispenser).handle(amount)
        }
    }
}