// // *****************************************************
// // ----------------Challenge - 1  case-1----------------
// // *****************************************************
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

//console.log("Mark's BMI : ", markBMI, "& John's BMI : ", johnBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's BMI.");
// } else {
//   console.log("John's BMI is higher than Mark's BMI.");
// }

// // *****************************************************
// // ----------------Challenge - 1  case-2----------------
// // *****************************************************
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log("Mark's BMI : ", markBMI, "& John's BMI : ", johnBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's BMI.");
// } else {
//   console.log("John's BMI is higher than Mark's BMI.");
// }

// // *****************************************************
// // --------------------Challenge - 2--------------------
// // *****************************************************
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
// } else {
//   console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI}).`);
// }

// // *****************************************************
// // --------------------Challenge - 3--------------------
// // *****************************************************
// const dolphinScoreOne = 96;
// const dolphinScoreTwo = 108;
// const dolphinScoreThree = 89;
// const dolphinAverage =
//   (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// console.log(`Team Dolphins Score : ${dolphinAverage}`);

// const koalaScoreOne = 88;
// const koalaScoreTwo = 91;
// const koalaScoreThree = 110;
// const kolaaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;
// console.log(`Team Koalas Score : ${kolaaAverage}`);

// if (dolphinAverage > kolaaAverage) {
//   console.log("Team Dolphin's are the WINNERS 🏆.");
// } else if (kolaaAverage > dolphinAverage) {
//   console.log("Team Koala's are the WINNERS 🏆.");
// } else {
//   console.log(
//     "Both teams played well and concluded the competiiton as a DRAW."
//   );
// }

//BONUS-1
const dolphinScoreOne = 97;
const dolphinScoreTwo = 112;
const dolphinScoreThree = 101;
const dolphinAverage =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
console.log(`Team Dolphins Score : ${dolphinAverage}`);

const koalaScoreOne = 109;
const koalaScoreTwo = 95;
const koalaScoreThree = 123;
const kolaaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;
console.log(`Team Koalas Score : ${kolaaAverage}`);

const minScore = 100;

if (dolphinAverage > kolaaAverage && dolphinAverage > minScore) {
  console.log("Team Dolphin's are the WINNERS 🏆.");
} else if (kolaaAverage > dolphinAverage && kolaaAverage > minScore) {
  console.log("Team Koala's are the WINNERS 🏆.");
} else {
  console.log(
    "Both teams played well and concluded the competiiton as a DRAW."
  );
}

//BONUS-2
// const dolphinScoreOne = 97;
// const dolphinScoreTwo = 112;
// const dolphinScoreThree = 101;
// const dolphinAverage =
//   (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// console.log(`Team Dolphins Score : ${dolphinAverage}`);

// const koalaScoreOne = 109;
// const koalaScoreTwo = 95;
// const koalaScoreThree = 123;
// const kolaaAverage = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;
// console.log(`Team Koalas Score : ${kolaaAverage}`);

// const minScore = 100;

// if (dolphinAverage > kolaaAverage && dolphinAverage > minScore) {
//   console.log("Team Dolphin's are the WINNERS 🏆.");
// } else if (kolaaAverage > dolphinAverage && kolaaAverage > minScore) {
//   console.log("Team Koala's are the WINNERS 🏆.");
// } else {
//   console.log(
//     "Both teams played well and concluded the competiiton as a DRAW."
//   );
// }

// *****************************************************
// --------------------CHALLENGE - 4--------------------
// *****************************************************
const bill = Number(prompt(`Enter the Value of the bill`));
if (bill < 50) {
  console.log(
    `The bill was ${bill}, The tip was 0 and the Total amount is ${bill}`
  );
} else {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(
    `The bill was ${bill}, The tip was ${tip} and the Total amount is ${
      bill + tip
    }`
  );
}
