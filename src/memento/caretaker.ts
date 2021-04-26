// The Save/Restore Game functionality

import GameCharacter from './game-character'
import Memento from './memento'

export default class CareTaker {
    // Guardian. Provides a narrow interface to the mementos

    #originator: GameCharacter
    #mementos: Memento[]

    constructor(originator: GameCharacter) {
        this.#originator = originator
        this.#mementos = []
    }

    save(): void {
        // Store a new Memento of the Characters current state
        console.log('CareTaker: Game Save')
        const memento = this.#originator.memento
        this.#mementos.push(memento)
    }

    restore(index: number): void {
        // Replace the Characters current attributes with the state
        // stored in the saved Memento
        console.log('CareTaker: Restoring Characters attributes from Memento')
        const memento = this.#mementos[index]
        this.#originator.memento = memento
    }
}
