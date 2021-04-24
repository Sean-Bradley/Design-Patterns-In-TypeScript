// The Mediator Use Case Example

import Component from './component'
import Mediator from './mediator'

const MEDIATOR = new Mediator()
const COMPONENT1 = new Component(MEDIATOR, 'Component1')
const COMPONENT2 = new Component(MEDIATOR, 'Component2')
const COMPONENT3 = new Component(MEDIATOR, 'Component3')

MEDIATOR.add(COMPONENT1)
MEDIATOR.add(COMPONENT2)
MEDIATOR.add(COMPONENT3)

COMPONENT1.notify('data A')
COMPONENT2.notify('data B')
COMPONENT3.notify('data C')
