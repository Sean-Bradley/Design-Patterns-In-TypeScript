// A Leaderboard Singleton Class

export default class Leaderboard {

    private static instance: Leaderboard
    private table: { [id: number]: string } = {}

    constructor() {
        if (Leaderboard.instance) {
            return Leaderboard.instance
        }
        Leaderboard.instance = this
    }

    public addWinner(position: number, name: string) {
        this.table[position] = name
    }

    public print() {
        console.log("-----------Leaderboard-----------")
        for (let key in this.table) {
            console.log(`|\t${key}\t|\t${this.table[key]}\t|`)
        }
        console.log()
    }
}