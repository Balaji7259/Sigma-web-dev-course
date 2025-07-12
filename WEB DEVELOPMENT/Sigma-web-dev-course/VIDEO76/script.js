// Casual Method of using Promises instead of Async/Await
// function getdata() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve(455);
//         },3000)
//     });
// }

// console.log("Loading data...");

// console.log("Do Something Else");

// console.log("Waiting for data...");

// let data = getdata();

// console.log("Data Loaded");
// console.log("Continue...");

// data.then((v) =>{
//     console.log("Data Loaded");
//     console.log("Continue...");
// })

// async function getdata() {
//     // Simulating a delay of 30 seconds to fetch data
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3000)
//     });
// }

async function getdata() {
    // Simulating a delay of 30 seconds to fetch data
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(x);
    return 455;

}

async function main() {
    console.log("Loading data...");
    console.log("Do Something Else");
    console.log("Waiting for data...");

    let data = await getdata();

    console.log(data);
    console.log("Data Loaded");
    console.log("Continue...");


    // let data = getdata();

    // console.log("Data Loaded");
    // console.log("Continue...");

}

main();