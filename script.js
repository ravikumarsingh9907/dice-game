"use strict";
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const FirstPlayerScore = document.querySelector("#score--0");
const SecondPlayerScore = document.querySelector("#score--1");
const CurrentScore1 = document.querySelector("#current--0");
const CurrentScore2 = document.querySelector("#current--1");
const DiceImg = document.querySelector(".dice");
const Player1 = document.querySelector(".player--0");
const Player2 = document.querySelector(".player--1");
const playAgain = document.querySelector(".btn--new");

let totalOfPlayerOne = 0;
let totalOfPlayerTwo = 0;
let highScoreOfPlayerOne = 0;
let highScoreOfPlayerTwo = 0;

rollDice.addEventListener("click", function () {
  let RandomNumber = Math.trunc(Math.random() * 6 + 1);
  DiceImg.src = `dice-${RandomNumber}.png`;

  if (Player1.classList.contains("player--active")) {
    if (RandomNumber !== 1) {
      totalOfPlayerOne += RandomNumber;
      CurrentScore1.textContent = totalOfPlayerOne;
    } else if (RandomNumber == 1) {
      totalOfPlayerOne = 0;
      CurrentScore1.textContent = 0;
      Player2.classList.add("player--active");
      Player1.classList.remove("player--active");
    }
  } else if (Player2.classList.contains("player--active")) {
    if (RandomNumber !== 1) {
      totalOfPlayerTwo += RandomNumber;
      CurrentScore2.textContent = totalOfPlayerTwo;
    } else if (RandomNumber == 1) {
      totalOfPlayerTwo = 0;
      CurrentScore2.textContent = 0;
      Player1.classList.add("player--active");
      Player2.classList.remove("player--active");
    }
  }
});

holdDice.addEventListener("click", function () {
  if (Player1.classList.contains("player--active")) {
    highScoreOfPlayerOne += totalOfPlayerOne;

    if (highScoreOfPlayerOne >= 100) {
      FirstPlayerScore.textContent = "Winner";
    } else {
      FirstPlayerScore.textContent = highScoreOfPlayerOne;
    }

    Player1.classList.remove("player--active");
    Player2.classList.add("player--active");

    totalOfPlayerOne = 0;
    CurrentScore1.textContent = totalOfPlayerOne;
  } else {
    highScoreOfPlayerTwo += totalOfPlayerTwo;

    if (highScoreOfPlayerTwo >= 100) {
      SecondPlayerScore.textContent = "Winner";
    } else {
      SecondPlayerScore.textContent = highScoreOfPlayerTwo;
    }

    Player1.classList.add("player--active");
    Player2.classList.remove("player--active");

    totalOfPlayerTwo = 0;
    CurrentScore2.textContent = totalOfPlayerTwo;
  }
});

playAgain.addEventListener("click", function () {
  FirstPlayerScore.textContent = 0;
  SecondPlayerScore.textContent = 0;
  CurrentScore2.textContent = 0;
  CurrentScore1.textContent = 0;
  totalOfPlayerTwo = 0;
  totalOfPlayerOne = 0;
  highScoreOfPlayerOne = 0;
  highScoreOfPlayerTwo = 0;
  DiceImg.src = `dice-1.png`;
  Player1.classList.add("player--active");
  Player2.classList.remove("player--active");
});
