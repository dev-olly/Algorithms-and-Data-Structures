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
  let gcd = 1;
  // find factor of max that is common to min
  // thanks to perfect number i was able to solve this
  for (let i = 1; i <= min; i++) {
    if (max % i === 0 && min % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const nums = [2, 5, 6, 9, 10];

console.log(findGCD(nums));
