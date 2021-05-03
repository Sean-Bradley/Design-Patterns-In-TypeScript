// The Game API facade

import Reports from './reports'
import Wallets from './wallets'
import Users from './users'
import GameEngine, { GameState } from './game-engine'

export default class GameAPI {
    #wallets: Wallets
    #reports: Reports
    #users: Users
    #gameEngine: GameEngine

    constructor() {
        this.#wallets = new Wallets()
        this.#reports = new Reports()
        this.#users = new Users()
        this.#gameEngine = new GameEngine()
    }

    getBalance(userId: string): number {
        // Get a players balance
        return this.#wallets.getBalance(userId)
    }

    gameState(): GameState {
        // Get the current game state
        return this.#gameEngine.getGameState()
    }

    getHistory(): { [id: string]: [number, string] } {
        // get the game history
        return this.#reports.getHistory()
    }

    changePwd(userId: string, password: string): boolean {
        // change users password
        return this.#users.changePwd(userId, password)
    }

    submitEntry(userId: string, entry: number): boolean {
        // submit a bet
        return this.#gameEngine.submitEntry(userId, entry)
    }

    registerUser(value: { [id: string]: string }): string {
        // register a new user and returns the new id
        return this.#users.registerUser(value)
    }
}
