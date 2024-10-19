// constant & variables
const x = 1
let y = 5
console.log(x, y)

// array
const t = [1, -1, 3]
t.push(5, 5)               // add new number to arrays
t.pop()                 // get the last element & remove it from the array
const t2 = t.concat(5)  // creates new array
const m1 = t.map(value => value * 2) // [2, 4, 6]

t.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})

const [first, second, ...rest] = t

// object
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

// add object property
object1.address = 'Helsinki'
object1['secret number'] = 12341

// function
// arrow function
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const square = p => {
    console.log(p)
    return p * p
}
const square2 = p => p * p       // even shorter

function product(a, b) {
    return a * b
}