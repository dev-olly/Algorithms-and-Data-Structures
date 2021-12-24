function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let first = 0;
  let second = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i < 4 && j > 0) {
    first += arr[i];
    second += arr[j];
    i++;
    j--;
  }

  console.log(Math.min(first, second), Math.max(first, second));
}

const arr = [7, 69, 2, 221, 8974];

miniMaxSum(arr);
