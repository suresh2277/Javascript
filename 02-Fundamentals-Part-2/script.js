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

// *****************************************************
// ---------------------33.FUNCTIONS--------------------
// *****************************************************
//The fundamental building block of JS applications is Functions()

//WHAT IS A FUNCTION?
// A funciton is a piece of code which is used over and over agian when called.
//A variable holds a valu, whereas a function holds one or more lines of code.

//1.Declare a function
function logger() {
  console.log("My name is Suresh");
}

//2.Calling/Running/Invoking a function
logger();

//We can invoke or call a function as many times as needed in our code.
logger();
logger();
logger();

// A function can also receive data and return data back
function fruitProcessor(apples, oranges) {
  // parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const fruitJuice = fruitProcessor(2, 3); // arguments
console.log(fruitJuice);

// We can call the function again with different arguments
const appleJuice = fruitProcessor("6", 0);
console.log(appleJuice);

// Drawback in the above example is we can also pass string value as an argument, and JS doesn't throw any error.

//Functions are mainly used for implementing DRY(Don't Repeat Yourself) code.
