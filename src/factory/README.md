# Factory Design Pattern

## Video Lecture

| Section          | Video Links                                                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Factory Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=KtPTG0Q8Fro&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Factory Pattern"><img src="../img/yt_btn_sm.gif" alt="Factory Pattern"/></a>   |
| Factory Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=LNq3YTi8awA&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Factory Use Case"><img src="../img/yt_btn_sm.gif" alt="Factory Use Case"/></a> |

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Factory UML Diagram

![Factory Pattern Overview](../img/factory_concept.svg)

## Source Code

_...Refer to Book or Videos for extra content._

### ./src/factory/factory-concept.ts

```typescript
// The Factory Concept

interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

class Creator {
    static createObject(someProperty: string): IProduct {
        if (someProperty === 'a') {
            return new ConcreteProductA()
        } else if (someProperty === 'b') {
            return new ConcreteProductB()
        } else {
            return new ConcreteProductC()
        }
    }
}

// The Client
const PRODUCT = Creator.createObject('b')
console.log(PRODUCT.name)
```

## Output

```bash
node ./dist/factory/factory-concept.js
ConcreteProductB
```

## Factory Use Case

_...Refer to Book or Videos for extra content._

## Factory Example UML Diagram

![Chair Factory](../img/factory_example.svg)

## Source Code

### ./src/factory/client.ts

```typescript
// Factory Use Case Example Code
import ChairFactory from './chair-factory'

const CHAIR = ChairFactory.getChair('SmallChair')
console.log(CHAIR.getDimensions())
```

### ./src/factory/dimension.ts

```typescript
export type dimension = {
    height: number
    width: number
    depth: number
}
```

### ./src/factory/chair.ts

```typescript
import { dimension } from './dimension'

// A Chair Interface
interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): dimension
}

// The Chair Base Class
export default class Chair implements IChair {
    height = 0
    width = 0
    depth = 0

    createObject(): IChair {
        return this
    }

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
```

### ./src/factory/chair-factory.ts

```typescript
import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
import IChair from './chair'

export default class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else {
            return new SmallChair()
        }
    }
}
```

### ./src/factory/small-chair.ts

```typescript
import Chair from './chair'

export default class SmallChair extends Chair {
    constructor() {
        super()
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
```

### ./src/factory/medium-chair.ts

```typescript
import Chair from './chair'

export default class MediumChair extends Chair {
    constructor() {
        super()
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}
```

### ./src/factory/big-chair.ts

```typescript
import Chair from './chair'

export default class BigChair extends Chair {
    constructor() {
        super()
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
```

## Output

```bash
node ./dist/factory/client.js
{'width': 40, 'depth': 40, 'height': 40}

```

## Summary

_...Refer to Book or Videos for extra content._
