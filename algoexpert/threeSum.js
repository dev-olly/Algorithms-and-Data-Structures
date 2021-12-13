function threeSum(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);

  let numbersOfThreeSum = 0;

  for (let idx = 0; idx < sortedArr.length - 2; idx++) {
    let left = idx + 1;
    let right = sortedArr.length - 1;
    while (left < right) {
      const sum = sortedArr[idx] + sortedArr[left] + sortedArr[right];

      if (sum === target) {
        numbersOfThreeSum++;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }
  console.log(numbersOfThreeSum);
}

const arr = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0;

threeSum(arr, target);
