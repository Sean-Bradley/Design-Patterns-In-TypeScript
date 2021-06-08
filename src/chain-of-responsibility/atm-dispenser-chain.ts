// The ATM Dispenser Chain

import Dispenser10 from './dispenser10'
import Dispenser20 from './dispenser20'
import Dispenser50 from './dispenser50'

export default class ATMDispenserChain {
    chain1: IDispenser
    chain2: IDispenser
    chain3: IDispenser

    constructor() {
        // initializing the successors chain
        this.chain1 = new Dispenser50()
        this.chain2 = new Dispenser20()
        this.chain3 = new Dispenser10()
        // Setting a default successor chain that will process the 50s first,
        // the 20s second and the 10s last.The successor chain will be
        // recalculated dynamically at runtime.
        this.chain1.nextSuccessor(this.chain2)
        this.chain2.nextSuccessor(this.chain3)
    }
}
