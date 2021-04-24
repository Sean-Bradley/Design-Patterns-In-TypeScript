// The Game API facade

import Reports from './reports'
import Wallets from './wallets'
import Users from './users'
import GameEngine, { GameState } from './game-engine'

export default class GameAPI {
    private wallets: Wallets
    private reports: Reports
    private users: Users
    private gameEngine: GameEngine

    constructor() {
        this.wallets = new Wallets()
        this.reports = new Reports()
        this.users = new Users()
        this.gameEngine = new GameEngine()
    }

    getBalance(user_id: string): number {
        // Get a players balance
        return this.wallets.getBalance(user_id)
    }

    gameState(): GameState {
        // Get the current game state
        return this.gameEngine.getGameState()
    }

    getHistory(): { [id: string]: [number, string] } {
        // get the game history
        return this.reports.getHistory()
    }

    changePwd(user_id: string, password: string): boolean {
        // change users password
        return this.users.changePwd(user_id, password)
    }

    submitEntry(user_id: string, entry: number): boolean {
        // submit a bet
        return this.gameEngine.submitEntry(user_id, entry)
    }

    registerUser(value: { [id: string]: string }): string {
        // register a new user and returns the new id
        return this.users.registerUser(value)
    }
}
