// The Game Character whose state changes

import Memento from "./memento"

export default class GameCharacter {
    #score: number
    #inventory: Set<string>
    #level: number
    #location: { "x": number, "y": number, "z": number }

    constructor() {
        this.#score = 0
        this.#inventory = new Set()
        this.#level = 0
        this.#location = { "x": 0, "y": 0, "z": 0 }
    }

    public get score(): number {
        // A getter for the score"
        return this.#score
    }

    registerKill() {
        // The character kills its enemies as it progresses
        this.#score += 100
    }

    addInventory(item: string) {
        // The character finds objects in the game
        this.#inventory.add(item)
    }

    progressToNextLevel() {
        // The character progresses to the next level
        this.#level = this.#level + 1
    }

    moveForward(amount: number) {
        // The character moves around the environment
        this.#location["z"] += amount
    }

    status() {
        return (
            `Score: ${this.#score}, ` +
            `Level: ${this.#level}, ` +
            `Location: ${JSON.stringify(this.#location)}\n` +
            `Inventory: ${JSON.stringify(Array.from(this.#inventory))}\n`
        )
    }

    public get memento(): Memento {
        "A `getter` for the characters attributes as a Memento"
        return new Memento(
            this.#score,
            new Set(this.#inventory),
            this.#level,
            Object.assign({}, this.#location)
        )
    }

    public set memento(value: Memento) {
        this.#score = value.score
        this.#inventory = value.inventory
        this.#level = value.level
        this.#location = value.location
    }
}