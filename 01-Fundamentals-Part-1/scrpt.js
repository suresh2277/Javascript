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
// // ------------17.Strings & Template Literals-----------
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
// // ----------------18.if/else statements----------------
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
// // ---------20.Type Conversion & Type Coercion----------
// // *****************************************************
const inputYear = "1991";
console.log(inputYear + 18);
const inputYearInNumber = Number(inputYear);
console.log(inputYearInNumber + 18);
