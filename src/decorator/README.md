# Decorator Design Pattern

## Video Lecture

| Section            | Video Links                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Decorator Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=umWz9o8IQtY&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Decorator Pattern"><img src="../img/yt_btn_sm.gif" alt="Decorator Pattern"/></a>   |
| Decorator Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=_Q2E3mNCqY4&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Decorator Use Case"><img src="../img/yt_btn_sm.gif" alt="Decorator Use Case"/></a> |

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Decorator UML Diagram

![Decorator Pattern UML Diagram](../img/decorator_concept.svg)

## Source Code

### ./src/decorator/decorator-concept.ts

```typescript
// Decorator Concept Sample Code

interface IComponent {
    method(): string
}

class Component implements IComponent {
    method(): string {
        return 'Component Method'
    }
}

class Decorator implements IComponent {
    #object: IComponent

    constructor(object: IComponent) {
        this.#object = object
    }

    method(): string {
        return `Decorator Method(${this.#object.method()})`
    }
}

// The Client
const COMPONENT = new Component()
console.log(COMPONENT.method())

// The component can be decorated
const Decorated = new Decorator(COMPONENT)
console.log(Decorated.method())

// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated)
console.log(Decorated2.method())
```

## Output

```bash
node ./dist/decorator/decorator-concept.js
Component Method
Decorator Method(Component Method)
Decorator Method(Decorator Method(Component Method))
```

## Decorator Use Case

_...Refer to Book or Videos for extra content._

## Example UML Diagram

![Decorator Pattern in Context](../img/decorator_example.svg)

## Source Code

### ./src/decorator/client.ts

```typescript
// Decorator Use Case Example Code

import Value from './value'
import Add from './add'
import Sub from './sub'

const A = Value(1)
const B = Value(2)
const C = Value(5)

console.log(Add(A, B).value)
console.log(Add(A, 100).value)
console.log(Sub(C, A).value)
console.log(Sub(Add(C, B), A).value)
console.log(Sub(100, 101).value)
console.log(Add(Sub(Add(C, B), A), 100).value)
console.log(Sub(123, Add(C, C)).value)
console.log(Add(Sub(Add(C, 10), A), 100).value)
console.log(A.value)
console.log(B.value)
console.log(C.value)
```

### ./src/decorator/value.ts

```typescript
export interface IValue {
    value: number
}

class _Value implements IValue {
    value: number
    constructor(value: number) {
        this.value = value
    }
}

export default function Value(value: number): IValue {
    return new _Value(value)
}
```

### ./src/decorator/add.ts

```typescript
import { IValue } from './value'

class _Add implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? (val1 as IValue).value
            : (val1 as number)
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? (val2 as IValue).value
            : (val2 as number)
        this.value = left + right
    }
}

export default function Add(
    val1: IValue | number,
    val2: IValue | number
): IValue {
    return new _Add(val1, val2)
}
```

### ./src/decorator/sub.ts

```typescript
import { IValue } from './value'

class _Sub implements IValue {
    value: number
    constructor(val1: IValue | number, val2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(val1, 'value')
            ? (val1 as IValue).value
            : (val1 as number)
        const right = Object.prototype.hasOwnProperty.call(val2, 'value')
            ? (val2 as IValue).value
            : (val2 as number)
        this.value = left - right
    }
}

export default function Sub(
    val1: IValue | number,
    val2: IValue | number
): IValue {
    return new _Sub(val1, val2)
}
```

## Output

```bash
node ./dist/decorator/client.js
3
101
4
6
-1
106
113
114
1
2
5
```

<!-- ## New Coding Concepts

### todo -->

## Summary

_...Refer to Book or Videos for extra content._
