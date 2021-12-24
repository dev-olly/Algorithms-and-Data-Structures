function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;
  let min = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  console.log(sum - max, sum - min);
}

const arr = [7, 69, 2, 221, 8974];

miniMaxSum(arr);
