// var majorityElement = function (nums) {
//   const major = Math.floor(nums.length / 2);
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
//   }
//   for (let i of map.keys()) {
//     if (map.get(i) > major) {
//       return i;
//     }
//   }
// };

var majorityElement = function (nums) {
  major = nums[0];
  count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    } else if (major === nums[i]) {
      count++;
    } else count--;
  }

  return major;
};

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
