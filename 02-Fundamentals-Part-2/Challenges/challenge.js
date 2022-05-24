"use strict";
// *******************************************
// ----------------1.CHALLENGE-1--------------
// *******************************************

let average = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let winnerCalc = (dolphinsAverage, koalasAverage) => {
  if (dolphinsAverage >= koalasAverage * 2) {
    console.log(`Dolphins win 🏆(${dolphinsAverage} vs. ${koalasAverage})`);
  } else if (koalasAverage >= dolphinsAverage * 2) {
    console.log(`Koalas win 🏆(${koalasAverage} vs. ${dolphinsAverage})`);
  } else {
    console.log("No team Wins.");
  }
};

//Test Data-1
let dolphinsScore = average(44, 23, 71);
let koalasScore = average(65, 54, 49);
winnerCalc(dolphinsScore, koalasScore);

//Test Data-2
dolphinsScore = average(85, 54, 41);
koalasScore = average(23, 34, 27);
winnerCalc(dolphinsScore, koalasScore);
