"use strict";
// // *******************************************
// // ----------------38.CHALLENGE-1--------------
// // *******************************************
// let average = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// let winnerCalc = (dolphinsAverage, koalasAverage) => {
//   if (dolphinsAverage >= koalasAverage * 2) {
//     console.log(`Dolphins win 🏆(${dolphinsAverage} vs. ${koalasAverage})`);
//   } else if (koalasAverage >= dolphinsAverage * 2) {
//     console.log(`Koalas win 🏆(${koalasAverage} vs. ${dolphinsAverage})`);
//   } else {
//     console.log("No team Wins.");
//   }
// };

// //Test Data-1
// let dolphinsScore = average(44, 23, 71);
// let koalasScore = average(65, 54, 49);
// winnerCalc(dolphinsScore, koalasScore);

// //Test Data-2
// dolphinsScore = average(85, 54, 41);
// koalasScore = average(23, 34, 27);
// winnerCalc(dolphinsScore, koalasScore);

// // *******************************************
// // ----------------41.CHALLENGE-2-------------
// // *******************************************
// let billValue = 100;

// let calTip = (billAmount) => {
//   let tip = 0;
//   if (billAmount >= 50 && billAmount <= 300) {
//     tip = billAmount * 0.15;
//   } else if (billAmount > 300) {
//     tip = billAmount * 0.2;
//   } else {
//     tip = 0;
//   }
//   return tip;
// };

// let bills = [125, 555, 44];

// let tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// console.log(tips);

// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// // *******************************************
// // ----------------45.CHALLENGE-3-------------
// // *******************************************
// let johnInfo = {
//   firstName: "John",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.weight / this.height ** 2;
//   },
// };
// let markInfo = {
//   firstName: "Mark",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.weight / this.height ** 2;
//   },
// };

// console.log(
//   johnInfo.calcBMI() > markInfo.calcBMI()
//     ? `${johnInfo.firstName}'s BMI(${johnInfo.calcBMI()}) is higher than ${
//         markInfo.firstName
//       }'s BMI(${markInfo.calcBMI()})`
//     : `${markInfo.firstName}'s BMI(${markInfo.calcBMI()}) is higher than ${
//         johnInfo.firstName
//       }'s BMI(${johnInfo.calcBMI()})`
// );

//OR
// if (johnInfo.calcBMI() > markInfo.calcBMI()) {
//   console.log(
//     `John's BMI(${johnInfo.calcBMI()}) is higher than Marks's BMI(${markInfo.calcBMI()}).`
//   );
// } else {
//   console.log(
//     `Mark's BMI(${markInfo.calcBMI()}) is higher than John's BMI(${johnInfo.calcBMI()}).`
//   );
// }

// // *******************************************
// // ----------------40.CHALLENGE-4-------------
// // *******************************************

// let calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i <= bills.length - 1; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }
// console.log(bills, tips, totals);

// let average = 0;

// //BONUS
// let calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
