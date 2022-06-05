"use strict";

//Selecting Elements
let player1 = document.querySelector(".player-0");
let player2 = document.querySelector(".player-1");
let score1 = document.querySelector("#score--0");
let score2 = document.getElementById("score--1");
let current1 = document.getElementById("current--0");
let current2 = document.getElementById("current--1");
let dice = document.querySelector(".dice");
let reset = document.querySelector(".reset");
let roll = document.querySelector(".roll");
let hold = document.querySelector(".hold");

let scores, currentScore, activePlayer, playing;

//Initial Conditions
let init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current1.textContent = 0;
  current2.textContent = 0;
  dice.classList.add("hidden");

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("active");
  player2.classList.remove("active");
  document.querySelector(".player").classList.remove("player--winner");
  document.querySelector(".player-0 .winner").classList.add("hidden");
  document.querySelector(".player-1 .winner").classList.add("hidden");
};

init();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //4. switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Now the active player is 1
  currentScore = 0;
  player1.classList.toggle("active");
  player2.classList.toggle("active");
};

//Rolling dice functionality
roll.addEventListener("click", function () {
  if (playing) {
    //1. Generating a random dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    dice.classList.remove("hidden");
    dice.src = `/images/dice-${diceRoll}.png`;

    //3. Check for diceRoll = 1
    if (diceRoll !== 1) {
      //Add diceRool to current score of the active player
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to total score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if the score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");

      //3.if(score>=100), winner
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(".player--winner .winner")
        .classList.remove("hidden");
      // document.querySelector(`.player-${activePlayer}`).classList.add("winner");

      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active");
    } else {
      //4. Switch to other player
      switchPlayer();
    }
  }
});

//Implementing the reset button
reset.addEventListener("click", init);
