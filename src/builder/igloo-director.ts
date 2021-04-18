// A Director Class
import { HouseBuilder } from './house-builder'

export module IglooDirector {
    export function construct() {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new HouseBuilder()
            .set_building_type("Igloo")
            .set_wall_material("Ice")
            .set_number_doors(1)
            .get_result()
    }
}