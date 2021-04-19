// The Game Engine
import Reports from './reports'
import Wallets from './wallets'

export default class GameEngine {

    private static instance: GameEngine
    private startTime: number = 0
    private clock: number = 0
    private entries: [string, number][] = []
    private gameOpen = true
    private reports = new Reports()
    private wallets = new Wallets()

    constructor() {
        if (GameEngine.instance) {
            return GameEngine.instance
        }
        this.startTime = Date.now()
        this.clock = 60
        GameEngine.instance = this
    }

    getGameState(): {} {
        //Get a snapshot of the current game state"
        const now = Date.now()
        let time_remaining = this.startTime - now + this.clock
        if (time_remaining < 0) {
            time_remaining = 0
        }
        this.gameOpen = false
        return {
            "clock": time_remaining,
            "game_open": this.gameOpen,
            "entries": this.entries
        }
    }

    submitEntry(user_id: string, entry: number): boolean {
        // Submit a new entry for the user in this game
        const now = Date.now()
        let time_remaining = this.startTime - now + this.clock
        if (time_remaining > 0) {
            if (this.wallets.getBalance(user_id) > 1) {
                if (this.wallets.adjustBalance(user_id, -1)) {
                    this.entries.push([user_id, entry])
                    this.reports.logEvent(`New entry '${entry}' submitted by '${user_id}'`)
                    return true
                }
                this.reports.logEvent(`Problem adjusting balance for '${user_id}'`)
                return false
            }
            this.reports.logEvent(`User Balance for '${user_id}' to low`)
            return false
        }
        this.reports.logEvent("Game Closed")
        return false
    }
}