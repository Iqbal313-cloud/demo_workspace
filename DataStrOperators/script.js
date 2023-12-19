const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// const [first, , second] = restaurant.starterMenu;
// console.log(first, second);

const MainMenu = [...restaurant.mainMenu];
// console.log(MainMenu);

// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
// console.log(open, close);
console.log(o, c);

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//objects

const newRestaurant = { founder: "iqbal", ...restaurant };
console.log(newRestaurant);
console.log(restaurant);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  country: "USA",
};

// Now, you can use object destructuring to extract specific properties from this
// object. Here are a few questions:

//     How would you extract the firstName and lastName from the person
// object using object destructuring

const { firstName = "not available", lastName } = { ...person };
console.log(firstName, lastName);

const { fri, ...Weekdays } = restaurant.openingHours;
console.log(Weekdays);

restaurant.orderPizza("potato", "vegatable", "chichken", "askdfj");

console.log(3 || "iqbal"); // in case of or short circutting means if 1st value is truthy it will immediatle return that

console.log("iqbal" || 3);

console.log("" || "jonas");
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
const gueest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(gueest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);
console.log("---- AND ----");

console.log(" " && 3);
console.log("iqbal" && " ");
console.log(0 && "Jonas");
console.log("Hello" && 23 && null && "jonas");

//
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "potato");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests ||= 10;
// console.log(rest1);
// rest1.numGuests = rest1.numGuests || 10;
// console.log(rest1);
const corrected = (rest1.numGuests ??= 10);
console.log(corrected);
// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = res;
// console.log(rest1);
// console.log(rest2);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we are open at ${open}`);
}
// openingHours: {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];
// console.log(users[1].name ?? "user array empty");
// //for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1} is : ${ele}`);
}

const newArray = Object.entries(restaurant.openingHours);
console.log(newArray);

console.log(`we are open on ${newArray.length} days`);

// [key, value]

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const eachPlayer = [...game.scored.entries()];

for (const [x, item] of eachPlayer) console.log(`Goal ${x + 1} : ${item}`);

/* 
Let's continue with our football betting app!

1. 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }


GOOD LUCK 😀
*/
// const solved = Object.values(game.odds);
// let average = 0;

// for (const odd of solved) average += odd;
// average /= solved.length;

// console.log(average);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;

const orderSet = new Set([
  "pasta",
  "pasta",
  "pasta",
  "Pizza",
  "Pizza",
  "Risotto",
]);

console.log(orderSet);
console.log(new Set("iqbbbbaaal"));
console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(orderSet.has("iqbal"));
orderSet.add("alupotol");
console.log(orderSet);
orderSet.delete("alupotol");
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const stuffUnique = new Set([...staff]);
console.log(stuffUnique);

console.log(new Set([...staff]).size);
console.log(new Set("muhammad iqbal").size);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// convert object to map

console.log(Object.entries(restaurant.openingHours));

const copiedMap = new Map(Object.entries(restaurant.openingHours));
console.log(copiedMap);

//quiz app

// console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value} `);
}

const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));
// Maps: Fundamentals
//Sun Dec 10 10:40:55 PM +06 2023

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete("name");
// rest.clear();
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average,
 every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `an event happened, on average every ${92 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents.entries()) {
  if (key <= 45) console.log(`[FIRST HALF]: ${key}: ${value}`);
  else console.log(`[2nd HALF]: ${key}: ${value}`);
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

const airline = "TAP air portugal";
// console.log(airline.length);
console.log("iqbal".length);

console.log(airline.indexOf(" "));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("portugal"));

console.log(airline.includes("r"));

console.log(airline.slice(0, 7));

console.log(airline.slice(-2));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(typeof new String("jonas"));
console.log(typeof new String("iqbal").slice(1));

// Working With Strings - Part 2
const [middle, halmiddle] = "Muahmmad iqbal".split(" ");
console.log(middle, halmiddle);

const newVariable = ["md.", middle.toUpperCase(), halmiddle.toUpperCase()].join(
  " "
);
console.log(newVariable);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

const capitalName = function (name) {
  const names = name.split(" ");
  const uppered = [];
  for (const n of names) {
    uppered.push(n.replace(n[0], n[0].toUpperCase()));
    // uppered.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(uppered.join(" "));
};

capitalName("muhammad mehdi hasan");

const checked = "go to the mosque";
console.log(checked.length);
console.log(checked.padStart(20, "+").padEnd(30, "-"));
//          ++++go to the mosque----------

const maskCreditCard = function (number) {
  const str = number + "";
  const str2 = str.slice("-4");
  return str2.padStart(str.length, "*");
};

console.log(maskCreditCard(6542621645));

const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInwait = function (n) {
  console.log(`There are ${n} plane is waiting ${"🛩".repeat(n)}`);
};

// planesInwait(5);
planesInwait(12);

const email = "example@gamil.com";
const loginmail = "     EXAMPLe@gamil.com \n";

const normalizedmail = loginmail.toLowerCase().trim();
//trim for removing whitespace and /n
console.log(email === normalizedmail);

const priceGB = "288,97£";

console.log(priceGB.replace("£", "$"));

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace(/door/g, "gate"));

console.log(announcement.replaceAll("door", "gate"));

const plane = "Airbus A320neo";

console.log(plane.includes("airbus"));
console.log(plane.startsWith("Airbs"));

const checkbagge = function (baggage) {
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are not allowed on the board");
  } else console.log("you are allowed");
};

// checkbagge("I have a laptop, some Food and a pocket Knife");
checkbagge("Socks and camera");

/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

// const firstName = 'Jonas';
calcAge(1991);
//  console.log(age);
printAge();
