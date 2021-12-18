function oneElementSize(nums) {
  if (nums.length <= 1) {
    return;
  }
  const mid = parseInt(nums.length / 2);
  const left = [];
  for (let i = 0; i < mid; i++) {
    left[i] = nums[i];
  }

  const right = [];
  for (let i = mid; i < nums.length; i++) {
    right[i - mid] = nums[i];
  }

  oneElementSize(left);
  console.log('left', left);
  oneElementSize(right);
  console.log('right', right);
}

const nums = [9, 6, 8, 3, 4, 5, 7, 8];

oneElementSize(nums);
