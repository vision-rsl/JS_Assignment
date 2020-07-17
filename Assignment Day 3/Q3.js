console.log("Marks and Grade");

let marks = Number(prompt("Enter your marks between 0-100"));

if (marks < 50) {

  console.log(` Your Marks are '${marks}' and grade is 'F'`);
} else if (marks >= 50 && marks <= 59) {
  console.log(` Your Marks are '${marks}' and grade is 'E'`);
} else if (marks >= 60 && marks <= 69) {
  console.log(` Your Marks are '${marks}' and grade is 'D'`);
} else if (marks >= 70 && marks <= 79) {
  console.log(` Your Marks are '${marks}' and grade is 'C'`);
} else if (marks >= 80 && marks <= 89) {
  console.log(` Your Marks are '${marks}' and grade is 'B'`);
} else if (marks >= 90 && marks <= 100) {
  console.log(` Your Marks are '${marks}' and grade is 'A'`);
} else {
  console.log(`Marks are always out off 100`);
}