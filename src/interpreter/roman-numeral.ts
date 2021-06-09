// Roman Numeral Expression. This is a Non-Terminal Expression
import IAbstractExpression from "./iabstract-expression"
import Numeral from './numeral'

export default class RomanNumeral implements IAbstractExpression {
    // Non Terminal expression

    romanNumeral: string
    context: [string, number]

    constructor(romanNumeral: string) {
        this.romanNumeral = romanNumeral
        this.context = [romanNumeral, 0]
    }

    interpret(): number {
        RomanNumeral1000.interpret(this.context)
        RomanNumeral100.interpret(this.context)
        RomanNumeral10.interpret(this.context)
        RomanNumeral1.interpret(this.context)
        return new Numeral(this.context[1]).interpret()
    }
}

class RomanNumeral1 extends RomanNumeral {
    // Roman Numerals 1 - 9
    static one = 'I'
    static four = 'IV'
    static five = 'V'
    static nine = 'IX'
    static multiplier = 1

    static interpret(context: [string, number]) {
        if (context[0].length === 0) {
            return new Numeral(context[1]).interpret()
        }

        if (context[0].substring(0, 2) === this.nine) {
            context[1] += 9 * this.multiplier
            context[0] = context[0].substring(2)
        } else if (context[0].substring(0, 1) === this.five) {
            context[1] += 5 * this.multiplier
            context[0] = context[0].substring(1)
        } else if (context[0].substring(0, 2) === this.four) {
            context[1] += +(4 * this.multiplier)
            context[0] = context[0].substring(2)
        }
        while (context[0].length > 0 && context[0][0] === this.one) {
            context[1] += 1 * this.multiplier
            context[0] = context[0].substring(1)
        }
        return new Numeral(context[1]).interpret()
    }
}

class RomanNumeral10 extends RomanNumeral1 {
    // Roman Numerals 10 - 99
    static one = 'X'
    static four = 'XL'
    static five = 'L'
    static nine = 'XC'
    static multiplier = 10
}

class RomanNumeral100 extends RomanNumeral1 {
    // Roman Numerals 100 - 999
    static one = 'C'
    static four = 'CD'
    static five = 'D'
    static nine = 'CM'
    static multiplier = 100
}

class RomanNumeral1000 extends RomanNumeral1 {
    // Roman Numerals 1000 - 3999
    static one = 'M'
    static four = ''
    static five = ''
    static nine = ''
    static multiplier = 1000
}
