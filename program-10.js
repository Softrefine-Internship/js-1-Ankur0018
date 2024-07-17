// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function sum_Array(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  let sumArray = [];

  for (let i = 0; i < maxLength; i++) {
    let value1 = i < arr1.length ? arr1[i] : 0;
    let value2 = i < arr2.length ? arr2[i] : 0;
    sumArray.push(value1 + value2);
  }

  return sumArray;
}

let sampleArray1 = [1, 0, 2, 3, 4];
let sampleArray2 = [3, 5, 6, 7, 8, 13];

console.log(sum_Array(sampleArray1, sampleArray2));
