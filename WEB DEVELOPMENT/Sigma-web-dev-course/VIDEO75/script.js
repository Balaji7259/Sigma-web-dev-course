//Examples of How Asynchronous JavaScript Works
// 1. Using setTimeout
console.log("Start");
console.log("Balaji");

setTimeout(() => {
    console.log("This is setTimeout 1");
},2000);

setTimeout(() => {
    console.log("This is setTimeout 2");
},1000);

console.log("End");

//Callbacks
const callback = (arg) => {
    console.log(arg);
}

const loadscript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Balaji");
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

