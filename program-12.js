// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

"use strict";

function findArrayDifference(arr1, arr2) {
  const differenceArray = [];

  function isInFirstArray(element) {
    return arr1.includes(element);
  }

  function isInSecondArray(element) {
    return arr2.includes(element);
  }

  // Find elements in arr1 that are not in arr2
  for (let i = 0; i < arr1.length; i++) {
    if (!isInSecondArray(arr1[i]) && !differenceArray.includes(arr1[i])) {
      differenceArray.push(arr1[i]);
    }
  }

  // Find elements in arr2 that are not in arr1
  for (let i = 0; i < arr2.length; i++) {
    if (!isInFirstArray(arr2[i]) && !differenceArray.includes(arr2[i])) {
      differenceArray.push(arr2[i]);
    }
  }

  // Sorting using bubble sort
  for (let i = 0; i < differenceArray.length; i++) {
    for (let j = 0; j < differenceArray.length - i - 1; j++) {
      if (differenceArray[j] > differenceArray[j + 1]) {
        let temp = differenceArray[j];
        differenceArray[j] = differenceArray[j + 1];
        differenceArray[j + 1] = temp;
      }
    }
  }

  return differenceArray;
}

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const difference = findArrayDifference(arr1, arr2);
console.log("Difference between arr1 & arr2 is:", difference);
