function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);
  if (nums[low] == target) {
    return low;
  }
  if (nums[high] == target) {
    return high;
  }
  while (low < high) {
    if (nums[mid] < target) {
      low = mid + 1;
      mid = Math.floor((low + high) / 2);
    } else if (nums[mid] > target) {
      high = mid;
      mid = Math.floor((low + high) / 2);
    } else {
      return mid;
    }
  }

  return -1;
}

const nums = [5];
const target = 5;

console.log(search(nums, target));
