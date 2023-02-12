let points = 0;

let answer1 = prompt("Tomatoes are fruits, not vegetables: true or false");
if (answer1 !== null&& answer1.toLowerCase() === "true") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect.");
  points -= 5;
}

let answer2 = prompt("You should drink 8 glasses of water: true or false");
if (answer2 !== null&&answer2.toLowerCase() === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect.");
  points -= 5;
}

let answer3 = prompt("Fishes have only three seconds of memory: true or false");
if (answer3 !== null&&answer3.toLowerCase() === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect.");
  points -= 5;
}

let answer4 = prompt("The Great Wall of China is the only man made structure visible from space: true or false");
if (answer4 !== null&&answer4.toLowerCase() === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect.");
  points -= 5;
}

console.log("You have " + points + " points.");
