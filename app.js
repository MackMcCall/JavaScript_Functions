console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    count *= -1;
    for (let i = 0; i < count; i++) {
      if (i % 2 === 1) {
        console.log(-i);
      }
    }
  } else {
    for (let i = 0; i < count; i++) {
      if (i % 2 === 1) {
        console.log(i);
      }
    }
  }
}
let responseE1 = prompt("What number would you like to use for printOdds?");
printOdds(responseE1);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

while (true) {
  var nameResponse = prompt("What is your name?");
  var ageResponse = prompt("What is your age?");

  if (
    typeof nameResponse == "undefined" ||
    typeof ageResponse == "undefined" ||
    nameResponse == "" ||
    ageResponse == "" ||
    nameResponse == null ||
    ageResponse == null
  ) {
    console.log("Sorry, I didn't catch that. Try again.");
    alert("Sorry, I didn't catch that. Try again.");
  } else {
    checkAge(nameResponse, ageResponse);
    break;
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuandrant(x, y) {
  if (x == 0 && y == 0) {
    console.log(`(${x}, ${y}) lies on the origin.`);
  } else if (x == 0 && y > 0) {
    console.log(`(${x}, ${y}) lies on the positive y-axis.`);
  } else if (x == 0 && y < 0) {
    console.log(`(${x}, ${y}) lies on the negative y-axis.`);
  } else if (x > 0 && y == 0) {
    console.log(`(${x}, ${y}) lies on the positive x-axis.`);
  } else if (x < 0 && y == 0) {
    console.log(`(${x}, ${y}) lies on the negative x-axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) lies in the first quadrant.`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) lies in the second quadrant.`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) lies in the third quadrant.`);
  } else if (x > 0 && y < 0) {
    console.log(`(${x}, ${y}) lies in the fourth quadrant.`);
  }
}

while (true) {
  var userX = prompt("What number would you like to use for the x-coordinate?");
  var userY = prompt("What number would you like to use for the y-coordinate?");

  if (
    typeof userX == "undefined" ||
    typeof userY == "undefined" ||
    userX == "" ||
    userY == "" ||
    userX == null ||
    userY == null
  ) {
    console.log("Sorry, I didn't catch that. Try again.");
    alert("Sorry, I didn't catch that. Try again.");
  } else {
    whichQuandrant(userX, userY);
    break;
  }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(side1, side2, side3) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log(
      `The three side lenghts: ${side1}, ${side2}, and ${side3} cannot make a triangle.`
    );
  } else if (side1 == side2 && side1 == side3 && side2 == side3) {
    console.log(
      `A triangle with side lengths ${side1}, ${side2}, and ${side3} is an equilateral triangle.`
    );
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log(
      `A triangle with side lengths ${side1}, ${side2}, and ${side3} is an isosceles triangle.`
    );
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    console.log(
      `A triangle with side lengths ${side1}, ${side2}, and ${side3} is a scalene triangle.`
    );
  }
}

while (true) {
  var userSide1 = prompt(
    "What number would you like to use for the first side length?"
  );
  var userSide2 = prompt(
    "What number would you like to use for the second side length?"
  );
  var userSide3 = prompt(
    "What number would you like to use for the third side length?"
  );

  if (
    typeof userSide1 == "undefined" ||
    typeof userSide2 == "undefined" ||
    typeof userSide3 == "undefined" ||
    userSide1 == "" ||
    userSide2 == "" ||
    userSide3 == "" ||
    userSide1 == null ||
    userSide2 == null ||
    userSide3 == null
  ) {
    console.log("Sorry, I didn't catch that. Try again.");
    alert("Sorry, I didn't catch that. Try again.");
  } else {
    triangleType(userSide1, userSide2, userSide3);
    break;
  }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
  let daysLeft = 30 - day;
  let dataLeft = planLimit - usage;
  if (dataLeft < 0) {
    dataLeft = 0;
  }
  let avgDailyUsage = parseFloat((planLimit / 30).toFixed(1));
  let userCurrentDailyUsage = parseFloat((usage / day).toFixed(1));
  let suggestedFutureDataUsage = parseFloat((dataLeft / daysLeft).toFixed(1));

  console.log(`Day ${day} of 30, ${daysLeft} days remain.`);
  console.log(`Data remaining: ${dataLeft} GB`);
  console.log(
    `Average daily data usage for your plan: ${avgDailyUsage} GB/day`
  );
  console.log(`Current daily data usage: ${userCurrentDailyUsage} GB/day`);

  if (dataLeft == 0) {
    console.log(
      `You are currently out of data. Please wait ${daysLeft} days until your plan renews.`
    );
  } else {
    if (userCurrentDailyUsage > avgDailyUsage) {
      console.log(
        `You are currently exceeding the average daily usage rate.\nContinue at no more than ${suggestedFutureDataUsage} GB/day.`
      );
    } else if (userCurrentDailyUsage < avgDailyUsage) {
      console.log(
        `You are currently under the average daily usage rate.\nYou may continue at no more than ${suggestedFutureDataUsage} GB/day.`
      );
    } else {
      console.log(
        `Your are currently at the average daily usage rate.\nContinue at no more than ${suggestedFutureDataUsage} GB/day.`
      );
    }
  }
}

while (true) {
  var planLimit = prompt("What is your plan's data usage limit?");
  var day = prompt("What is the current day of your plan?");
  var usage = prompt("How much data have you used this cycle?");

  if (
    typeof planLimit == "undefined" ||
    typeof day == "undefined" ||
    typeof usage == "undefined" ||
    planLimit == "" ||
    day == "" ||
    usage == "" ||
    planLimit == null ||
    day == null ||
    usage == null
  ) {
    console.log("Sorry, I didn't catch that. Try again.");
    alert("Sorry, I didn't catch that. Try again.");
  } else {
    dataPlanStatus(planLimit, day, usage);
    break;
  }
}

// BONUS Exercise 5: Data Plan Status
// Write a function that will display feedback on cell phone data usage.
// Cell phone plans for this particular company give you a certain amount of data every 30 days
// which must be used or they are lost (no rollover).
//We want to track the average amount of data used per day and inform the user if they are using too much data or can afford to use more.

// Write a function that accepts the following parameters:

// planLimit: amount of data in the plan per 30 day period
// day: the current day in the 30 day period
// usage: the total amount of data used so far
// The function should compute whether the user is over, under, or right on the average daily usage under the plan.
// It should also inform them of how much data is left and how much, on average, they can use per day for the rest of the month.
// If they’ve run out of data, it should inform them of that too.

// For example, if the user enters planLimit = 100, day = 15, and usage = 56, your program should print out something similar to the following.

// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.
