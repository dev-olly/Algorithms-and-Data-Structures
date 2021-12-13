var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const obj = {};
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 1;
  }
  for (let i = 1; i <= n; i++) {
    if (!obj[i]) {
      output.push(i);
    }
  }

  return output;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers(nums));
