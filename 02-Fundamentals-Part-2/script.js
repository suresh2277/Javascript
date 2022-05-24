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

// // *****************************************************
// // -------------39.INTRODUCTION TO ARRRAYS--------------
// // *****************************************************
// //Arrays are the first data structures
// //In general, if we have to save our friends names in a database we usually assign each name to a variable and save them, which is a hectic task to do if the list is bigger.
// let friend1 = "Suresh";
// let friend2 = "Teja";
// let friend3 = "Vikas";
// let friend4 = "Jyotish";

// //As the list goes on, it is getting a tidious task to assign each one of them to a new variable, To avoid this we have a data structure called Array
// let friends = ["Suresh", "Teja", "Vikas", "Jyotish", 65498];
// console.log(friends);

// //We can also create array in another way, which is in a function form. But we generally use Square syntax.
// let year = new Array(1994, 1896, 1924, 2001, "January");
// console.log(year);
// //We can mix init and strings in an array in JS.

// //To access individual items in Array
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(year[2]);
// console.log(year[5]); // It gives an undefined msg since the mentioned is out of range

// //To know the length of an array or to know the number of items in an array
// console.log(friends.length);

// //We can change an elemnt valus inside an array using its index
// friends[1] = "Nikhil";
// console.log(friends);
// //An array is not a primitive value and hence the value is not immutable, it means if we keep const in place of let while declaring friends array, and later we can change the value inside it even if it is const

// //We can also put one array inside another array
// const info = ["firstName", friends];
// console.log(info);

// //Exercise - Implementing Arrays with a function
// let calAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const years = [1990, 1993, 1985, 2001, 1996];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[2]);
// const age3 = calAge(years[years.length - 1]);

// //We can also save these individual values in an array
// const ages = [age1, age2, age3];
// //OR
// const age = [
//   calAge(years[0]),
//   calAge(years[2]),
//   calAge(years[years.length - 1]),
// ];
// console.log(ages);
// console.log(age);

// // *****************************************************
// // ---------40.BASIC ARRAY OPERATIONS(METHODS)----------
// // *****************************************************
//JS has some built in functions that we can directly apply on arrays. These are called methods, also can be known as array operations.
//There are countless array methods in JS, Basic ones are

const friends = ["Suresh", "Teja", "Vikas", "Jyotish", 65498];

//Add Elemetns to Array

//1. PUSH - This method adds elements at the end of an array.
friends.push("Nikhil");
console.log(friends);

//2. UNSHIFT - This method is used to add elements at the beginning of the array.
friends.unshift("Deepu");
console.log(friends);

//Remove Elements in an Array

//1. POP - This means to remove the last element in an array.
friends.pop();
console.log(friends);

//2. SHIFT - To remove first element in an array.
friends.shift();
console.log(friends);

//If we want to find an element in an array, or to find the position number of an element
console.log(friends.indexOf("Teja"));

//If we give an elemtn which is not present in the array
console.log(friends.indexOf("Deepu"));

//To check whether if any element is present in the array or not we have include function which is introduced in ES6.
console.log(friends.includes("Teja"));
console.log(friends.includes("teja"));
//It is case sensitivr, hence Teja and teja are 2 different words, so spell correctly
