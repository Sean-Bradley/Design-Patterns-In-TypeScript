# Facade Design Pattern

## Video Lecture

| Section         | Video Links                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Facade Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=jhgtdztOoIU&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Facade Pattern"><img src="../img/yt_btn_sm.gif" alt="Facade Pattern"/></a>   |
| Facade Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=Kqk4R3IfWnY&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Facade Use Case"><img src="../img/yt_btn_sm.gif" alt="Facade Use Case"/></a> |

## Overview

_...Refer to Book or Videos for extra content._

## Facade UML Diagram

![Facade Design Pattern](../img/facade_concept.svg)

## Output

```bash
node ./dist/facade/facade-concept.js
A
B
{ C: [ 1, 2, 3 ] }
A
B
{ C: [ 1, 2, 3 ] }
```

## Facade Use Case

_...Refer to Book or Videos for extra content._

## Example UML Diagram

![Facade Example UML Diagram](../img/facade_example.svg)

## Output

```bash
node ./dist/facade/client.js

---- GameState Snapshot ----
getGameState 59
{ clock: 59, gameOpen: false, entries: [ [ 'sean', 5 ] ] }

---- Reports History ----
0 : 1619260983800 : new user 'sean' created
1 : 1619260983800 : wallet for 'sean' created and set to 0
2 : 1619260983800 : Give new user 'sean' sign up bonus of 10
3 : 1619260983800 : Balance adjustment for 'sean'. New balance = 10
4 : 1619260984312 : Balance check for 'sean' = 10
5 : 1619260984312 : Balance adjustment for 'sean'. New balance = 9
6 : 1619260984312 : New entry '5' submitted by 'sean'

---- User Balance ----
sean : 9

---- GameState Snapshot ----
getGameState 56
{ clock: 56, gameOpen: false, entries: [ [ 'sean', 5 ] ] }
```

<!-- ## New Coding Concepts

### todo -->

unknown v any

## Summary

_...Refer to Book or Videos for extra content._
