function binarySearch(nums, key, low = 0, high) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === key) {
      return mid;
    }
    if (nums[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    return binarySearch(nums, key, low, high);
  } else return -1;
}

const nums = [1, 2, 3, 4, 6, 7, 8, 10, 11];

console.log(binarySearch(nums, 64, 0, 9));
