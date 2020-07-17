console.log("Q3 using ternary Operator");
let marks1 =Number(prompt("Enter your marks1 between 0-100"));
  marks1 < 50
    ? console.log(`Marks are '${marks1}' and grade is 'F'`)
    : marks1 >= 50 && marks1 <= 59
    ? console.log(`Marks are '${marks1}' and grade is 'E'`)
    : marks1 >= 60 && marks1 <= 69
    ? console.log(`Marks are '${marks1}' and grade is 'D'`)
    : marks1 >= 70 && marks1 <= 79
    ? console.log(`Marks are '${marks1}' and grade is 'C'`)
    : marks1 >= 80 && marks1 <= 89
    ? console.log(`Marks are '${marks1}' and grade is 'B'`)
    : marks1 >= 90 && marks1 <= 100
    ? console.log(`Marks are '${marks1}' and grade is 'A'`)
    : console.log(`Marks are '${marks1}' and pls type between 0-100`);
