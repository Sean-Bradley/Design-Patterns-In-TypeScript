// Abstract Furniture Factory

import {IChair} from './chair'
import ChairFactory from './chair-factory'
import {ITable} from './table'
import TableFactory from './table-factory'

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return ChairFactory.getChair(furniture)
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}
