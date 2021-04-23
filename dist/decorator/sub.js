"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Sub {
    constructor(val1, val2) {
        const left = val1.hasOwnProperty('value')
            ? val1.value
            : val1;
        const right = val2.hasOwnProperty('value')
            ? val2.value
            : val2;
        this.value = left - right;
    }
}
function Sub(val1, val2) {
    return new _Sub(val1, val2);
}
exports.default = Sub;
