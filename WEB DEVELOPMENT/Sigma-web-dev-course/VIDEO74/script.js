let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    alert("Hey I am a Button")
    document.querySelector(".box").innerHTML = "<b>Hey you were just clicked</b> to Change the Content"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Hack me By right clicking ")
})

document.addEventListener("keydown", (e)=>{
    console.log(e,e.key, e.keyCode)
})