// Bridge Pattern Concept Sample Code

import CircleImplementer from './circle-implementer'
import SquareImplementer from './square-implementer'
import Circle from './circle'
import Square from './square'

const CIRCLE = new Circle(new CircleImplementer())
CIRCLE.draw()

const SQUARE = new Square(new SquareImplementer())
SQUARE.draw()
