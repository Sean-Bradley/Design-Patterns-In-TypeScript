import SmallTable from "./small-table"
import MediumTable from "./medium-table"
import BigTable from "./big-table"
import { ITable } from "./table"

export default class TableFactory {

    static getTable(table: string) : ITable {
        if (table === 'BigTable') {
            return new BigTable()
        } else if (table === 'MediumTable') {
            return new MediumTable()
        } else if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found');
        }
    }
}