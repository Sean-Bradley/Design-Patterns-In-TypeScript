'A Row in the Table'
import Column from './column'

export default class Row {
    // A Row in the Table
    columns: Column[]

    constructor(column_count: number) {
        this.columns = []
        for (let i = 0; i < column_count; i++) {
            this.columns.push(new Column())
        }
    }
    getData() {
        // Format the row before returning it to the table
        let ret = ''
        this.columns.forEach((column) => {
            ret = `${ret}${column.getData()}|`
        })
        return ret
    }
}
