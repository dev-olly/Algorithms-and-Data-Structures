function mergeSort(nums, n) {
  for (let currSize = 1; currSize <= n - 1; currSize = 2 * currSize) {
    for (let leftStart = 0; leftStart <= n - 1; leftStart += 2 * currSize) {
      let mid = leftStart + currSize - 1;
      let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      console.log(nums.slice());
    }
  }
}

const nums = [2, 7, 3, 6, 8, 14, 12, 1, 10, 4];

mergeSort(nums, nums.length);
// console.log(mergeSort(nums));

// https://www.geeksforgeeks.org/iterative-merge-sort/
