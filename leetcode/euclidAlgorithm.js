var findGCD = function (nums) {
  let max = 0;
  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }

    if (nums[i] > max) {
      max = nums[i];
    }
  }

  while (min) {
    [min, max] = [max % min, min];
  }

  return max;
};

const nums = [2, 5, 6, 9, 10];

console.log(findGCD(nums));
