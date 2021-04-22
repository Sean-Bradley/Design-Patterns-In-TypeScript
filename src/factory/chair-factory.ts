import SmallChair from "./small-chair"
import MediumChair from "./medium-chair"
import BigChair from "./big-chair"

export default class ChairFactory {

    static getChair(chair: string) {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }    
}