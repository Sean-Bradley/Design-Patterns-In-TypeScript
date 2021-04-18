// A Director Class
import { HouseBuilder } from './house-builder'

export module CastleDirector {

    export function construct() {        
        return new HouseBuilder()
            .set_building_type("Castle")
            .set_wall_material("Sandstone")
            .set_number_doors(100)
            .set_number_windows(200)
            .get_result()
    }
}