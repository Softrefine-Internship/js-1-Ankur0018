// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

let testArray1 = [1, 2, [3, 4], [5, [6, 7]]];

let flatArray = function (arr) {
  let flatArrayItems = testArray1.toString().split(",");
  let flat_Array = [];
  for (let i = 0; i < flatArrayItems.length; i++) {
    let item = flatArrayItems[i];

    if (!isNaN(item)) {
      flat_Array.push(Number(item));
    } else {
      flat_Array.push(item);
    }
  }
  return flat_Array;
};

console.log(flatArray(testArray1));
