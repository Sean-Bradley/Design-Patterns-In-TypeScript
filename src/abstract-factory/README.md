# Abstract Factory Design Pattern

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Abstract Factory UML Diagram

![Abstract Factory Overview](../img/abstract_factory_concept.svg)

## Source Code

### ./src/abstract-factory/abstract-factory-concept.ts

```typescript
// Abstract Factory Concept Sample Code
import { FactoryA, IProduct as IProductA } from './factory-a'
import { FactoryB, IProduct as IProductB } from './factory-b'

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
    // The Abstract Factory Concrete Class

    static createObject(factory: string): IProduct | undefined {
        try {
            if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
                return FactoryA.getObject(factory[1])
            }
            if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                return FactoryB.getObject(factory[1])
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}

// The Client
let PRODUCT = AbstractFactory.createObject('ab')
console.log(PRODUCT)

PRODUCT = AbstractFactory.createObject('bc')
console.log(PRODUCT)
```

### ./src/abstract-factory/factory-a.ts

```typescript
// FactoryA Sample Code

export interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA:ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA:ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryA:ConcreteProductC'
    }
}

export class FactoryA {
    static getObject(some_property: string): IProduct {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA()
            } else if (some_property === 'b') {
                return new ConcreteProductB()
            } else if (some_property === 'c') {
                return new ConcreteProductC()
            } else {
                throw new Error('Class Not Found')
            }
        } catch (e) {
            console.log(e)
        }
        return new ConcreteProduct()
    }
}
```

### ./src/abstract-factory/factory-b.ts

```typescript
// FactoryB Sample Code

export interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryB:ConcreteProductC'
    }
}

export class FactoryB {
    static getObject(some_property: string): IProduct {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA()
            } else if (some_property === 'b') {
                return new ConcreteProductB()
            } else if (some_property === 'c') {
                return new ConcreteProductC()
            } else {
                throw new Error('Class Not Found')
            }
        } catch (e) {
            console.log(e)
        }
        return new ConcreteProduct()
    }
}
```

## Output

```bash
node ./dist/abstract-factory/abstract-factory-concept.js
ConcreteProductB { name: 'FactoryA:ConcreteProductB' }
ConcreteProductC { name: 'FactoryB:ConcreteProductC' }
```

## Abstract Factory Example Use Case

_...Refer to Book or Videos for extra content._

## Abstract Factory Example UML Diagram

See this UML diagram of an Abstract Furniture Factory implementation that returns chairs
and tables.

![Abstract Furniture Factory](../img/abstract_furniture_factory.svg)

## Source Code

### ./src/abstract-factory/client.ts

```typescript
// Abstract Factory Use Case Example Code
import FurnitureFactory from './furniture-factory'

let FURNITURE = FurnitureFactory.getFurniture('SmallChair')
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())

FURNITURE = FurnitureFactory.getFurniture('MediumTable')
console.log(FURNITURE?.name)
console.log(FURNITURE?.getDimensions())
```

### ./src/abstract-factory/dimension.ts

```typescript
export type dimension = {
    height: number
    width: number
    depth: number
}
```

### ./src/abstract-factory/furniture-factory.ts

```typescript
// Abstract Furniture Factory

import { IChair } from './chair'
import ChairFactory from './chair-factory'
import { ITable } from './table'
import TableFactory from './table-factory'

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (
                ['SmallChair', 'MediumChair', 'BigChair'].indexOf(
                    furniture
                ) > -1
            ) {
                return ChairFactory.getChair(furniture)
            }
            if (
                ['SmallTable', 'MediumTable', 'BigTable'].indexOf(
                    furniture
                ) > -1
            ) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}
```

### ./src/abstract-factory/chair-factory.ts

```typescript
import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
import { IChair } from './chair'

export default class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else if (chair == 'SmallChair') {
            return new SmallChair()
        } else {
            throw new Error('No Chair Found')
        }
    }
}
```

### ./src/abstract-factory/chair.ts

```typescript
import { dimension } from './dimension'

export interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Chair implements IChair {
    name = ''
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
```

### ./src/abstract-factory/small-chair.ts

```typescript
import { Chair } from './chair'

export default class SmallChair extends Chair {
    constructor() {
        super()
        this.name = 'SmallChair'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
```

### ./src/abstract-factory/medium-chair.ts

```typescript
import { Chair } from './chair'

export default class MediumChair extends Chair {
    constructor() {
        super()
        this.name = 'MediumChair'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}
```

### ./src/abstract-factory/big-chair.ts

```typescript
import { Chair } from './chair'

export default class BigChair extends Chair {
    constructor() {
        super()
        this.name = 'BigChair'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
```

### ./src/abstract-factory/table-factory.ts

```typescript
import SmallTable from './small-table'
import MediumTable from './medium-table'
import BigTable from './big-table'
import { ITable } from './table'

export default class TableFactory {
    static getTable(table: string): ITable {
        if (table === 'BigTable') {
            return new BigTable()
        } else if (table === 'MediumTable') {
            return new MediumTable()
        } else if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found')
        }
    }
}
```

### ./src/abstract-factory/table.ts

```typescript
import { dimension } from './dimension'

export interface ITable {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Table implements ITable {
    name = ''
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
```

### ./src/abstract-factory/small-table.ts

```typescript
import { Table } from './table'

export default class SmallTable extends Table {
    constructor() {
        super()
        this.name = 'SmallTable'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
```

### ./src/abstract-factory/medium-table.ts

```typescript
import { Table } from './table'

export default class MediumTable extends Table {
    constructor() {
        super()
        this.name = 'MediumTable'
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}
```

### ./src/abstract-factory/big-table.ts

```typescript
import { Table } from './table'

export default class BigTable extends Table {
    constructor() {
        super()
        this.name = 'BigTable'
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
```

## Output

```bash
node ./dist/abstract-factory/client.js
SmallChair
{ width: 40, depth: 40, height: 40 }
MediumTable
{ width: 60, depth: 60, height: 60 }
```

<!-- ## New Coding Concepts

### Arrays

Arrays

Error Handling -->

## Summary

_...Refer to Book or Videos for extra content._
