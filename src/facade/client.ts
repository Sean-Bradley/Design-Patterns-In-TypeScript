// The Facade Example Use Case
import GameAPI from './game-api'

const GAME_API = new GameAPI()

const USER = { "user_name": "sean" }
const USER_ID = GAME_API.registerUser(USER)

//time.sleep(1)

GAME_API.submitEntry(USER_ID, 5)

//time.sleep(1)

console.log()
console.log("---- Gamestate Snapshot ----")
console.log(GAME_API.gameState())

//time.sleep(1)

const HISTORY = GAME_API.getHistory()

console.log()
console.log("---- Reports History ----")
Object.keys(HISTORY).forEach(([key]) => {
    console.log(`${key} : ${HISTORY[key][0]} : ${HISTORY[key][1]}`)
});

console.log()
console.log("---- Gamestate Snapshot ----")
console.log(GAME_API.gameState())