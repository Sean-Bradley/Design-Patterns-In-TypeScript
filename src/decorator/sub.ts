class _Sub implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = val1.hasOwnProperty('value') ? (val1 as IValue).value : val1 as number
        const right = val2.hasOwnProperty('value') ? (val2 as IValue).value : val2 as number
        this.value = left - right
    }
}

export default function Sub(val1: IValue | number, val2: IValue | number) : IValue{
    return new _Sub(val1, val2)
}