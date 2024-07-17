// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let frequentCount = function (arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }

  let mostFrequent;
  let highestCount = 0;
  for (let item in counts) {
    if (counts[item] > highestCount) {
      highestCount = counts[item];
      mostFrequent = item;
    }
  }

  console.log(`${mostFrequent} ${highestCount} times`);
};

let testarr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
frequentCount(testarr);
