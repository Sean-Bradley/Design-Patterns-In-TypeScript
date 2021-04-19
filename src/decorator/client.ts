// Decorator Use Case Example Code
import Value from './value'
import Add from './add'
import Sub from './sub'

const A = new Value(1)
const B = new Value(2)
const C = new Value(5)

console.log(new Add(A, B).value)
console.log(new Add(A, 100).value)
console.log(new Sub(C, A).value)
console.log(new Sub(new Add(C, B), A).value)
console.log(new Sub(100, 101).value)
console.log(new Add(new Sub(new Add(C, B), A), 100).value)
console.log(new Sub(123, new Add(C, C)).value)
console.log(new Add(new Sub(new Add(C, 10), A), 100).value)
console.log(A.value)
console.log(B.value)
console.log(C.value)