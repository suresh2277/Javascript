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

/*------------96.THE THIS KEYWORD------------*/
