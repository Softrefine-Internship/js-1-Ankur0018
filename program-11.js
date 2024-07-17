// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

"use strict";

let array_1 = [1, 2, 3];
let array_2 = [100, 2, 1, 10];
let array_3 = [];

let array_Union = function (array_1, array_2) {
  for (let i = 0; i < array_1.length; i++) {
    array_3.push(array_1[i]);
  }

  for (let j = 0; j < array_2.length; j++) {
    array_3.push(array_2[j]);
  }

  let unionArray = [];
  for (let k = 0; k < array_3.length; k++) {
    if (unionArray.indexOf(array_3[k]) === -1) {
      unionArray.push(array_3[k]);
    }
  }

  const array_Sort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  };

  array_Sort(unionArray);
  console.log(unionArray);
};

array_Union(array_1, array_2);
