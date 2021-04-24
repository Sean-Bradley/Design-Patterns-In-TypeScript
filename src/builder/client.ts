// House Builder Example Code

import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'
import HouseBoatDirector from './houseboat-director'

const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()
const HOUSEBOAT = HouseBoatDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
console.log(HOUSEBOAT.construction())
