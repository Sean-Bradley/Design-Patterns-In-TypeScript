# Builder Design Pattern

## Video Lecture

| Section          | Video Links                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Builder Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=2bF7HUAiaSU&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Builder Pattern"><img src="../img/yt_btn_sm.gif" alt="Builder Pattern"/></a>   |
| Builder Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=JBVK6UnIUDA&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Builder Use Case"><img src="../img/yt_btn_sm.gif" alt="Builder Use Case"/></a> |

## Book 

Cover | Links
-|-
![Design Patterns In TypeScript (ASIN : B0948BCH24)](../img/dp_typescript_125.jpg) | &nbsp;<a href="https://www.amazon.com/dp/B0948BCH24"><img src="../img/flag_us.gif">&nbsp; https://www.amazon.com/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.co.uk/dp/B0948BCH24"><img src="../img/flag_uk.gif">&nbsp; https://www.amazon.co.uk/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.in/dp/B094716FD6"><img src="../img/flag_in.gif">&nbsp; https://www.amazon.in/dp/B094716FD6</a><br/>&nbsp;<a href="https://www.amazon.de/dp/B0948BCH24"><img src="../img/flag_de.gif">&nbsp; https://www.amazon.de/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.fr/dp/B0948BCH24"><img src="../img/flag_fr.gif">&nbsp; https://www.amazon.fr/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.es/dp/B0948BCH24"><img src="../img/flag_es.gif">&nbsp; https://www.amazon.es/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.it/dp/B0948BCH24"><img src="../img/flag_it.gif">&nbsp; https://www.amazon.it/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.co.jp/dp/B0948BCH24"><img src="../img/flag_jp.gif">&nbsp; https://www.amazon.co.jp/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.ca/dp/B0948BCH24"><img src="../img/flag_ca.gif">&nbsp; https://www.amazon.ca/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.com.au/dp/B0948BCH24"><img src="../img/flag_au.gif">&nbsp; https://www.amazon.com.au/dp/B0948BCH24</a>

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Builder UML Diagram

![Builder Pattern Overview](img/builder_concept.svg)

## Source Code

_...Refer to Book or Videos for extra content._

### ./src/builder/builder-concept.ts

```typescript
// Builder Concept Sample Code
class Product {
    parts: string[] = []
}

interface IBuilder {
    buildPartA(): this
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}

class Builder implements IBuilder {
    // The Concrete Builder
    product: Product

    constructor() {
        this.product = new Product()
    }

    buildPartA() {
        this.product.parts.push('a')
        return this
    }

    buildPartB() {
        this.product.parts.push('b')
        return this
    }

    buildPartC() {
        this.product.parts.push('c')
        return this
    }

    getResult() {
        return this.product
    }
}

class Director {
    // The Director, building a complex representation

    static construct() {
        'Constructs and returns the final product'
        return new Builder().buildPartA().buildPartB().buildPartC().getResult()
    }
}

// The Client
const PRODUCT1 = Director.construct()
console.log(PRODUCT1.parts)
```

## Output

```bash
node ./dist/builder/builder-concept.js
[ 'a', 'b', 'c' ]
```

## Builder Use Case

_...Refer to Book or Videos for extra content._

## Example UML Diagram

![Builder Pattern in Context](img/builder_example.svg)

## Source Code

### ./src/builder/client.ts

```typescript
// House Builder Example Code

import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'
import HouseBoatDirector from './houseboat-director'

const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()
const HOUSEBOAT = HouseBoatDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
console.log(HOUSEBOAT.construction())
```

### ./src/builder/igloo-director.ts

```typescript
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
```

### ./src/builder/castle-director.ts

```typescript
// A Director Class
import House from './house'
import HouseBuilder from './house-builder'

export default class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult()
    }
}
```

### ./src/builder/houseboat-director.ts

```typescript
// A Director Class
import House from './house'
import HouseBuilder from './house-builder'

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult()
    }
}
```

### ./src/builder/house-builder.ts

```typescript
import House from './house'

interface IHouseBuilder {
    house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(number: number): this
    setNumberWindows(number: number): this
    getResult(): House
}

export default class HouseBuilder implements IHouseBuilder {
    house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(number: number): this {
        this.house.doors = number
        return this
    }

    setNumberWindows(number: number): this {
        this.house.windows = number
        return this
    }

    getResult(): House {
        return this.house
    }
}
```

### ./src/builder/house.ts

```typescript
// The Product

export default class House {
    doors = 0
    windows = 0
    wallMaterial = ''
    buildingType = ''

    construction(): string {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}
```

## Output

```bash
node ./dist/builder/client.js
This is a Ice Igloo with 1 door(s) and 0 window(s).
This is a Sandstone Castle with 100 door(s) and 200 window(s).
This is a Wood House Boat with 6 door(s) and 8 window(s).
```

<!-- ## New Coding Concepts

### todo -->

## Summary

_...Refer to Book or Videos for extra content._
