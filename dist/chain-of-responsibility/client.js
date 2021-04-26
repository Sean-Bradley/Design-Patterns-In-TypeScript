"use strict";
// An ATM Dispenser that dispenses denominations of notes
Object.defineProperty(exports, "__esModule", { value: true });
const atm_dispenser_chain_1 = require("./atm-dispenser-chain");
const ATM = new atm_dispenser_chain_1.default();
console.log('Enter amount to withdrawal : ');
process.stdin.on('data', (data) => {
    if (parseInt(data)) {
        const amount = parseInt(data);
        if (amount < 10 || amount % 10 != 0) {
            console.log('Amount should be positive and in multiple of 10s.');
        }
        else {
            // process the request
            ATM.chain1.handle(amount);
            console.log('Now go spoil yourself');
            process.exit();
        }
    }
    else {
        console.log('Please enter a number.');
    }
});
