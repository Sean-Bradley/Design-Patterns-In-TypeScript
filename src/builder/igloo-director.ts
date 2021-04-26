// A Director Class
import House from './house'
import HouseBuilder from './house-builder'

export default class IglooDirector {
    static construct(): House {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new HouseBuilder()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult()
    }
}
