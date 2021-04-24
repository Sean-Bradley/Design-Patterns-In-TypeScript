"use strict";
// The Mediator Use Case Example
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
const mediator_1 = require("./mediator");
const MEDIATOR = new mediator_1.default();
const COMPONENT1 = new component_1.default(MEDIATOR, 'Component1');
const COMPONENT2 = new component_1.default(MEDIATOR, 'Component2');
const COMPONENT3 = new component_1.default(MEDIATOR, 'Component3');
MEDIATOR.add(COMPONENT1);
MEDIATOR.add(COMPONENT2);
MEDIATOR.add(COMPONENT3);
COMPONENT1.notify('data A');
COMPONENT2.notify('data B');
COMPONENT3.notify('data C');
