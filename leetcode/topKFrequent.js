var topKFrequent = function (nums, k) {
  const repeat = {};

  const output = []

  for (let i = 0; i < nums.length; i++) {
    if (repeat[nums[i]]) {
      repeat[nums[i]]++;
    } else {
      repeat[nums[i]] = 1;
    }
  }

  for (let i = 0; i < Object.keys(repeat); i++) {
    
  }


  return repeat;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k));
