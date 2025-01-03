// constant & variables
const x = 1; // const is used in local scope
var str = "string"; // or 'string' of `string` - var is used on global scope
let y = 5; // let is used in local scope
console.log(x, y);

// array
const t = [1, -1, 3]; // object & array are still mutable even declare by const
// array method
t.push(5, 5); // add new number to arrays
t.pop(); // get the last element & remove it from the array
const t2 = t.concat(5); // creates new array based on t & add 5 as the last element
const m1 = t.map((value) => value * 2); // [2, 4, 6]
t.filter((number) => number > 0); // [1,3,5]
t.indexOf(1); // 0
t.slice(1, 2); // [-1]
t.splice(-1); // [3]
t.find(1);
t.filter(1);

// if...else
const result = 1 > 0 ? true : false;
if (1 > 0) {
    console.log(true);
} else if (1 < 0) {
    console.log(false);
} else {
    console.log("not happened");
}

switch (t) {
    case 1:
        console.log("t=1");
        break;

    default:
        console.log("t is nothing");
        break;
}

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
const total = function (p1, p2) {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
};
//equal to
const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
};
const square = (p) => {
    console.log(p);
    return p * p;
};
// equal to
const square2 = (p) => p * p;

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
