var shuffle = function (nums, n) {
  let i = 0;
  const arr = [];
  while (i < n) {
    if (i === 0) {
      arr[i] = nums[i];
      arr[i + 1] = nums[i + n];
    } else if (i === 1) {
      arr[i + 1] = nums[i];
      arr[i + 2] = nums[n + i];
    } else {
      arr[i + 2] = nums[i];
      arr[i + 3] = nums[a - 1];
    }
    i++;
  }

  return arr;
};

const a = [1, 2, 3, 4, 4, 3, 2, 1];

console.log(shuffle(a, 4));
