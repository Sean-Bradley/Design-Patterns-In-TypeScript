// The Flyweight Use Case Example

import Table from './table'
import FlyweightFactory from './flyweight-factory'

const TABLE = new Table(3, 3)
TABLE.rows[0].columns[0].data = 'abra'
TABLE.rows[0].columns[1].data = '112233'
TABLE.rows[0].columns[2].data = 'cadabra'
TABLE.rows[1].columns[0].data = 'racadab'
TABLE.rows[1].columns[1].data = '12345'
TABLE.rows[1].columns[2].data = '332211'
TABLE.rows[2].columns[0].data = 'cadabra'
TABLE.rows[2].columns[1].data = '445566'
TABLE.rows[2].columns[2].data = 'aa 22 bb'

TABLE.rows[0].columns[0].justify = 1
TABLE.rows[1].columns[0].justify = 1
TABLE.rows[2].columns[0].justify = 1
TABLE.rows[0].columns[2].justify = 2
TABLE.rows[1].columns[2].justify = 2
TABLE.rows[2].columns[2].justify = 2
TABLE.rows[0].columns[1].width = 15
TABLE.rows[1].columns[1].width = 15
TABLE.rows[2].columns[1].width = 15

TABLE.draw()

console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`)
