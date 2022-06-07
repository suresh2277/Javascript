"use strict";
let activePlayer = 1;
let currentScore1 = 0;
let currentScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let playing = true;

let reset = document.querySelector(".new");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let dice = document.querySelector(".dice");

let cScore1 = document.querySelector(".cscore-1");
let cScore2 = document.querySelector(".cscore-2");
let tscore1 = document.querySelector(".tscore-1");
let tscore2 = document.querySelector(".tscore-2");

let init = function () {
  activePlayer = 1;
  cScore1.textContent = 0;
  cScore2.textContent = 0;
  tscore1.textContent = 0;
  tscore2.textContent = 0;
  playing = true;
  dice.classList.add("hidden");
};
init();

let currentScore = function (activePlayer, diceNumber) {
  if (activePlayer === 1) {
    currentScore1 += diceNumber;
    cScore1.textContent = currentScore1;
  } else {
    currentScore2 += diceNumber;
    cScore2.textContent = currentScore2;
  }
};

let switchPlayer = function (activePLayer) {
  activePlayer = activePlayer === 1 ? 2 : 1;
  if (activePlayer === 1) {
    currentScore2 = 0;
    cScore2.textContent = currentScore2;
    player1.classList.add("active");
    player2.classList.remove("active");
  } else if (activePlayer === 2) {
    currentScore1 = 0;
    cScore1.textContent = currentScore1;
    player1.classList.remove("active");
    player2.classList.add("active");
  }
};

let winner = function (activePlayer) {
  if (activePlayer === 1) {
    player1.classList.add("winner");
    document.querySelector(".winner .winner-title").classList.remove("hidden");
  } else {
    player2.classList.add("winner");
    document.querySelector(".winner .winner-title").classList.remove("hidden");
  }
};

let diceRoll = roll.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `/images/dice-${diceNumber}.png`;

    if (diceNumber != 1) {
      currentScore(activePlayer, diceNumber);
    } else {
      if (activePlayer === 1) {
        currentScore1 = 0;
        cScore1.textContent = currentScore1;
        switchPlayer(activePlayer);
      } else if (activePlayer === 2) {
        currentScore2 = 0;
        cScore2.textContent = currentScore2;
        switchPlayer(activePlayer);
      }
    }
  }
});

let playerHold = hold.addEventListener("click", function () {
  if (playing) {
    if (activePlayer === 1) {
      totalScore1 += currentScore1;
      tscore1.textContent = totalScore1;
      if (totalScore1 >= 100) {
        playing = false;
        winner(activePlayer);
      } else {
        switchPlayer(activePlayer);
      }
    } else if (activePlayer === 2) {
      totalScore2 += currentScore2;
      tscore2.textContent = totalScore2;
      if (totalScore2 >= 100) {
        playing = false;
        winner(activePlayer);
      } else {
        switchPlayer(activePlayer);
      }
    }
  }
});

reset.addEventListener("click", function () {
  init();
});
