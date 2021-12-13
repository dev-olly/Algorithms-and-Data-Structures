var smallerNumbersThanCurrent = function (nums) {
  const output = [];
  const copy = [...nums];

  copy.sort((a, b) => b - a);

  const map = {};

  for (let i = 0; i < copy.length; i++) {
    // if (!map[copy[i]]) {
    map[copy[i]] = i;
    // }
  }

  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    const diff = nums.length - map[nums[i]] - 1;
    output.push(diff);
  }

  return output;
};

const nums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(nums));
