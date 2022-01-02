var moveZeroes = function (nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero++] = nums[i];
    }
  }

  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

// const nums = [0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 12];
const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
