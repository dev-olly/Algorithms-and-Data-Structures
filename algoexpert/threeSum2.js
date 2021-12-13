function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const threeSum = [];
  let i = 0;

  while (i < array.length) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      } else {
        const threeDigits = [array[i], array[left], array[right]];
        threeSum.push(threeDigits);
        left++;
        right--;
      }
    }
    i++;
  }
  return threeSum;
}

const arr = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

console.log(threeNumberSum(arr, targetSum));
