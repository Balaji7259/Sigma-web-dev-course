let a = prompt("Enter a number");
let b = prompt("Enter another number");


if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry,this type of Input is not allowed");
}

let sum = parseInt(a) + parseInt(b);
// alert(`The Sum is ${Number(a) + Number(b)}`);
function main() {
    let x = 5;
    try {
        console.log("The Sum is",sum*x)
        return true
    } catch (error) {
        console.log("Error!!!")
        return false;
    }
    finally {
        console.log("This will always run")
    }
}
main()