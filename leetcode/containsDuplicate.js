var containsDuplicate = function (nums) {
  const obj = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      return true;
    }
    obj.set(nums[i], i);
  }

  return false;
};

const nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));
