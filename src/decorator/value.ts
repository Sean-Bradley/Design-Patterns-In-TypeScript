export interface IValue {
    value: number
}

class _Value implements IValue {
    value: number
    constructor(value: number) {
        this.value = value
    }
}

export default function Value(value: number): IValue {
    return new _Value(value)
}
