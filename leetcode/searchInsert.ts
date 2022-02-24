function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) {
    return 1;
  }
  let l = 0;
  let h = nums.length - 1;
  let mid = 0;
  let closestIndex = 0;
  while (l <= h) {
    mid = Math.floor((h + l) / 2);
    console.log(mid);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      l = mid + 1;
      closestIndex = Math.max(0, l);
    } else if (nums[mid] > target) {
      closestIndex = Math.max(0, mid);
      h = mid - 1;
    }
  }

  return closestIndex;
}

// const nums = [1, 3, 5, 6];
const nums = [1, 3];

const target = 2;

console.log(searchInsert(nums, target));

// 1, 2, 3
