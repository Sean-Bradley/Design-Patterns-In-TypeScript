// A Memento to store character attributes

export default class Memento {
    score: number
    inventory: Set<string>
    level: number
    location: { x: number; y: number; z: number }

    constructor(
        score: number,
        inventory: Set<string>,
        level: number,
        location: { x: number; y: number; z: number }
    ) {
        this.score = score
        this.inventory = inventory
        this.level = level
        this.location = location
    }
}
