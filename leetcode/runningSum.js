const runningSum = function (nums) {
  let prevSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      nums[i] = prevSum + nums[i];
      prevSum = nums[i];
    }
  }
  return nums;
};

const a = [1, 2, 3, 4];

console.log(runningSum(a));
