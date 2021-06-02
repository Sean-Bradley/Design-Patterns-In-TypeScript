# Composite Design Pattern

## Video Lecture

| Section            | Video Links                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Composite Pattern  | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=kPBqsQBbRvA&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Composite Pattern"><img src="../img/yt_btn_sm.gif" alt="Composite Pattern"/></a>   |
| Composite Use Case | <a id="ytVideoLink" href="https://www.youtube.com/watch?v=1km6cxawCUg&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Composite Use Case"><img src="../img/yt_btn_sm.gif" alt="Composite Use Case"/></a> |

## Overview

_...Refer to Book or Videos for extra content._

## Terminology

_...Refer to Book or Videos for extra content._

## Composite UML Diagram

![Composite Pattern UML Diagram](../img/composite_concept.svg)

## Output

```bash
node ./dist/composite/composite-concept.js
<Leaf>          name:leaf-b     Parent: none
<Composite>     name:comp-2     Parent: none    Components:2
<Leaf>          name:leaf-a     Parent: comp-2
<Composite>     name:comp-1     Parent: comp-2  Components:0
```

## Composite Use Case

_...Refer to Book or Videos for extra content._

## Composite Example UML Diagram

![Composite Pattern Use Case UML Diagram](../img/composite_example.svg)

## Output

```bash
node ./dist/composite/client.js
<DIR>  root
..<FILE> abc.txt
..<FILE> 123.txt
..<DIR>  folder_a
....<FILE> xyz.txt
..<DIR>  folder_b
....<FILE> 456.txt

<DIR>  root
..<FILE> abc.txt
..<FILE> 123.txt
..<DIR>  folder_b
....<FILE> 456.txt
....<DIR>  folder_a
......<FILE> xyz.txt
```

<!-- ## New Coding Concepts

### todo -->

## Summary

_...Refer to Book or Videos for extra content._
