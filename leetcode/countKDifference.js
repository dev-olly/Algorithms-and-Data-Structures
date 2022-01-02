var countKDifference = function (nums, k) {
  const obj = new Map();
  let kDiffs = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    const sum = k + nums[i];
  }

  return kDiffs;
};

const nums = [1, 2, 2, 1];
const k = 1;

console.log(countKDifference(nums, k));
