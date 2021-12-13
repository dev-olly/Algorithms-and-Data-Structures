var numIdenticalPairs = function (nums) {
  let numOfPair = 0;
  const repeat = {};

  for (let i = 0; i < nums.length; i++) {
    if (repeat[nums[i]]) {
      numOfPair += repeat[nums[i]];
      repeat[nums[i]] += 1;
    } else {
      repeat[nums[i]] = 1;
    }
  }

  return numOfPair;
};

const nums = [1, 1, 1, 1, 1];

console.log(numIdenticalPairs(nums));
