"use strict";
// A dispenser of £10 notes
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser10 {
    // constructor() {
    //     this.successor = undefined
    // }
    nextSuccessor(successor) {
        // Set the next successor
        this.successor = successor;
    }
    handle(amount) {
        //Handle the dispensing of notes"
        if (amount >= 10) {
            const num = Math.floor(amount / 10);
            const remainder = amount % 10;
            console.log(`Dispensing ${num} £10 note`);
            if (remainder !== 0) {
                this.successor.handle(remainder);
            }
        }
        else {
            this.successor.handle(amount);
        }
    }
}
exports.default = Dispenser10;
