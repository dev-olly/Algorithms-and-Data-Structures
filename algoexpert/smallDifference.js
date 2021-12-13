function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  let sortedArrayOne = arrayOne.sort((a, b) => a - b);
  let sortedArrayTwo = arrayTwo.sort((a, b) => a - b);
  let currentPair = [];
  let smallestSum = Infinity;
  for (const item of sortedArrayTwo) {
    let i = 0;
    while (i < sortedArrayOne.length) {
      const difference = Math.abs(sortedArrayOne[i] - item);
      if (difference < smallestSum) {
        smallestSum = difference;
        currentPair = [sortedArrayOne[i], item];
      }
      i++;
    }
  }
  return currentPair;
}

const arr1 = [10, 0, 20, 25];
const arr2 = [1005, 1006, 1014, 1032, 1031];

console.log(smallestDifference(arr1, arr2));
