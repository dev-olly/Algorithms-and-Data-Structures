var sortArrayByParity = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] % 2 === 1 && nums[j] % 2 === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else if (nums[i] % 2 === 0 && nums[j] % 2 === 1) {
      i++;
    } else {
      j++;
    }
  }

  return nums;
};

// const nums = [3, 1, 2, 4];
// const nums = [0, 1, 2];
const nums = [3, 2, 1, 4, 6, 3, 7];

console.log(sortArrayByParity(nums));
