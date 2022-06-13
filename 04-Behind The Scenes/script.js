"use strict";

// /*------------93.SCOPING IN PRACTICE------------*/
// const birthYear = Number(prompt("Enter the year of birth : "));
// let currentYear = new Date().getFullYear();
// let firstName = prompt("Enter your name");

// function calAge() {
//   let age = currentYear - birthYear;

//   function printAge() {
//     const outPut = `${firstName}, you are ${age} years old, As you are born in ${birthYear}.`;
//     /*Js doesn't find firstName and birthYear in current scope and it start searching in it's parent scope.*/
//     console.log(outPut);
//   }
//   printAge();
//   return age;
// }

// calAge();

// /*------------95.HOISTING & TDZ IN PRACTICE------------*/
// // console.log(me);
// // console.log(job);
// // console.log(year);

// // var me = "suresh"; //hoisted to undefined.
// // let job = "trainee"; //job varible is in TDZ(temporial dead zone and cannot be accessed before initializing.)
// // const year = 1993; //year varible is in TDZ(temporial dead zone and cannot be accessed before initializing.

// //Functions
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// let addExp = function (a, b) {
//   return a + b;
// };

// let addArr = (a, b) => a + b;

// //var keyword referes to global window elements..

// //var x =1 is equal to window.x = 1
// // since the value of x is already assigned to 1 in global declaration...

// /*------------97.THE THIS KEYWORD IN PRACTICE------------*/
// //lets first see this keyword outside the function

// console.log(this);
// //This opens window object which is a global one.

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
//   //this gives undefined in the console.
// };
// calcAge(1993);

// // lets see the same case in Arrow function
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
//   //this refers to the parent object in arrow functions.
// };
// calcAgeArrow(1993);

// //lets see a function calling in an object
// const suresh = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this); // it gives he whole suresh object in concole. It is not because this keyword is in suresh object, but it is because the function calcAge()is called with suresh object and this refers to that calling object.
//     console.log(2037 - this.year); //this gives the year value specified in the suresh object
//   },
// };
// suresh.calcAge();

// //lets call the callAge with another object

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = suresh.calcAge;
// matilda.calcAge();

// /*------------100.PRIMITIVES Vs OBJECTS IN PRACTICE------------*/
let lastName = "Suresh";
let oldLastName = lastName;
lastName = "Teja";

console.log(lastName, oldLastName);

let jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

let marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage : ", jessica);
console.log("After Marriage : ", marriedJessica);

//copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log("BeforeMarriage : ", jessica2);
console.log("After Marriage : ", jessicaCopy);
//object.assign() works only on 1st level.
