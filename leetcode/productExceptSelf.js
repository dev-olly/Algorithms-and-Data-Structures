/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      ans[0] = 1;
    } else {
      ans[i] = ans[i - 1] * nums[i - 1];
    }
  }
  console.log(ans);

  let right = 1;

  for (let i = ans.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      right = nums[i + 1] * right;
    }
    ans[i] = ans[i] * right;
  }

  return ans;
};
