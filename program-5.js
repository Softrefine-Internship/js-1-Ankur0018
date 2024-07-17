/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  let count = n;
  const size = flowerbed.length;

  for (let i = 0; i < size; ++i) {
    if (flowerbed[i] === 0) {
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
      const nextEmpty = i === size - 1 || flowerbed[i + 1] === 0;

      if (prevEmpty && nextEmpty) {
        flowerbed[i] = 1;
        count--;

        if (count === 0) {
          return true;
        }
      }
    }
  }

  return count <= 0;
}

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1));

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2));
