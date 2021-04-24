import IShapeImplementor from './ishape-implementer'

export default class CircleImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('    ******')
        console.log('  **      **')
        console.log(' *          *')
        console.log('*            *')
        console.log('*            *')
        console.log(' *          *')
        console.log('  **      **')
        console.log('    ******')
    }
}
