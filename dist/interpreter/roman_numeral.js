"use strict";
// Roman Numeral Expression. This is a Non-Terminal Expression
class RomanNumeral {
    constructor(romanNumeral) {
        this.romanNumeral = romanNumeral;
        this.context = [romanNumeral, 0];
    }
    interpret() {
        // RomanNumeral1000.interpret(this.context)
        // RomanNumeral100.interpret(this.context)
        // RomanNumeral10.interpret(this.context)
        // RomanNumeral1.interpret(this.context)
        return new Numeral(this.context[1]).interpret();
    }
}
class RomanNumeral1 extends RomanNumeral {
    constructor() {
        super(...arguments);
        // Roman Numerals 1 - 9
        this.one = "I";
        this.four = "IV";
        this.five = "V";
        this.nine = "IX";
        this.multiplier = 1;
        // interpret(...args: any){
        //     const context = args[0]
        //     if (context[0].length === 0){
        //         return new Numeral(context[1]).interpret()
        //     }
        //     if( context[0][0: 2] === this.nine){
        //         context[1] += (9 * cls.multiplier)
        //         context[0] = context[0][2:]
        //     }else (if context[0][0] === cls.five){
        //         context[1] += (5 * cls.multiplier)
        //         context[0] = context[0][1:]
        //     }else if (context[0][0: 2] === cls.four){
        //         context[1] += + (4 * cls.multiplier)
        //         context[0] = context[0][2:]
        //     }
        //     while (context[0] && context[0][0] === cls.one){
        //         context[1] += (1 * cls.multiplier)
        //         context[0] = context[0][1:]
        //     }
        //     return new Numeral(context[1]).interpret()
        // }
    }
}
class RomanNumeral10 extends RomanNumeral1 {
    constructor() {
        super(...arguments);
        // Roman Numerals 10 - 99
        this.one = "X";
        this.four = "XL";
        this.five = "L";
        this.nine = "XC";
        this.multiplier = 10;
    }
}
class RomanNumeral100 extends RomanNumeral1 {
    constructor() {
        super(...arguments);
        // Roman Numerals 100 - 999
        this.one = "C";
        this.four = "CD";
        this.five = "D";
        this.nine = "CM";
        this.multiplier = 100;
    }
}
class RomanNumeral1000 extends RomanNumeral1 {
    constructor() {
        super(...arguments);
        // Roman Numerals 1000 - 3999
        this.one = "M";
        this.four = "";
        this.five = "";
        this.nine = "";
        this.multiplier = 1000;
    }
}
