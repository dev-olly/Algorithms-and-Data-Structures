var moveZeroes = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const lastZeroPosition = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[i + 1] === 0) {
      const temp = nums[i];
      nums[i] = 0;
      nums[i + 1] = temp;
      lastZeroPosition = i;
    }
    else if ()
  }

  return nums;
};

const nums = [0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 12];

console.log(moveZeroes(nums));
