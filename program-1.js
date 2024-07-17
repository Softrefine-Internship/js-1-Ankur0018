// Write a JavaScript program to clone an array.

//Sample array
"use strict";
const arr = [5, 2, 9, 8, 6, 4];

let arr2 = []; //Cloned array

for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}

console.log("Cloned array:", arr2);
