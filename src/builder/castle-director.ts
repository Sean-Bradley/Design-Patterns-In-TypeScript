// A Director Class
import HouseBuilder from './house-builder'

export default class CastleDirector {

    static construct() {
        return new HouseBuilder()
            .setBuildingType("Castle")
            .setWallMaterial("Sandstone")
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult()
    }
}