let a = [1,2,3,4,5];

// for (let i = 0;i<a.length;i++){
//     const element = a[i];
//     console.log(element);
// }

// a.forEach((value,index,a) =>{
//     console.log(value,index,a);
// });

let obj = {
    a : 1,
    b : 2,
    c : 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj,key)) {
        console.log(key,obj[key]);
    }
}

for (const iterator of a) {
    console.log(iterator);
}