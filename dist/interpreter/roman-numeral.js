"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeral_1 = require("./numeral");
class RomanNumeral {
    constructor(romanNumeral) {
        this.romanNumeral = romanNumeral;
        this.context = [romanNumeral, 0];
    }
    interpret() {
        RomanNumeral1000.interpret(this.context);
        RomanNumeral100.interpret(this.context);
        RomanNumeral10.interpret(this.context);
        RomanNumeral1.interpret(this.context);
        return new numeral_1.default(this.context[1]).interpret();
    }
}
exports.default = RomanNumeral;
class RomanNumeral1 extends RomanNumeral {
    static interpret(context) {
        if (context[0].length === 0) {
            return new numeral_1.default(context[1]).interpret();
        }
        if (context[0].substring(0, 2) === this.nine) {
            context[1] += 9 * this.multiplier;
            context[0] = context[0].substring(2);
        }
        else if (context[0].substring(0, 1) === this.five) {
            context[1] += 5 * this.multiplier;
            context[0] = context[0].substring(1);
        }
        else if (context[0].substring(0, 2) === this.four) {
            context[1] += +(4 * this.multiplier);
            context[0] = context[0].substring(2);
        }
        while (context[0].length > 0 && context[0][0] === this.one) {
            context[1] += 1 * this.multiplier;
            context[0] = context[0].substring(1);
        }
        return new numeral_1.default(context[1]).interpret();
    }
}
// Roman Numerals 1 - 9
RomanNumeral1.one = 'I';
RomanNumeral1.four = 'IV';
RomanNumeral1.five = 'V';
RomanNumeral1.nine = 'IX';
RomanNumeral1.multiplier = 1;
class RomanNumeral10 extends RomanNumeral1 {
}
// Roman Numerals 10 - 99
RomanNumeral10.one = 'X';
RomanNumeral10.four = 'XL';
RomanNumeral10.five = 'L';
RomanNumeral10.nine = 'XC';
RomanNumeral10.multiplier = 10;
class RomanNumeral100 extends RomanNumeral1 {
}
// Roman Numerals 100 - 999
RomanNumeral100.one = 'C';
RomanNumeral100.four = 'CD';
RomanNumeral100.five = 'D';
RomanNumeral100.nine = 'CM';
RomanNumeral100.multiplier = 100;
class RomanNumeral1000 extends RomanNumeral1 {
}
// Roman Numerals 1000 - 3999
RomanNumeral1000.one = 'M';
RomanNumeral1000.four = '';
RomanNumeral1000.five = '';
RomanNumeral1000.nine = '';
RomanNumeral1000.multiplier = 1000;
