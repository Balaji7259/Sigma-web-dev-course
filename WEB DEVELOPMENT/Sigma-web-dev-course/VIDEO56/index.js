console.log("Video For a Conditional Statements");

let a = 0;
let grace = 2;
// a += grace; // Incrementing a by grace

// Arithmetic Operators
console.log(a + grace);
console.log(a * grace);
console.log(a - grace);
console.log(a / grace);
console.log(a % grace);

if ((a+grace) > 50) {
    console.log("You can Drive")
}
else if (a==0){
    console.log("Are You Kidding Me?")
}

else if (a==1){
    consolele.log("Are you again Kidding Me?")
}
else{
    console.log("You cannot Drive")
}


p = 10;
q = 20;
let c = p>q ? (p-q):(q-p)  // Ternary Operator
console.log(c);

/*
translate to
if (p > q) {
    let c = p - q;
}
else {
    let c = q - p;
}
*/
