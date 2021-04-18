// Factory Use Case Example Code
import { ChairFactory } from './chair-factory'

//module FactoryUseCase {

const CHAIR = ChairFactory.getChair("SmallChair")
console.log(CHAIR.getDimensions())


//}
