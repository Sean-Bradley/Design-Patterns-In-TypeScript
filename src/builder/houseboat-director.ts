// A Director Class
import HouseBuilder from './house-builder'

export default class HouseBoatDirector {

    static construct() {
        return new HouseBuilder()
            .setBuildingType("House Boat")
            .setWallMaterial("Wood")
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult()
    }
}