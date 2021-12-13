var getConcatenation = function (nums) {
  const ans = [];
  const n = nums.length;
  const length = n * 2;

  for (let i = 0; i < length; i++) {
    if (i < n) {
      ans[i] = nums[i];
    } else {
      ans[i] = nums[i - n];
    }
  }

  return ans;
};
