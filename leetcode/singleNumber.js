// var singleNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let pair = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] === nums[j]) {
//         pair++;
//       }
//     }

//     if (pair === 1) {
//       return nums[i];
//     }
//   }
// };

var singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (map.get(key) == 1) {
      return key;
    }
  }
};

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
// singleNumber(nums);
