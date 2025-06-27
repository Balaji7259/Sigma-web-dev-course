random = Math.random();
console.log(random)

let a = prompt("Enter First Number:");
let b = prompt("Enter Second Number:");
let c = prompt("Enter The Operation:");

let obj = {
    "+":"-",
    "*": "-",
    "-": "/",
    "/": "**"
}

if (random > 0.1){
    // console.log(`The result is: (${a} ${c} ${b})`);
    console.log(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    console.log(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}