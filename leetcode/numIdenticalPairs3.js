var numIdenticalPairs = function (nums) {
  const obj = new Map();
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    let item = obj.get(nums[i]);
    if (item >= 0) {
      obj.set(nums[i], item + 1);
      ans += item + 1;
    } else {
      obj.set(nums[i], 0);
    }
  }

  return ans;
};

const nums = [1, 2, 3, 1, 1, 3];

console.log(numIdenticalPairs(nums));
