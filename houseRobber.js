var rob = function (nums) {
  let i = 0;
  let j = 1;
  let firstMax = 0;
  let secondMax = 0;
  while (i < nums.length) {
    firstMax += nums[i];
    i = i + 2;
  }

  while (j < nums.length) {
    secondMax += nums[j];
    j = j + 2;
  }

  return Math.max(firstMax, secondMax);
};

// const nums = [2, 7, 9, 3, 1];
const nums = [1, 2];

console.log(rob(nums));
