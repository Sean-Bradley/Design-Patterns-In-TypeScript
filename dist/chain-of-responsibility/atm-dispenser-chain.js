"use strict";
// The ATM Dispenser Chain
Object.defineProperty(exports, "__esModule", { value: true });
const dispenser10_1 = require("./dispenser10");
const dispenser20_1 = require("./dispenser20");
const dispenser50_1 = require("./dispenser50");
class ATMDispenserChain {
    constructor() {
        // initializing the successors chain
        this.chain1 = new dispenser50_1.default();
        this.chain2 = new dispenser20_1.default();
        this.chain3 = new dispenser10_1.default();
        // Setting a default successor chain that will process the 50s first,
        // the 20s second and the 10s last.The successor chain will be
        // recalculated dynamically at runtime.
        this.chain1.nextSuccessor(this.chain2);
        this.chain2.nextSuccessor(this.chain3);
    }
}
exports.default = ATMDispenserChain;
