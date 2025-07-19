async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve(45) 
        },1000)
    })
}
function sum(a,b,c) {
    return a + b + c;
}
(async function main() {
    // let a = await sleep();  // Awaiting the promise returned by sleep function
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x,y,...rest] = [1,2,5.4,9,5]          // Destructuring assignment
    // console.log(x,y,rest);
    
    let obj = {
        a : 1,
        b : 2,
        c : 3
    }

    let {a,b} = obj;
    console.log(a,b);  // Destructuring object properties

    let arr = [1,2,3];
    console.log(sum(...arr));  // Spread operator to unpack array elements
})();
