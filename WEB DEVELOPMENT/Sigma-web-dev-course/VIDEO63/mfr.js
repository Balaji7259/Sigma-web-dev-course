let arr = [1,3,5,7,9,11,13];
let newArr = [];
// for (let i = 0; i <arr.length; i++){
//     const element = arr[i];
//     newArr.push(element**2);
// }

// console.log(newArr); // [1,9,25,49,81,121,169]

newArr = arr.map((e) =>{
    return e**2;
});

console.log(newArr); // [1,9,25,49,81,121,169]

const greaterthanseven = (e) => {
    if (e > 7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterthanseven)); // [9,11,13]

let nums = [1,2,3,4,5,6];
const red = (a,b) => {
    return a*b;
}
console.log(nums.reduce(red)); // 720

Array.from("Balaji")
console.log(Array.from("Balaji"));