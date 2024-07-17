// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

"use strict";

function insertDashesBetweenEvens(input) {
  let str = input.toString();
  let result = str[0]; // Start with the first digit (no dash initially)

  for (let i = 1; i < str.length; i++) {
    let currentDigit = parseInt(str[i]);
    let previousDigit = parseInt(str[i - 1]);

    if (currentDigit % 2 === 0 && previousDigit % 2 === 0) {
      result += "-" + str[i];
    } else {
      result += str[i];
    }
  }

  return result;
}

let input = "025484";
// input = 024896724568;
let output = insertDashesBetweenEvens(input);

console.log(output);
