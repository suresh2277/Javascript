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

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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

//passing an object as an argument
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

/*------------------105.THE SPREAD OPERATOR------------------*/
// let arr1 = [5, 6, 7];
// //Without spread operator
// let arr2 = [1, 2, 3, 4, arr1[0], arr1[1], arr1[2]];
// console.log(arr2);
// //With spread operator
// let arr3 = [1, 2, 3, 4, ...arr1];
// console.log(arr3);

// //To add an element to newly created array from an existing array, we use spread operator..

// //Consider create a new Main Menu from an existing one
// let newMenu = [...restaurant.mainMenu, "Gnocci"];
// let newMenu1 = ["Gnocci", ...restaurant.mainMenu];
// console.log(newMenu, newMenu1);

// //Shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const str = "suresh";
// console.log(...str, "s");
// const letters = [...str, "s"];
// console.log(letters);

// const a = [1, 1, 2, 5, 4];
// const b = [5, 6, ...a];
// console.log(...a);

//Passing a spread operator as an argument
// const ingredients = [
//   prompt(`Let's make Pasta! Ingredient 1?`),
//   prompt(`Let's make Pasta! Ingredient 2?`),
//   prompt(`Let's make Pasta! Ingredient 3?`),
// ];

// restaurant.orderpasta(...ingredients);

/*------------------106. Rest Pattern and Parameters------------------*/
//1.Destructuring
// //Spread, because on right side
// const arr = [1, 2, ...[3, 4]];

// //Rest, because on left side
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

//Rest - Objects
// const { sat, ...weekdays } = { ...restaurant.openingHours };
// console.log(weekdays);

//2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(numbers);
//   console.log("Sum = ", sum);
// };
// add(2, 3);
// add(3, 5, 2, 1);
// add(6, 8, 5, 4, 1, 2, 9, 6, 2, 1, 5);

//Passing individual values as argument to function
// restaurant.orderPizza("Paneer", "Corn", "Onion", "Olives", "Cheese");

/*------------------107. Short Circuiting (&& and ||)------------------*/
//Logical operators can use any datatypes, they can return any data types and they use Short circuiting.
//OR
// console.log(3 || "Suresh"); //3
// console.log(undefined || "Suresh"); //suresh
// console.log(undefined || null); // null
// console.log("" || 3); // 3
// console.log("" || undefined); //undefined

// //AND
// console.log(7 && "Suresh"); // "Suresh"
// console.log(8 && 9); // 9
// console.log("" && 7); //""
// console.log(null && "suresh"); // null
// console.log("Hello" && 23 && null && undefiend); // null
// console.log(null && undefined); //null
// console.log(undefined && null); // undefined

/*------------------108. The NUllish Coalescing Operator(??)------------------*/
// const guestCurrent = restaurant.numGuests ?? 10;
// console.log(guestCurrent); // 10

// console.log(0 ?? 10); //0
// console.log(null ?? 10); //10
// console.log(undefined ?? 0); // 0
// console.log("suresh" ?? 0); //suresh

/*---------109. Logical Assignment Operators (Shot form for short-circuiting)------------------*/
//Via short-Circuiting
// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

//OR Logical Assignment Operator
// const rest1 = {
//   name: "Capri",
//   numGuests: 20, // (if numGuests == 0, then rest1.numGuests will be assigned to 10 which is wrong, so use nullish operator to consider zero and empty string as truthy values)
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

//Via

//Nullish Assignment Operator
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanna Rossi",
// };

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// //And Operator(Short-circuiting)
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanna Rossi",
// };

// rest1.owner = rest1.owner && "anonymous"; //undefiend
// // rest1.owner = "anonymous" && rest1.owner; //undefiend
// rest2.owner = rest2.owner && "anonymous"; //anonymous

// console.log(rest1);
// console.log(rest2);

//And Operator(Logical Assignment Operator)
const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanna Rossi",
};

rest1.owner &&= "anonymous"; // nothing happens
// rest1.owner = "anonymous" && rest1.owner; //undefiend
rest2.owner &&= "anonymous"; //anonymous

console.log(rest1);
console.log(rest2);
