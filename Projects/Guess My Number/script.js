"use strict";

let score = 10;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 10 + 1);

let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
//On click to check
document.querySelector(".check").addEventListener("click", function () {
  if (score > 0) {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
      displayMessage("⛔ No Number!");

      //winnig Condition
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct NUmber!");

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //Score reducing for wrong guess
    } else if (guess != secretNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#222";

      if (guess > secretNumber) {
        displayMessage("📈 Too High!");
      } else if (guess < secretNumber) {
        displayMessage("📉 Too Low!");
      }
    }
  }

  //Losing Condition
  if (score < 1) {
    displayMessage("💥 You Lose!");
    document.querySelector(".score").textContent = 0;
  }
});
//On click to reset
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".guess").value = null;
});
