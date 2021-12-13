function binarySearch(nums, key) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === key) {
      return mid;
    }
    if (nums[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const nums = [1, 2, 3, 4, 6, 7, 8, 10, 11];

console.log(binarySearch(nums, 8));
