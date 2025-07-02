console.log("Balaji")

let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes["2"].style.backgroundColor = "red";
// boxes["2"].style.color = "white";

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green" //Takes first box element 

// console.log(document.querySelectorAll(".box").style.backgroundColor = "green") //This Not works

// document.querySelectorAll(".box").forEach(element => {
//     console.log(element)
// }); When we use select all use this foreach method to print ebery element

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
}); 

// document.getElementsByTagName("div")

document.querySelector(".container").contains[e[0]]