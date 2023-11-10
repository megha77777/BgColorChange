const btn = document.querySelector("button")
const body = document.querySelector("body")
const color =["red", "yellow", "green", "pink", "purple", "blue"]

body.style.backgroundColor = "beige";
function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}
btn.addEventListener("click", changeBG)
