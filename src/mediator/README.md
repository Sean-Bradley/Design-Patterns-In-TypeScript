# Mediator Design Pattern

## Video Lecture

| Section           | Video Links                                                                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mediator Pattern  | <a class="udemyVideoLink" href="https://www.udemy.com/course/design-patterns-typescript/learn/lecture/27023512/?referralCode=6384C079FB0A503DB9D9" target="_blank" title="Mediator"><img src="../img/udemy_btn_sm.gif" alt="Mediator"/></a>&nbsp;<a id="ytVideoLink" href="https://www.youtube.com/watch?v=ES2WBOhVIhM&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Mediator Pattern"><img src="../img/yt_btn_sm.gif" alt="Mediator Pattern"/></a>   |
| Mediator Use Case | <a class="udemyVideoLink" href="https://www.udemy.com/course/design-patterns-typescript/learn/lecture/27023516/?referralCode=6384C079FB0A503DB9D9" target="_blank" title="Mediator Use Case"><img src="../img/udemy_btn_sm.gif" alt="Mediator Use Case"/></a>&nbsp;<a id="ytVideoLink" href="https://www.youtube.com/watch?v=1yZhuA4jJic&list=PLKWUX7aMnlELvv8bXquIgxXYyHH5SFlaP" target="_blank" title="Mediator Use Case"><img src="../img/yt_btn_sm.gif" alt="Mediator Use Case"/></a> |

## Book 

Cover | Links
-|-
![Design Patterns In TypeScript (ASIN : B0948BCH24)](../img/dp_typescript_125.jpg) | &nbsp;<a href="https://www.amazon.com/dp/B0948BCH24"><img src="../img/flag_us.gif">&nbsp; https://www.amazon.com/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.co.uk/dp/B0948BCH24"><img src="../img/flag_uk.gif">&nbsp; https://www.amazon.co.uk/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.in/dp/B094716FD6"><img src="../img/flag_in.gif">&nbsp; https://www.amazon.in/dp/B094716FD6</a><br/>&nbsp;<a href="https://www.amazon.de/dp/B0948BCH24"><img src="../img/flag_de.gif">&nbsp; https://www.amazon.de/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.fr/dp/B0948BCH24"><img src="../img/flag_fr.gif">&nbsp; https://www.amazon.fr/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.es/dp/B0948BCH24"><img src="../img/flag_es.gif">&nbsp; https://www.amazon.es/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.it/dp/B0948BCH24"><img src="../img/flag_it.gif">&nbsp; https://www.amazon.it/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.co.jp/dp/B0948BCH24"><img src="../img/flag_jp.gif">&nbsp; https://www.amazon.co.jp/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.ca/dp/B0948BCH24"><img src="../img/flag_ca.gif">&nbsp; https://www.amazon.ca/dp/B0948BCH24</a><br/>&nbsp;<a href="https://www.amazon.com.au/dp/B0948BCH24"><img src="../img/flag_au.gif">&nbsp; https://www.amazon.com.au/dp/B0948BCH24</a>


## Overview

_... Refer to [Book](https://www.amazon.com/dp/B0948BCH24), pause [Video Lectures](#videos) or subscribe to [Medium Membership](https://sean-bradley.medium.com/membership) to read textual content._

## Terminology

_... Refer to [Book](https://www.amazon.com/dp/B0948BCH24), pause [Video Lectures](#videos) or subscribe to [Medium Membership](https://sean-bradley.medium.com/membership) to read textual content._

## Mediator UML Diagram

![Mediator Pattern UML Diagram](../img/mediator_concept.svg)

## Output

```bash
node ./dist/mediator/mediator-concept.js
COLLEAGUE1 <--> Here is the Colleague2 specific data you asked for
COLLEAGUE2 <--> Here is the Colleague1 specific data you asked for
```

## Mediator Use Case

_... Refer to [Book](https://www.amazon.com/dp/B0948BCH24), pause [Video Lectures](#videos) or subscribe to [Medium Membership](https://sean-bradley.medium.com/membership) to read textual content._

## Example UML Diagram

![Mediator Pattern UML Diagram](../img/mediator_example.svg)

## Output

```bash
node ./dist/mediator/client.js
Component1: >>> Out >>> : data A
Component2: <<< In <<< : data A
Component3: <<< In <<< : data A
Component2: >>> Out >>> : data B
Component1: <<< In <<< : data B
Component3: <<< In <<< : data B
Component3: >>> Out >>> : data C
Component1: <<< In <<< : data C
Component2: <<< In <<< : data C
```

## Summary

_... Refer to [Book](https://www.amazon.com/dp/B0948BCH24), pause [Video Lectures](#videos) or subscribe to [Medium Membership](https://sean-bradley.medium.com/membership) to read textual content._
