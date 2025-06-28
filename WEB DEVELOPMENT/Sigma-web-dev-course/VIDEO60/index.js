console.log("Tutorial for Strings in JavaScript");

let a = "balaji";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);

let real_name = "Balaji";
let friend = "Ramana";
console.log("His name is " + real_name + " His friend is " + friend);
console.log(`His name is ${a} and He was friend of ${friend}`) //Template Literals

let b = "Shivam"
console.log(b.toLowerCase());
console.log(b.toUpperCase());
console.log(b.length)
console.log(b.slice(1, 5));
console.log(b.replace("Sh","ah"));
console.log(b.concat(a));
console.log(b.concat(a,"Shetty"));

console.log(b)
// console.log(b.indexOf("i"));             //To get the index of first occurrence of "i"
// console.log(b.lastIndexOf("i"));
console.log(b.charAt(0));

console.log(b.startsWith("Sh"))
console.log(b.endsWith("am"))