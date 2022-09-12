"use strict";

/*****************Lecture - 128 - Default Parameters*****************/
//Without passing all parameters
//Ex
// const bookings = [];
// const createBooking = function (flightNum, numPassengers, price) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123"); // numPassengers : undefined, price : undefined

//Parametrs passed using shortcircuiting(default values)
//Ex
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //Es5
//   // numPassengers ||= 1;
//   // price ||= 199;
//   //In Es6 we can give default values to parameters themselves
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123"); // numPassengers : 1, price : 199
// createBooking("LH123", 2, 800); // numPassengers : 2, price : 800
// createBooking("LH123", 5); // numPassengers : 5, price :995

/*********Lecture - 129 - How Passing Arguments Works: Values and References*********/
//Ex
// const flight = "LH234";
// const suresh = {
//   name: "Suresh Emani",
//   passport: 246598745231,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH565";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 246598745231) {
//     alert("Checked In");
//   } else {
//     alert("Wrong Passport");
//   }
// };
// // checkIn(flight, suresh);
// // console.log(flight);
// // console.log(suresh);

// // const flightNum = flight;
// // const passenger = suresh;

// // //Ex
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };
// newPassport(suresh);
// checkIn(flight, suresh);

// console.log(flight); //flight value remains the same
// console.log(suresh); //value of the passport will be changed

/*********Lecture - 130 - First-class and Higher-Order Functions*********/
//First class functions means, all the functions are treated as values.

// Higher order functions means, a functions that receives another function as an argument and returns a function.It is possible only because of first-class functions.

//1. Function receiving another function as argument
// const greet = () => console.log("Hello Suresh!");
// btnClose.addEventListener("click", greet); // addEventListener is a Higher order Function and greet is a callback function

// //2. Functon that returns new function
// function count() {
//   //Count function is a Higher Order Function
//   let counter = 0;
//   return function () {
//     // This function is a returned function
//     counter++;
//   };
// }

/*********Lecture - 131 - Functions accepting Callback Functions*********/
// const oneWord = function (str) {
//   return str.replace(/ /g, "");
// };

// const upperFirstWord = function (str) {
//   const [first, ...otherWords] = str.split(" ");
//   return [first.toUpperCase(), ...otherWords].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original string is ${str}`);
//   console.log(`Transformed string is ${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };

// transformer("JavaScript is the best", upperFirstWord);

/*********Lecture - 132 - Functions Returning Functions*********/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Suresh");

//Arrow function
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Hey")("Suresh");

/*********Lecture - 133 - The call and apply methods*********/
// const lufthansa = {
//   airLine: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// // lufthansa.book(239, "Suresh");
// // lufthansa.book(635, "Teja");
// // console.log(lufthansa);

// const euroWings = {
//   airLine: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };
// const book = lufthansa.book;
// // book(245, "Sarah"); // this throws error, since this keyword used in line 133 does not have any reference object/calling object
// // but we need to use book function to be used by any object which it was called by.
// //It can be achieved by 3 ways, call, apply and bind

// //a. call
// book.call(euroWings, 23, "Nikhil");
// console.log(euroWings);

// const swiss = {
//   airLine: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };
// book.call(swiss, 654, "Mary");
// console.log(swiss);

// //b.apply()
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);

// //or
// book.call(swiss, ...flightData);

/*******************Lecture - 134 - The bind method*******************/
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // this refers to the button element here.
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Paertial Application of blind
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 200));

// // If we would like to fix the rate value to 0.23 all the tim e and we want to just pass the value
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(120));

// //Same can be written without using bind method
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(120));
