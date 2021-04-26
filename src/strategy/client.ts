// The Strategy Pattern Example Use Case

class GameCharacter {
    // This is the context whose strategy will change

    #position: [number, number] = [0, 0]

    move(movementStyle: IMoveConstructor) {
        // The movement algorithm has been decided by the client
        new movementStyle().move(this.#position)
    }
}

interface IMoveConstructor {
    // A Constructor for the IMove
    new (): IMove
}

interface IMove {
    // The Move Strategy Interface
    move(position: [number, number]): void
}

class Walking implements IMove {
    // A concrete movement strategy for walking

    move(position: [number, number]) {
        position[0] += 1
        console.log(`I am Walking. New position = ${position}`)
    }
}

class Sprinting implements IMove {
    // A concrete movement strategy for sprinting

    move(position: [number, number]) {
        position[0] += 2
        console.log(`I am Running. New position = ${position}`)
    }
}

class Crawling implements IMove {
    // A concrete movement strategy for crawling

    move(position: [number, number]) {
        position[0] += 0.5
        console.log(`I am Crawling. New position = ${position} `)
    }
}

// The Client
const GAME_CHARACTER = new GameCharacter()

GAME_CHARACTER.move(Walking)
// Character sees the enemy
GAME_CHARACTER.move(Sprinting)
// Character finds a small cave to hide in
GAME_CHARACTER.move(Crawling)
