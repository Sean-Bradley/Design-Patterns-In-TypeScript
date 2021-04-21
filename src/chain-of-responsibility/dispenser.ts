interface Dispenser {
    nextSuccessor(successor: Dispenser): void
    handle(amount:number): void
}