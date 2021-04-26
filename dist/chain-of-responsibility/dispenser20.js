"use strict";
// A dispenser of £20 notes
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser20 {
    nextSuccessor(successor) {
        // Set the next successor
        this.successor = successor;
    }
    handle(amount) {
        // Handle the dispensing of notes"
        if (amount >= 20) {
            const num = Math.floor(amount / 20);
            const remainder = amount % 20;
            console.log(`Dispensing ${num} £20 note`);
            if (remainder !== 0) {
                this.successor.handle(remainder);
            }
        }
        else {
            this.successor.handle(amount);
        }
    }
}
exports.default = Dispenser20;
