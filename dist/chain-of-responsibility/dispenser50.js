"use strict";
// A dispenser of £20 notes
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser50 {
    // constructor() {
    //     this.successor = undefined
    // }
    nextSuccessor(successor) {
        // Set the next successor
        this.successor = successor;
    }
    handle(amount) {
        //Handle the dispensing of notes"
        if (amount >= 50) {
            const num = Math.floor(amount / 50);
            const remainder = amount % 50;
            console.log(`Dispensing ${num} £50 note`);
            if (remainder !== 0) {
                this.successor.handle(remainder);
            }
        }
        else {
            this.successor.handle(amount);
        }
    }
}
exports.default = Dispenser50;
