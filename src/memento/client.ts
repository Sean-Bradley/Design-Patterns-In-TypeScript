// Memento example Use Case

import CareTaker from './caretaker'
import GameCharacter from './game-character'

const GAME_CHARACTER = new GameCharacter()
const CARETAKER = new CareTaker(GAME_CHARACTER)

// start the game
GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.addInventory('sword')
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('rifle')
GAME_CHARACTER.moveForward(1)
console.log(GAME_CHARACTER.status())

// save progress
CARETAKER.save()

GAME_CHARACTER.registerKill()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
GAME_CHARACTER.addInventory('motorbike')
GAME_CHARACTER.moveForward(10)
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

// save progress
CARETAKER.save()
GAME_CHARACTER.moveForward(1)
GAME_CHARACTER.progressToNextLevel()
GAME_CHARACTER.registerKill()
console.log(GAME_CHARACTER.status())

// decide you made a mistake, go back to first save
CARETAKER.restore(0)
console.log(GAME_CHARACTER.status())

// continue
GAME_CHARACTER.registerKill()
