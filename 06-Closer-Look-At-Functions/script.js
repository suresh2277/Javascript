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
const flight = "LH234";
const suresh = {
  name: "Suresh Emani",
  passport: 246598745231,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "LH565"), (passenger.name = "Mr. " + passenger.name);
  if ((passenger.passport = 246598745231)) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};
checkIn(flight, suresh);
console.log(flight);
console.log(suresh);

//Ex
