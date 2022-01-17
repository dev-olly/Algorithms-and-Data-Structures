var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let max = [];

  while (i <= nums.length - k) {
    let subSum = Number.NEGATIVE_INFINITY;
    for (let j = i; j < i + k; j++) {
      if (nums[j] > subSum) {
        subSum = nums[j];
      }
    }
    nums[i] = subSum;
    i++;
  }
  nums.length = nums.length - k + 1;

  return nums;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(maxSlidingWindow(nums, k));
