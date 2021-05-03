// A dispenser of £10 notes

export default class Dispenser10 implements IDispenser {
    // Dispenses £10s if applicable, otherwise continues to next successor
    #successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        // Set the next successor
        this.#successor = successor
    }

    handle(amount: number): void {
        // Handle the dispensing of notes"
        if (amount >= 10) {
            const num = Math.floor(amount / 10)
            const remainder = amount % 10
            console.log(`Dispensing ${num} £10 note`)
            if (remainder !== 0) {
                (this.#successor as IDispenser).handle(remainder)
            }
        } else {
            (this.#successor as IDispenser).handle(amount)
        }
    }
}
