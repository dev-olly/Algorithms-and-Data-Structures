function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let curr = max;
  for (let i: number = 1; i < nums.length; i++) {
    curr += nums[i];

    if (nums[i] > curr) {
      max = Math.max(nums[i], max);
      curr = nums[i];
    } else {
      console.log(max, curr);
      max = Math.max(max, curr);
    }
  }
  return max;
}

const nums = [0, -2, -3];

console.log(maxSubArray(nums));
