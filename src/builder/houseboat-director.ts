// A Director Class
import { HouseBuilder } from './house-builder'

export module HouseBoatDirector {

    export function construct() {        
        return new HouseBuilder()
            .set_building_type("House Boat")
            .set_wall_material("Wood")
            .set_number_doors(6)
            .set_number_windows(8)
            .get_result()
    }
}