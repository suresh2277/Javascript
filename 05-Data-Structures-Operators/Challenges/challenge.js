"use strict";
// /************Challenge-1************/
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// /**********Task - 1***********/
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);

// /**********Task - 2***********/
// const [t1Gk, ...t1FieldPlayers] = players1;
// console.log(t1Gk, t1FieldPlayers);

// /**********Task - 3***********/
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// /**********Task - 4***********/
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// /**********Task - 5***********/
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// /**********Task - 6***********/
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// /**********Task - 7***********/
// team1 > team2 && console.log("Team 1 is like to win");
// team1 < team2 && console.log("Team 2 is like to win");

// /************Challenge-2************/
//Task - 1
// for (const [goal, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(goal) + 1} : ${player}`);
// }

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1} : ${player}`);
// }

//Task - 2
// let sum = 0;
// let average = 0;
// const odds = Object.entries(game.odds);
// for (const odd of odds) {
//   sum += odd;
// }
// average = sum / odds.length;
// console.log(average);

//Task-3
//My Solution
// console.log(`Odd of Victory ${game.team1} : ${game.odds.team1}`);
// console.log(`Odd of draw : ${game.odds.x}`);
// console.log(`Odd of Victory ${game.team2} : ${game.odds.team2}`);

//Jonas Solution
// console.log(Object.entries(game.odds));

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "Draw" : ` victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} is ${odd}`);
// }

//Task - 4
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// /************Challenge-3************/
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);
// // //Task-1
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// //Task - 2
// gameEvents.delete(64);
// // console.log(gameEvents);

// //Task - 3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// //To be precise, game lasted for 92Minutes
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //Task-4
// console.log(gameEvents);
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? "First Half" : "Second half";

//   console.log(`[${half}] ${key} : ${value}`);
// }

// /************Challenge-4************/
//Input - Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

//Expected Output - Should produce this output (5 separate console.log outputs):
// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

//Solution
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
