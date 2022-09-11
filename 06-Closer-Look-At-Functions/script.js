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
//   console.log(`Teansformed string is ${fn(str)}`);
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
const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Suresh");
lufthansa.book(635, "Teja");
console.log(lufthansa);
