import Animal from './animal'

export class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

export class Dog extends Animal {}