import IShapeImplementer from './ishape-implementer'

export default class SquareImplementer implements IShapeImplementer {
    drawImplementation(): void {
        console.log('**************')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('**************')
    }
}
