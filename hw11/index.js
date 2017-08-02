let now
let then = 0
let points = 0

let startElt = document.getElementById("start")
const startClick = function(event) {
    now = new Date().getTime();
    start()
}
startElt.addEventListener("click", startClick)

let showElt = document.getElementById("show")
const showClick = function(event) {alert("You scored " + localStorage.getItem("points") + " points.")}
showElt.addEventListener("click", showClick)

let clearElt = document.getElementById('clear')
const clearClick = function(event) {
    localStorage.clear()
    alert("Your points history has been cleared.")
}
clearElt.addEventListener("click", clearClick)

function illuminate(color, char){
  document.getElementById('square').style.backgroundColor = color
  document.getElementById('score').innerText = char

  do {
    res = prompt("Please enter color button")
  } while (res.toUpperCase() == "")
  if (res.toUpperCase() == char) points++
}

var color

var i = 0;
let MAX_COUNT = 150;
function changeLights(str){
    let nbr = Math.floor(Math.random(str)*10)
    switch (nbr)
    {
        case 0:
            illuminate("blue", "L")
            break
        case 3:
            illuminate("brown", "O")
            break
        case 6:
            illuminate("purple", "P")
            break
        case 9:
            illuminate("red", "R")
            break
        case 1:
            illuminate("black", "B")
            break
        case 4: 
            illuminate("cyan", "C")
            break
        case 7:
            illuminate("yellow", "Y")
            break
        case 2:
            illuminate("magenta", "M")
            break
        case 5:
            illuminate("gray", "A")
            break
        case 8:
            illuminate("green", "G")
            break
    }
    start();
}

function initSetTimeout(callback){

  if (then - now < 15000){
    setTimeout(callback, 500)
    then = new Date().getTime()

    let seconds = 15 - Math.floor(Number(then - now)/1000)
    if (seconds < 0) seconds = 0

    document.getElementById('sesn').innerText = seconds + " seconds left"
  }
  else {
       finishGame()
  }
}

function start(){
  if(++i<MAX_COUNT){
    if (then - now < 15000){
        initSetTimeout(changeLights.bind(null, i))
    }
    else {
        finishGame()
    }
  }
}

function finishGame(){
    alert("The time is up. You scored " + points + " points.")
    localStorage.clear()
    localStorage.setItem("points", points)
    points = 0
    document.getElementById('square').style.backgroundColor = "white"
    document.getElementById('score').innerText = ""
    document.getElementById('score').style.backgroundColor = "white"
    document.getElementById('sesn').innerText = "Game Over"
}

