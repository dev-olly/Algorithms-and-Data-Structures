function rotate(nums: number[], k: number): void {
  // reverse first part 0 to n - k
  // reverse second part from n-k to n-1
  if (nums.length <= 1) {
    return;
  }
  k = k % nums.length;
  reverse(0, nums.length - k - 1);
  reverse(nums.length - k, nums.length - 1);
  reverse(0, nums.length - 1);

  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  console.log(nums);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
