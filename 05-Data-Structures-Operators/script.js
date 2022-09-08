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

//   orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderpasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
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
// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanna Rossi",
// };

// rest1.owner &&= "anonymous"; // nothing happens
// // rest1.owner = "anonymous" && rest1.owner; //undefiend
// rest2.owner &&= "anonymous"; //anonymous

// console.log(rest1);
// console.log(rest2);

/*-------------111. Looping Arrays: The for-of Loop--------------*/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }
// //To get the item number/ current item
// for (const item of menu.entries()) {
//   console.log(item);
// }

//Or
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

/*-------------112. Enhanced Object Literals--------------*/
//1.object in other objects

//Traditional way
// restaurant.openingHours = openingHours;

//Enhanced way
//Introduce variable with same name as object in main object
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderpasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
//   openingHours,
// };

// console.log(restaurant);

//2. Function in object
//Traditional Way
const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
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
  openingHours,
};

//Enhanced Way
//Introduce variable in main object
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
//   },

//   orderDelivery({ starterIndex, mainIndex, address, time }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderpasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
//   openingHours,
// };

//3. Computing property names

/*-------------113. Optional Chaining(?.)--------------*/
// console.log(restaurant.openingHours.mon); // undefiend
// console.log(restaurant.openingHours.mon.open); //Cannot read properties of undefined

// //We can check this by
// if (restaurant.openingHours.mon) {
//   console.log(res);
// }

// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
// //we have to check for opening hours in restaurant object too

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// //Optional Chaining - to avoid long nested conditions
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// //Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Here, on saturdays, we have zero, it means shop is not closed, but still it shows shop opens at zero, we need nullish operator

// //Methods
// console.log(restaurant.order?.(1, 3) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(1, 3) ?? "Method does not exist");

// //Arrays
// const users = [{ name: "Suresh", email: "hello@abc.io" }];
// //Traditionl way
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log("User array is empty");
// }

// //Using Optional Chaining
// console.log(users[0]?.name ?? "User array is empty");

/*-------------114. Looping Objects : Object Keys, Values & Entries--------------*/
// //Keys
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days : `;

// for (const day of properties) {
//   openStr += `${day} `;
// }
// console.log(openStr);

// //Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
//   console.log(x);
// }

// //or

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, We open at ${open} and close at ${close}`);
// }

// /*-------------116. Sets--------------*/
// const ordersSet = new Set([
//   "Pizza",
//   "Pasta",
//   "Risotto",
//   "Pizza",
//   "Risotto",
//   "Pasta",
// ]);
// console.log(ordersSet);

// //Case Sensitive
// console.log(new Set("Suresh"));

// //Size of a set
// console.log(ordersSet.size);

// //Finding an item inside a set
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));

// //Adding an item to Set
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// console.log(ordersSet);

// //Deleting items in a Set
// ordersSet.delete("Pizza");
// console.log(ordersSet);

// //Looping a set
// for (const order of ordersSet) {
//   console.log(order);
// }

// //Use case of Sets
// const staff = ["Waiter", "Chef", "Manager", "Waiter", "Chef", "Manager"];
// let staffUnique = new Set(staff);
// console.log(staffUnique);

// //Creating a new array using set
// staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //Clear all the elements from a set
// ordersSet.clear();
// console.log(ordersSet);

// /*-------------117. Maps--------------*/
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon,Portugal"));

// rest
//   .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("Open", 11)
//   .set("Close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");
// console.log(rest);

// // Retrieving an item from maps
// console.log(rest.get("name"));
// console.log(rest.get(true));

// //Has Method
// console.log(rest.has("name"));

// //Delete Method
// rest.delete(2);
// console.log(rest);

// //Size
// console.log(rest.size);

// //Clear
// rest.clear();
// console.log(rest);

//Array as a key
// rest.set([1, 2], "Test");
// console.log(rest.get([1, 2])); // Will not retrieve this
//Instead create a variable for array and assign that variable to retreive the value
// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

// //DOM
// rest.set(document.querySelector("h1"), "heading");
// console.log(rest);

// /*-------------118. Maps - Iterations--------------*/
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["Correct", 3],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);
// console.log(question);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Iteration
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Option ${key} : ${value}`);
//   }
// }

// const answer = Number(prompt("Your Answer?"));
// // console.log(answer);
// console.log(question.get(answer === question.get("Correct")));

// //Convert Map to Array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.entries()]); // same as [...question]
// console.log([...question.values()]);

// /*-------------119. Summary : Which DataStructure to Use--------------*/
//Theory

// /*-------------120. Challenge--------------*/

// /*-------------121. Working With Strings Part - 1--------------*/
const airLine = "TAP Air Portugal";
const plane = "A320";
// console.log(plane[0]);
// console.log(plane[1]);

// //Length
// console.log(airLine.length);
// console.log("Ballari".length);

// //Methods
// //indexOf()
// console.log(airLine.indexOf("r"));

// //lastIndexOf()
// console.log(airLine.lastIndexOf("r"));

// //Sclice
// console.log(airLine.slice(4, 9));

// //Negatives
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// //Ex
// const checkMiddleSeat = (seat) => {
//   const s = seat.slice(-1);
//   if (s === "B" || s === " E") {
//     console.log("You got the middle Seat");
//   } else {
//     console.log("You are lucky");
//   }
// };
// checkMiddleSeat("11C");
// checkMiddleSeat("15E");
// checkMiddleSeat("10C");
// checkMiddleSeat("13B");
// checkMiddleSeat("17C");
// console.log(typeof airLine); // String
// console.log(typeof new String(airLine)); // Object
// console.log(typeof new String(airLine).slice(1)); // String

// /*-------------122. Working With Strings Part - 2--------------*/
// // toLowerCase()
// console.log(airLine.toLowerCase());

// //toUpperCase()
// console.log(airLine.toUpperCase());

// //Fixing Capitalization in name
// const passenger = "sUrEsH";
// const passengerLower = passenger.toLowerCase();

// //Comparing Emails
// const email = "hello@suresh.io";
// const logInEmail = "  Hello@Suresh.Io";

// const normalizedEmail = logInEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);

// //replace()
// const priceGB = "288,97#";
// const priceUs = priceGB.replace("#", "$").replace(",", ".");
// console.log(priceUs);

// //replaceAll()
// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));

// //Regular Expression to replace all the occurances of the given word
// console.log(announcement.replace(/door/, "gate"));

// //Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcomme aboard");
//   }
// };
// checkBaggage("I have a laptop, some food and a pocket knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// /*-------------123. Working With Strings Part - 3--------------*/
console.log("a+very+nice+string".split("+"));
console.log("Suresh Emani".split(" "));

//Split
const [firstName, lastName] = "Suresh Emani".split(" ");
console.log(firstName);
console.log(lastName);

//Join
console.log([`Mr.${firstName}`, lastName].join(" "));

//Captialize Name Function
const capitalizedName = function (sentence) {
  const words = sentence.split(" ");
  const capital = [];
  for (const word of words) {
    // capital.push(word[0].toUpperCase() + word.slice(1));
    //or
    capital.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(capital.join(" "));
};
capitalizedName("hello how are you");

//Padding
const message = "Go to gate number 23!";
console.log(message.padStart(15, "+")); // given length is less than message than length, so no extra character will be added to the string
console.log(message.padStart(26, "+").padEnd(30, "+")); // if we give both padStart and padEnd in same line, then it is always better to give small number for padStart than padEnd

//Masking the card detais in real life
const cardNUmber = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(cardNUmber(5698745215987456));
