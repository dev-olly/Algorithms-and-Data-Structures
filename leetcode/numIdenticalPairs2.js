var numIdenticalPairs = function (nums) {
  let pair = 0;
  const repeat = {};

  for (let i = nums.length - 1; i >= 0; i--) {
    const elem = nums[i];
    if (repeat[elem]) {
      pair += repeat[elem];
      repeat[elem]++;
    } else {
      repeat[elem] = 1;
    }
  }

  return pair;
};

const nums = [1, 2, 3, 1, 1, 3];

console.log(numIdenticalPairs(nums));
