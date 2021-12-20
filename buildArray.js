var buildArray = function (nums) {
  //   using a = bq + r
  let q = nums.length;
  for (let i = 0; i < q; i++) {
    nums[i] = (nums[nums[i]] % q) * q + nums[i];
  }

  for (let i = 0; i < q; i++) {
    nums[i] = Math.floor(nums[i] / q);
  }

  return nums;
};

const nums = [0, 2, 1, 5, 3, 4];

console.log(buildArray(nums));
