// constant & variables
const x = 1; // const is used in local scope
var str = "string"; // or 'string' of `string` - var is used on global scope
let y = 5; // let is used in local scope
console.log(x, y);

// array
const t = [1, -1, 3]; // object & array are still mutable even declare by const
t.push(5, 5); // add new number to arrays
t.pop(); // get the last element & remove it from the array
const t2 = t.concat(5); // creates new array based on t & add 5 as the last element
const m1 = t.map((value) => value * 2); // [2, 4, 6]
t.indexOf(1); // 0
t.slice(1, 2); // [-1]
t.splice(-1); // [3]

// loop
for (let i = 0; i < t.length; i++) {
    // Loop!
}
t.forEach((value) => {
    console.log(value); // numbers 1, -1, 3, 5 are printed, each on its own line
});

// destruct array
const [first, second, ...rest] = t;

// object
const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
};

const object2 = {
    name: {
        first: "Dan",
        last: "Abramov",
    },
    grades: [2, 3, 5, 3],
    department: "Stanford University",
};

// add object property
object1.address = "Helsinki";
object1["secret number"] = 12341;

// function
// arrow function
const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
};
const square = (p) => {
    console.log(p);
    return p * p;
};
const square2 = (p) => p * p; // even shorter

function product(a, b) {
    return a * b;
}

// assign method to object
const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function () {
        console.log("hello, my name is " + this.name);
    },
};

arto.greet(); // "hello, my name is Arto Hellas" gets printed
arto.growOlder = function () {
    this.age += 1;
};
