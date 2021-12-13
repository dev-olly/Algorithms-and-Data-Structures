var maxSubArray = function (nums) {
  let sum = nums[0];
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    if (sum < current) {
      sum = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return sum;
};

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums = [-2, -1];

console.log(maxSubArray(nums));
