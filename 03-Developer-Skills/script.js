"use strict";

// // *****************************************************
// // -56.INSTALLING NODE.JS & SETTING UPA DEV ENVIRONMENT-
// // *****************************************************
// let calcAge = (birthYear) => {
//   return 2022 - birthYear;
// };
// console.log(calcAge(1993));

// *****************************************************
// ---------------57.LEARNING HOW TO CODE---------------
// *****************************************************

// *****************************************************
// --------59.USING GOGLE, STACKOVER FLOW & MDN---------
// *****************************************************
//Ex : Calculation the amplitude from the array of temperatues.

// //Problem-1
// let temperatures = [3, 2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let maxTemp = temperatures[0];
// let minTemp = temperatures[0];

// let calAmplitude = (temp) => {
//   for (let i = 0; i <= temp.length - 1; i++) {
//     if (typeof temp[i] !== "number") {
//       continue;
//     } else {
//       if (temp[i] > maxTemp) {
//         maxTemp = temp[i];
//       }
//       if (temp[i] < minTemp) {
//         minTemp = temp[i];
//       }
//     }
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };

// let amplitude = calAmplitude(temperatures);
// console.log(amplitude);

// //Problem-2
// //Merging 2 arrays

// let array1 = [1, 5, 6, 4, 2, 5];
// let array2 = [5, 6, 4, 8, 9, 2, 1, 5];
// let array3 = array1.concat(array2);
// console.log(array3);

// *****************************************************
// -------------60.DEBUGGING (FIXING ERRORS-------------
// *****************************************************
// let array1 = [1, 2, 5, 4, 8];
// let array2 = reverse(array1);
// console.log(array2);

//array2 will not be printed in console, since it does nt know what reverse means. We use Debugging with breakpoints in the code to identity the cause of error.

// // *****************************************************
// // -----61.DEBUGGING WITH THE CONSOLE & BREAK POINTS----
// // *****************************************************

//Ex-1
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "cels",
//     value: Number(prompt("Degree Celsius : ")),
//   };
//   // console.log(measurement);
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//We can also use debbuger in the code (debugger;) whch does the same operation.
