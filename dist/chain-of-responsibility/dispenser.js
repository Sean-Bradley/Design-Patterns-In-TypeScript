"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser {
    constructor() {
        this.successor = undefined;
        this.denomination = 0;
    }
    handle(amount) {
        // Handle the dispensing of notes
        if (amount >= this.denomination) {
            const num = Math.floor(amount / this.denomination);
            const remainder = amount % this.denomination;
            console.log(`Dispensing ${num} £${this.denomination} note`);
            if (remainder !== 0) {
                this.successor.handle(remainder);
            }
        }
        else {
            this.successor.handle(amount);
        }
    }
}
exports.default = Dispenser;
