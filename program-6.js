// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

"use strict";

let arr__1 = [1, 2, 3, 4, 5, 6];
let arr__2 = [3, 4, 5, 7];
let arr__3 = [];

let merged_Array = function (arr__1, arr__2) {
  for (let i = 0; i < arr__1.length; i++) {
    arr__3.push(arr__1[i]);
  }

  for (let j = 0; j < arr__2.length; j++) {
    arr__3.push(arr__2[j]);
  }

  let uniqueArray = [];
  for (let k = 0; k < arr__3.length; k++) {
    if (uniqueArray.indexOf(arr__3[k]) === -1) {
      uniqueArray.push(arr__3[k]);
    }
  }

  console.log(uniqueArray);
};

merged_Array(arr__1, arr__2);
