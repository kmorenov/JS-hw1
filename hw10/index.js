document.getElementById('draw').onclick = draw;
document.getElementById('pass').onclick = pass;
document.getElementById('show').onclick = show

function draw() {
  let nbr = Math.floor(Math.random() * 11) + 1
  document.getElementById('screen').innerText = Number(document.getElementById('screen').innerText) + 
  Number(nbr.toFixed()) 
  nbr = Math.floor(Math.random() * 11) + 1
  document.getElementById('screenAI').innerText = Number(document.getElementById('screenAI').innerText) + 
  Number(nbr.toFixed()) 
}

function pass() {
  if (document.getElementById('screenAI').innerText < 18){
  let res = prompt("Does the AI wish to draw a card?", "Yes")
    if (res == "Yes"){
      nbr = Math.floor(Math.random() * 11) + 1
      document.getElementById('screenAI').innerText = 
      Number(document.getElementById('screenAI').innerText) + Number(nbr.toFixed())
    }
  }
  show()
}

function show() {
  let playerHand = Number(document.getElementById('screen').innerText)
  let aiHand = Number(document.getElementById('screenAI').innerText) + 1

  if (playerHand <= 21) {
    if (aiHand <=21){
      if (playerHand > aiHand){
        alert(playerHand + " : " + aiHand + " Player WON")
      }
      else if (playerHand < aiHand){
        alert(playerHand + " : " + aiHand + " Player LOST")
      }
      else{
        alert(playerHand + " : " + aiHand + " It is a DRAW")
      }
    }
    else{
      alert(playerHand + " : " + aiHand + " Player WON")
    }
  }
  else{
    alert(playerHand + " : " + aiHand + " Player LOST")
  }
  let res = prompt("Clear the scoreboards?", "Yes")
  if (res=="Yes"){
    document.getElementById('screen').innerText = null
    document.getElementById('screenAI').innerText = null
  }
}
