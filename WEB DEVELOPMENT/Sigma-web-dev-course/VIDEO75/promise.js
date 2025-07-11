console.log('Promise Example');
// Creating a new Promise

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Promise Number is Supporting to You");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done 1");
            resolve("Balaji");
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Promise Number is Supporting to You");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am Done 2");
            resolve("Shetty");
        }, 1000);
    }
});

// let prom3 = Promise.all([prom1, prom2]);  //Promise.all will wait for all promises to resolve or reject

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// let prom3 = Promise.allSettled([prom1, prom2]);  // Promise.allSettled will wait for all promises to settle (either resolve or reject)

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let prom3 = Promise.race([prom1, prom2]);    // Promise.race will return the first promise that resolves or rejects

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let prom3 = Promise.any([prom1, prom2]);     // Promise.any will return the first promise that resolves, ignoring any that reject

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let prom3 = Promise.resolve([prom1, prom2]);     // Promise.resolve will return a resolved promise with the value passed to it

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let prom3 = Promise.reject([prom1, prom2]);  //

// prom3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });




