var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");


function clicar1() {
  if (randomNumber1 === 1) {
    player1.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    player1.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    player1.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    player1.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    player1.setAttribute("src", "images/dice5.png");
  } else {
    player1.setAttribute("src", "images/dice6.png");
  }
}

function clicar2() {
  if (randomNumber2 === 1) {
    player2.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    player2.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    player2.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    player2.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    player2.setAttribute("src", "images/dice5.png");
  } else {
    player2.setAttribute("src", "images/dice6.png");
  }

  whoWins();
}

function whoWins() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}