"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Sub {
    constructor(val1, val2) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? val1.value
            : val1;
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? val2.value
            : val2;
        this.value = left - right;
    }
}
function Sub(val1, val2) {
    return new _Sub(val1, val2);
}
exports.default = Sub;
