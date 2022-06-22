"use strict";

// const arr = [1, 2, 3];
// //without destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //With Destructuring
// const [x, y] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

// // Data needed for first part of the section
// /*------------------103.DESTRUCTURING ARRAYS------------------*/
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
//   },
// };

// let [main, , secondary, vegan] = restaurant.categories; // We get the elements of categories assigned to main, secondary and vegan respectively.
// console.log("main - ", main);
// console.log("secondary - ", secondary);
// console.log("vegan - ", vegan);

// //If we want to change the order of main and secondary
// [secondary, vegan, main] = [main, secondary, vegan];
// console.log("main - ", main);
// console.log("secondary - ", secondary);
// console.log("vegan - ", vegan);

// //If we have a function inside the object, we can still destructure the array wit huser inputs.Receive 2 return values from a function
// let [starter, mainCourse] = restaurant.order(3, 1);
// console.log("Starter - ", starter);
// console.log("Main-Course - ", mainCourse);

// //Nested Destructuring
// let nested = [1, 2, [3, 4]];
// // let [i, j] = nested;
// // console.log(i, j);

// // let [i, j, k] = nested;
// // console.log(i, j, k);

// // let [i, , j] = nested;
// // console.log(i, j);

// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// let [p, q, r] = [8, , 10];
// // let [p = 1, q = 1, r = 1] = [8, , 10];
// console.log(p, q, r);

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// /*------------------104.DESTRUCTURING OBJECTS------------------*/
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// let { name, starterMenu, order, openingHours, categories } = restaurant;
// console.log(name, starterMenu, order, openingHours, categories);

// let {
//   name: resName,
//   starterMenu: starter,
//   openingHours: hours,
//   categories: varities,
// } = restaurant;

// console.log(resName);
// console.log(starterMenu);
// console.log(order);
// console.log(openingHours);
// console.log(categories);

/*Mutating Objects*/
// let a = 12;
// let b = 20;
// let c = 1;
// let obj = {
//   a: 5,
//   b: 42,
//   c: 63,
// };
// ({ a, b, c } = obj);
// console.log(a, b, c);

/*NESTED OBJECTS*/
// let {
//   fri: { open: a, close: d },
// } = restaurant.openingHours;
// console.log(a, d);

/*------------------105.THE SPREAD OPERATOR------------------*/
let arr1 = [5, 6, 7];
//Without spread operator
let arr2 = [1, 2, 3, 4, arr1[0], arr1[1], arr1[2]];
console.log(arr2);
//With spread operator
let arr3 = [1, 2, 3, 4, ...arr1];
console.log(arr3);

//To add an element to newly created array from an existing array, we use spread operator..
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Consider create a new Main Menu from an existing one
let newMenu = [...restaurant.mainMenu, "Gnocci"];
let newMenu1 = ["Gnocci", ...restaurant.mainMenu];
console.log(newMenu, newMenu1);

//Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const str = "suresh";
console.log(...str, "s");
const letters = [...str, "s"];
console.log(letters);

const a = [1, 1, 2, 5, 4];
const b = [5, 6, ...a];
console.log(...a);
