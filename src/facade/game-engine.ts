// The Game Engine

import Reports from './reports'
import Wallets from './wallets'

export type GameState = {
    clock: number
    gameOpen: boolean
    entries: [string, number][]
}

export default class GameEngine {
    static instance: GameEngine
    #startTime = 0
    #clock = 0
    #entries: [string, number][] = []
    #gameOpen = true
    #reports = new Reports()
    #wallets = new Wallets()

    constructor() {
        if (GameEngine.instance) {
            return GameEngine.instance
        }
        this.#startTime = Math.floor(Date.now() / 1000)
        this.#clock = 60
        GameEngine.instance = this
    }

    getGameState(): GameState {
        // Get a snapshot of the current game state
        const now = Math.floor(Date.now() / 1000)
        let timeRemaining = this.#startTime - now + this.#clock
        console.log('getGameState ' + timeRemaining)
        if (timeRemaining < 0) {
            timeRemaining = 0
        }
        this.#gameOpen = false
        return {
            clock: timeRemaining,
            gameOpen: this.#gameOpen,
            entries: this.#entries,
        } as GameState
    }

    submitEntry(userId: string, entry: number): boolean {
        // Submit a new entry for the user in this game
        const now = Math.floor(Date.now() / 1000)
        const time_remaining = this.#startTime - now + this.#clock
        if (time_remaining > 0) {
            if (this.#wallets.getBalance(userId) > 1) {
                if (this.#wallets.adjustBalance(userId, -1)) {
                    this.#entries.push([userId, entry])
                    this.#reports.logEvent(
                        `New entry '${entry}' submitted by '${userId}'`
                    )
                    return true
                }
                this.#reports.logEvent(`Problem adjusting balance for '${userId}'`)
                return false
            }
            this.#reports.logEvent(`User Balance for '${userId}' to low`)
            return false
        }
        this.#reports.logEvent('Game Closed')
        return false
    }
}
