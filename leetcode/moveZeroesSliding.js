var moveZeroes = function (nums) {
  let noOfZeroes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      noOfZeroes++;
    } else if (noOfZeroes > 0) {
      let tmp = nums[i];
      nums[i] = 0;
      nums[i - noOfZeroes] = tmp;
    }
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
