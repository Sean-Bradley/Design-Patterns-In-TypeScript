"use strict";
// A Column that is used in a Row
Object.defineProperty(exports, "__esModule", { value: true });
const flyweight_factory_1 = require("./flyweight-factory");
class Column {
    constructor() {
        // The columns are the contexts.
        // They will share the Flyweights via the FlyweightsFactory.
        // `data`, `width` and `justify` are extrinsic values. They are outside
        // of the flyweights.
        this.data = '';
        this.width = 10;
        this.justify = 0;
    }
    getData() {
        // Get the flyweight value from the factory, and apply the extrinsic values
        const codes = [];
        for (let i = 0; i < this.data.length; i++) {
            codes.push(this.data.charCodeAt(i));
        }
        let ret = '';
        Array.from(codes).forEach((c) => {
            ret = ret + String.fromCharCode(flyweight_factory_1.default.getFlyweight(c).code);
        });
        switch (this.justify) {
            case 1:
                ret = this.leftAlign(this.width, ret, ' ');
                break;
            case 2:
                ret = this.rightAlign(this.width, ret, ' ');
                break;
            default:
                ret = this.center(this.width, ret, ' ');
        }
        return ret;
    }
    center(width, string, padding) {
        return width <= string.length
            ? string
            : this.centerAlternate(width, padding + string, padding);
    }
    centerAlternate(width, string, padding) {
        return width <= string.length
            ? string
            : this.center(width, string + padding, padding);
    }
    leftAlign(width, string, padding) {
        return width <= string.length
            ? string
            : this.leftAlign(width, string + padding, padding);
    }
    rightAlign(width, string, padding) {
        return width <= string.length
            ? string
            : this.rightAlign(width, padding + string, padding);
    }
}
exports.default = Column;
