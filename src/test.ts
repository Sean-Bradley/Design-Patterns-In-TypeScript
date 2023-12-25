// The key of a dictionary can be of any type and name
let a: { [key: string]: string }
let b: { [id: number]: string }
a = { a: 'car', b: 'train', c: 'plane', d: 'boat' }
b = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' }
// and can be retrieved as such
console.log(a['a'])
console.log(b[2])

// Since Dictionaries are really just objects. You can also retrieve
// a dictionary's value using object notation if the keys are strings
console.log(a.c)
// console.log(b.2) // this doesn't work when the key is a number

// you can add items to a dictionary
a['e'] = 'go-cart'
console.log(a)

// you can delete
delete b[2]
console.log(b)

// The values of a dictionary can be of any type, even an array.
let c: { [id: number]: number[] }
c = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] }
console.log(c)