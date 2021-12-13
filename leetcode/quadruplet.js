var countQuadruplets = function (nums) {
  let i, j, k, l;
  const n = nums.length;
  let allQuadThatSums = 0;
  for (i = 0; i < n - 3; i++) {
    for (j = i + 1; j < n - 2; j++) {
      for (k = j + 1; k < n - 1; k++) {
        for (l = k + 1; l < n; l++) {
          if (nums[i] + nums[j] + nums[k] === nums[l]) {
            allQuadThatSums++;
          }
        }
      }
    }
  }

  return allQuadThatSums;
};

const arr = [1, 1, 1, 3, 5];

console.log(countQuadruplets(arr));
