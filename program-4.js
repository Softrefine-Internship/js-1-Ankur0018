// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
"use strict";

let arr_1 = [3, 5, 1];
let arr_2 = [4, 2];
let arr_3 = [];

let mergedArray = function (arr_1, arr_2) {
  for (let i = 0; i < arr_1.length; i++) {
    arr_3.push(arr_1[i]);
  }

  for (let j = 0; j < arr_2.length; j++) {
    arr_3.push(arr_2[j]);
  }

  return arr_3;
};

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

mergedArray(arr_1, arr_2);
console.log(array_Sort(arr_3));
