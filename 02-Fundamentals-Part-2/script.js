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
// //We can mix int and strings in an array in JS.

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
// //JS has some built in functions that we can directly apply on arrays. These are called methods, also can be known as array operations.
// //There are countless array methods in JS, Basic ones are

// const friends = ["Suresh", "Teja", "Vikas", "Jyotish", 65498];

// //Add Elemetns to Array

// //1. PUSH - This method adds elements at the end of an array.
// friends.push("Nikhil");
// console.log(friends);

// //2. UNSHIFT - This method is used to add elements at the beginning of the array.
// friends.unshift("Deepu");
// console.log(friends);

// //Remove Elements in an Array

// //1. POP - This means to remove the last element in an array.
// friends.pop();
// console.log(friends);

// //2. SHIFT - To remove first element in an array.
// friends.shift();
// console.log(friends);

// //If we want to find an element in an array, or to find the position number of an element
// console.log(friends.indexOf("Teja"));

// //If we give an elemtn which is not present in the array
// console.log(friends.indexOf("Deepu"));

// //To check whether if any element is present in the array or not we have include function which is introduced in ES6.
// console.log(friends.includes("Teja"));
// console.log(friends.includes("teja"));
// //It is case sensitive, Hence Teja and teja are 2 different words, so spell correctly

// // *****************************************************
// // -------------42.INTRODUCTION TO OBJECTS--------------
// // *****************************************************
// // Objects are also a data structures.
// // Till now we have use the arrays to store mutiple values in single variable.

// //In objects we define Key - Value pairs.

// const info = {
//   firstName: "Emani",
//   lastName: "Suresh",
//   age: 2022 - 1993,
//   friends: ["Teja", "Nikhil", "Deepu"],
// };

// //In abve example, firstName, lastName, age and friends are keys and respective details are the values. These are combinely known as properties.
// //In arrays, the order which we specify always matters, since to retrieve an element we use their index numbers, whereas for objects we dnt need to see for the order.

// // *****************************************************
// // -------------43.DOT Vs. BRACKET NOTATION-------------
// // *****************************************************
// const info = {
//   firstName: "Emani",
//   lastName: "Suresh",
//   age: 2022 - 1993,
//   friends: ["Teja", "Nikhil", "Deepu"],
// };

// console.log(info);
// //In this way we see all the properties present inside the object.

// //To access any particular property of an object, we use DOT NOTATION.
// console.log(info.lastName);

// //We can also access required property of an onbject by BRACKET NOTATION.
// console.log(info["lastName"]);

// //How to add new properties to an object
// info.location = "Hyderabad";
// console.log(info);

// //Challenge
// console.log(
//   `${info.lastName} has ${info.friends.length} friends, and the best one is ${info.friends[1]}.`
// );

// // *****************************************************
// // ------------------44.OBJECT METHODS------------------
// // *****************************************************
// //Any function that is attached to Object is called Method. We can add function in an object by funcion expression notation, since we can use the varibale storing the functiona a key in the object and the function as value to that key.Function declaration doesn't work here.

// const info = {
//   firsName: "Emani",
//   lastName: "Suresh",
//   birthYear: 1993,
//   job: "teacher",
//   friends: ["Teja", "Nikhil", "Deepu"],
//   hasDriversLicense: true,
//   // calAge: function (year) {
//   //   return 2022 - year;

//   // calAge: function () {
//      //return 2022 - this.birthYear;
//   // },
//   calAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firsName} is a ${this.calAge()}-year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };
// //this keyword is used to follow DRY concept. It means, even if the nae of the object(info) is changed, there is no need to change the return function. this will automatically taes the entire object.
// // console.log(info.calAge());
// // console.log(info["calAge"]());

// //We can also create new property using ths keyword
// console.log(info.age);

// //Challenge
// console.log(info.getSummary());

// // *****************************************************
// // -------------46.ITERATION : THE FOR LOOP-------------
// // *****************************************************
// // console.log("Lifiting weights repetition 1 🏋️‍♂️");
// // console.log("Lifiting weights repetition 2 🏋️‍♂️");
// // console.log("Lifiting weights repetition 3 🏋️‍♂️");
// // console.log("Lifiting weights repetition 4 🏋️‍♂️");
// // console.log("Lifiting weights repetition 5 🏋️‍♂️");
// // console.log("Lifiting weights repetition 6 🏋️‍♂️");
// // console.log("Lifiting weights repetition 7 🏋️‍♂️");
// // console.log("Lifiting weights repetition 8 🏋️‍♂️");
// // console.log("Lifiting weights repetition 9 🏋️‍♂️");
// // console.log("Lifiting weights repetition 10 🏋️‍♂️");

// //Instead of writing the same line for 10 times we can make use of loops
// //For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// // *****************************************************
// // -------47.LOOPING ARRAYS,BREAKING & CONTINUING-------
// // *****************************************************
// //One of the most used applicatons of for loops is to loop through arrays.
// const suresh = ["Suresh", "Nikhil", 1993, ["Teja", "Deepu", "Vikas"]];
// const types = [];

// for (let i = 0; i < suresh.length; i++) {
//   console.log(suresh[i], typeof suresh[i]);
//   // types[i] = typeof suresh[i];

//   //-------------OR----------------
//   types.push(typeof suresh[i]);
// }
// console.log(types);

// //Example:
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   // ages[i] = 2022 - years[i];
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// //CONTINUE & BREAK
// //CONTINUE -  This is used to skip that iteration and continue to the other one.
// for (let i = 0; i < suresh.length; i++) {
//   if (typeof suresh[i] !== "string") {
//     continue;
//   }
//   console.log(suresh[i], typeof suresh[i]);
// }
// //Only string values are lgged in console.

// //BREAK - This is used to completely terminate the loop.
// for (let i = 0; i < suresh.length; i++) {
//   if (typeof suresh[i] === "number") {
//     break;
//   }
//   console.log(suresh[i], typeof suresh[i]);
// }
// //Values till a number ccurs in an array will log in console.

// // *****************************************************
// // ---------48.LOOPING BACKWARDS & OPS IN LOOPS---------
// // *****************************************************
// const suresh = ["Suresh", "Nikhil", 1993, ["Teja", "Deepu", "Vikas"]];
// for (let i = suresh.length - 1; i >= 0; i--) {
//   console.log(i, suresh[i]);
// }

// //LOOP INSIDE LOOP
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`************Starting Exercise - ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} : Lifting weights rep - ${rep} 🏋️‍♂️`);
//   }
// }

// // *****************************************************
// // ------------------48.THE WHILE LOOP------------------
// // *****************************************************
// console.log("*****************From For loop*****************");
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// console.log("*****************From Whhile loop*****************");
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

//Ex
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}.`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`You rolled ${dice}, Loop is about to end.`);
//   }
// }
