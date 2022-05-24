// *****************************************************
// --------------32.ACTIVATING STRICT MODE--------------
// *****************************************************
//We have to insert a line of command to use strict mode in JS, which is 'use strict' on the very first line of our script.

//USES
//1. It forbids us to do somethings,
//2.It creates visible errors in developer console,whereas in other situations, JS will fail silently.

//Ex:
"use strict";
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) {
//   hasDriverLicense = true;
// }
// if (hasDriversLicense) {
//   console.log("I can drive.");
// }
// Without strict Mode, JS won't tell us the error and just gives the blank screen on console.To avoid this we must keep ('use strict')string in the start of the script.

//Strict mode also throws an error of (reserved word) when we use reserve keyword.

//Ex:
// let interface = "Audio";

// // *****************************************************
// // ---------------------33.FUNCTIONS--------------------
// // *****************************************************
// //The fundamental building block of JS applications is Functions()

// //WHAT IS A FUNCTION?
// // A funciton is a piece of code which is used over and over agian when called.
// //A variable holds a valu, whereas a function holds one or more lines of code.

// //1.Declare a function
// function logger() {
//   console.log("My name is Suresh");
// }

// //2.Calling/Running/Invoking a function
// logger();

// //We can invoke or call a function as many times as needed in our code.
// logger();
// logger();
// logger();

// // A function can also receive data and return data back
// function fruitProcessor(apples, oranges) {
//   // parameters
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const fruitJuice = fruitProcessor(2, 3); // arguments
// console.log(fruitJuice);

// // We can call the function again with different arguments
// const appleJuice = fruitProcessor("6", 0);
// console.log(appleJuice);

// // Drawback in the above example is we can also pass string value as an argument, and JS doesn't throw any error.

// //Functions are mainly used for implementing DRY(Don't Repeat Yourself) code.

// // *****************************************************
// // -------34.FUNCTION DECLARATION Vs. EXPRESSIONS-------
// // *****************************************************

// //FUNCTION DECLARATION
// function calAge1(birthYear) {
//   return 2022 - birthYear;
// }

// let age1 = calAge1(1993);

// //FUNCTION EXPRESSION
// let calAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// let age2 = calAge2(1993);
// console.log(age1, age2);

// Main difference between function delcaration and function expression is
// We can call function declarations before we define them in the code.

// //Ex:
// let age = calAge(1993);
// console.log(age);

// function calAge(birthYear) {
//   return 2022 - birthYear;
// }

// //Function Expression
// let age3 = calAge4(1993);
// console.log(age3);

// let calAge4 = function (birthYear) {
//   return 2022 - birthYear;
// };

// This throws an error saying(can't access calAge4 before initialization. This happens because of HOISTING.)
// We can write functions in either ways, its completely a personal preference. Prefereably we use expressions since, we do not want to access the function before its declaration in real world.

// // *****************************************************
// // -----------------35.ARROW FUNCTIONS------------------
// // *****************************************************
// //This type of function declaration is introduced in ES6. Arrow function is basically a special form of function expression that is shorter and therefore faster to write.

// //Ex:
// //FUNCTION EXPRESSION
// let calAge1 = function (birthYear) {
//   return 2022 - birthYear;
// };
// let age1 = calAge1(1993);
// console.log(age1);

// //ARROW FUNCTION
// let calAge2 = (birthYear) => 2022 - birthYear;
// let age2 = calAge2(1993);
// console.log(age2);

// console.log(age1, age2);
// //Since this is a special form of Function expression, this function also cannot be called before the declaration.
// //In the above example, we have only 1 parameter(birthYear) and 1 line of code, Lets learn how to give multiple parameters and multiple lines of code using arrow functions.

// let ageUntilRetirement = (birthYear, firstName) => {
//   let age = 2022 - birthYear;
//   let yearsLeftForRetirement = 65 - age;
//   return `${firstName} retires in ${yearsLeftForRetirement} years.`;
// };
// console.log(ageUntilRetirement(1993, "Suresh"));
// console.log(ageUntilRetirement(1991, "Teja"));

// // *****************************************************
// // ---------36.FUNCTIONS CALLING OTHER FUNCTIONS--------
// // *****************************************************

// function cutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   let applePieces = cutPieces(apples);
//   let orangePieces = cutPieces(oranges);

//   let juice = `Juice with ${applePieces} slices of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 5));

// *****************************************************
// ----------------37.REVIEWING FUNCTIONS---------------
// *****************************************************
