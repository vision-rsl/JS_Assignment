//Question 1

let fullname = prompt("Please enter your full name:");
console.log(fullname);


//Qestion 3

let age = prompt("Please enter your age");
if (age >= 21) {
  console.log("Can drink");
} else {
  console.log("Cannot drink");
}

//Question 3


//substring() is similar to slice().But substring() cannot accept negative indexes.

let str_1 = "Hello world";
let substring = str_1.substring(6, 11);
console.log(substring);

//The replace() method replaces a specified value with another value in a string

let str_2 = "I like to play football";
let replace = str_2.replace("football", "Cricket");
console.log(replace);


//The splice() method adds/removes items to/from an array, and returns the removed item(s).
let country = ["India", "Turkey", "Russia", "Nepal"];
country.splice(2, 0, "USA", "Italy");
console.log(country);