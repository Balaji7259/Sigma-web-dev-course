let a = 0

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys()); // Correct way to get [0, 1, 2, ..., number]
    console.log(arr.slice(1)); // Remove 0, since 0 doesn't affect multiplication
    let c = arr.slice(1).reduce((a, b) => a * b, 1); // Multiply all elements
    return c
}


function facfor(numbers){
    fact = 1
    for (let index = 1; index <= numbers; index++) {
        fact = fact*index
    }
    return fact
}
console.log(factorial(a))
console.log(facfor(a))