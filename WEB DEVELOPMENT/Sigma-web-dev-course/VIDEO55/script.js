console.log("Hello, World!");

var a = 5;
var b = 10;
var _c = "balaji";
// var 55 = "invalid"; // This will cause an error

var d = "Shetty";
console.log(a+b)

// const a = 16;
// a = a+1: // This will cause an error because 'a' is a constant

let x = 10;
let y = 20;

{
    let x = 30; // This 'x' is block-scoped
    console.log("Inside block x:", x); // Outputs 30
}


console.log(x)

let p = "ramana";
let q = 56;
let r = 56.6
const s = true;
let t = undefined;
let u = null;

console.log(p, q, r, s, t, u)
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u);

let o = {
    name: "Balaji",
    "job code": 1234
}

console.log(o)

o.salary = 50000; // Adding a new property
console.log(o);

o.salary = 60000; // Modifying an existing property
console.log(o);