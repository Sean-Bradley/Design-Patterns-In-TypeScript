# Prototype Design Pattern

## Video Lecture

| Section            | Video Links                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prototype Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=No5akL0cL6I&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Prototype Pattern"><img src="../img/yt_btn_sm.gif" alt="Prototype Pattern"/></a>   |
| Prototype Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=oQzN6chBOCc&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Prototype Use Case"><img src="../img/yt_btn_sm.gif" alt="Prototype Use Case"/></a> |

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Prototype UML Diagram

![Prototype UML Diagram](../img/prototype_concept.svg)

## Output

When using the shallow copy approach. Changing the inner item of OBJECT2s array, also affected OBJECT1s array.

```bash
node ./dist/prototype/prototype-concept.js
OBJECT1: {"field":[1,2,3,4]}
OBJECT2: {"field":[1,2,3,4]}
OBJECT2: {"field":[1,101,3,4]}
OBJECT1: {"field":[1,101,3,4]}
```

When using the deep copy approach. Changing the inner item of OBJECT2s array, does not affect OBJECT1s array.

```powershell
node ./dist/prototype/prototype-concept.js
OBJECT1: {"field":[1,2,3,4]}
OBJECT2: {"field":[1,2,3,4]}
OBJECT2: {"field":[1,101,3,4]}
OBJECT1: {"field":[1,2,3,4]}
```

## Prototype Use Case

_...Refer to Book or Videos for extra content._

## Example UML Diagram

![Prototype Use Case Diagram](../img/prototype_example.svg)

## Output

```bash
node ./dist/prototype/client.js
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
}

Document {
  name: 'Copy 1',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}

Document {
  name: 'Copy 2',
  array: [ [ 1, 2, 3, 4 ], [ 9, 10, 11, 12 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}

Document {
  name: 'Copy 3',
  array: [ [ 1, 2, 3, 4 ], [ 1234, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
```

<!-- ## New Coding Concepts

### todo

JSON.parse JSON.stringify

Object.assign -->

## Summary

_...Refer to Book or Videos for extra content._
