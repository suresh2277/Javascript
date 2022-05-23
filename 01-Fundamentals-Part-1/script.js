// let js = "amazing";
// if (js === "amazing") {
//   alert("JavaScript is Fun");
// }

// console.log("Result is : ", 4 + 5 - 2 * 3 + 4 + 7 / 2);

// let firstName = "suresh";
// console.log(firstName);

// let firstName = 1234;
// console.log(typeof firstName);
// console.log(typeof "emani");

// let currentYear = 2022;
// let sureshAge = currentYear - 1993;
// let nikhilAge = currentYear - 1996;
// console.log(
//   "Suresh is",
//   sureshAge,
//   "years old & Nikhil is",
//   nikhilAge,
//   "years old."
// );

// let x = 10 + 5;
// x += 10; // x = x + 4; x++ =x + 1;
// console.log(x);

// console.log(54 > "suresh");

// // *****************************************************
// // ------------17.STRINGS & TEMPLATE LITERALS-----------
// // *****************************************************
// const firstName = "emani";
// const job = "developer";
// const birthYear = 1993;
// const currentYear = 2022;
// const age = currentYear - birthYear;

// const emani = "I'am " + firstName + ", a " + age + "year old " + job + "!";
// console.log(emani);

// const emaninew = `I'am ${firstName}, a ${age} year old ${job}!`;
// console.log(emaninew);

// //Multi lines using template literal
// console.log(
//   "bduvbs hiuhvsuhaiu hh hus uahgauhg a'jgkjrg hrr8h9 h9898g8rhga;iguahu uhughr uhwfuhw w9u-w w9uw89uf8yh7 7 74hgu uhuw uegywgwuig ugfwyg gfugfygrgff wugfwu b afhjbfbwbw beffbhfk jbuyvks feb nudbfus hbub bgfbgbar ygywfbw hwlo ths is siresh and iam doinf welll i hioew ou are doing well toosfjsbb njvb uh ssgibub fnsjfnsiueh seufhw g."
// );

// console.log(
//   `bduvbs hiuhvsuhaiu hh hus uahgauhg a'jgkjrg hrr8h9 h9898g8rhga;
//   iguahu uhughr uhwfuhw w9u-w w9uw89uf8yh7 7 74hgu uhuw uegywgwuig ugfwyg gfugfygrgff
//   wugfwu b afhjbfbwbw beffbhfk jbuyvks feb nudbfus hbub bgfbgbar ygywfbw hwlo ths is siresh and iam doinf
//   welll i hioew ou are doing well toosfjsbb njvb uh ssgibub fnsjfnsiueh seufhw g.`
// );

// // *****************************************************
// // ----------------18.if/else STATEMENTS----------------
// // *****************************************************
// const ageLimit = 18;
// const age = 15;

// if (age >= 18) {
//   console.log(`You can apply for a driving license🚗.`);
// } else {
//   console.log(
//     `You are not eligible to apply for a driving license. You have to wait for ${
//       ageLimit - age
//     } more years to apply for a license.`
//   );
// }

// // *****************************************************
// // ---------20.TYPE CONVERSION & TYPE COERCION----------
// // *****************************************************
// //Type Cnversion
// const inputYear = "1991";
// console.log(inputYear + 18);
// const inputYearInNumber = Number(inputYear);
// console.log(inputYearInNumber + 18);

// // Similarly we can convert number to a stirng
// const age = 22;
// const firstName = String(22);
// console.log(firstName + 20);

// //Type Coercion
// console.log("Iam " + 23 + " years old.");

// let num = "10" - 5;
// console.log(typeof(num))
// console.log("23" + "10" + 5); //23105
// console.log("23" + "10" - 5); //2305
// console.log("23" - "10" - 5); //8
// console.log(("23" + "10") / 5); //462
// console.log("23" + "10" / 5); //10

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// *****************************************************
// --------------21.TRUTHY & FALSY VALUES---------------
// *****************************************************
// 5 falsy values are - 0 , "", Undefined, null, NAN
// const money = 0
// if(money)
// {
//     console.log("Dpn't spend it all.")
// }
// else{
//     console.log("You get a job.")
// }

//Since money is initialized with zero, and ot is a falsy value, so if block was skipped and else block was executed.

//Let's try the same with some other value for money(int, string)

//**********int
// const money = 100
// if(money)
// {
//     console.log("Dpn't spend it all.")
// }
// else{
//     console.log("You get a job.")
// }

//***********string
// const money = "Suresh"
// if(money)
// {
//     console.log("Dpn't spend it all.")
// }
// else{
//     console.log("You get a job.")
//}

//*****Without initialization
// let height;
// if(height)
// {
//     console.log("Yay! Height is defined")
// }
// else{
//     console.log("Height is undefined")
// }

// *****************************************************
// ----------------22.EQUALITY OPERATORS----------------
// *****************************************************
//We use === as an equality operator, whereas in other programming languages, we use == as equality operator. In JS, difference between both the notations is === is strictly typed("18" is not equal to 18), whereas with == which is loosely typed("18" is equal to 18).
// const age = 18
// if(age === "18")
// {
//     console.log("This equality is strongly typed.");
// }
// else if(age == "18"){
//     console.log("This equality is loosely typed.")
// }

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(typeof(favourite))
// console.log(favourite)

// //Similar to equality, we have not equal notation(!==)
// if(favourite !== 10)
// {
//     console.log("Given number is not 10.")
// }
// else if(favourite === 10)
// {
//     console.log(`Entered number is ${favourite}.`)
// }

// *****************************************************
// ------------------23.BOOLEAN LOGIC-------------------
// *****************************************************
// AND, OR, NOT operators

// // *****************************************************
// // ----------------24.LOGICAL OPERATORS-----------------
// // *****************************************************
// const hasDriversLicense = true;
// // const hasGoodVision = true;
// const hasGoodVision = false;

// // if (hasDriversLicense && hasGoodVision) {
// if (hasDriversLicense || hasGoodVision) {
//   console.log("You can drive yourself.");
// } else {
//   console.log("You cannot drive by Yourself, You need a driver.");
// }

// // *****************************************************
// // ----------------26.SWITCH STATEMENT------------------
// // *****************************************************
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure.");
//     console.log("Go to coding meetup.");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos.");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples.");
//     break;
//   case "friday":
//     console.log("Record videos.");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend🤩.");
//     break;
//   default:
//     console.log("Not a valid day.");
// }

// // *****************************************************
// // -------------27.STATEMENTS & EXPRESSIONS-------------
// // *****************************************************
//Expressions always return a value(4 * 3)
//Statements are those which just prints what user defines, Mostly statements are those which ends with ;

// // *****************************************************
// // ---------28.THE CONDITIONAL(TERNARY)OPERATOR---------
// // *****************************************************
// const age = 15;
// age >= 18
//   ? console.log("I'am good with a glass of wine🍷.")
//   : console.log("I'am good with a softdirnk🥤.");

// //OR
// const drink = age >= 18 ? "Wine🍷" : "Softdirnk🥤";
// console.log(drink);

// //In template literals, we cannot use an if/else statement, but we can use ternary operator in template literal;
// console.log(
//   `I would like to have some ${age >= 18 ? "Wine🍷" : "Softdirnk🥤"}`
// );

// *****************************************************
// ---------30.JS RELEASES: ES5, ES6+ & ESNext----------
// *****************************************************
//Though we are using ES6, It is better to learn how things used to work in ES5, Because there might be still applications in organizations which are built on Es5 and left without changing.
