import { IValue } from './value'

class _Sub implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? (val1 as IValue).value
            : (val1 as number)
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? (val2 as IValue).value
            : (val2 as number)
        this.value = left - right
    }
}

export default function Sub(val1: IValue | number, val2: IValue | number): IValue {
    return new _Sub(val1, val2)
}
