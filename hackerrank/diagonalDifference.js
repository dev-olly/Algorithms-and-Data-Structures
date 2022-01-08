function diagonalDifference(arr) {
  // Write your code here
  const row = arr.length;
  if (row === 0) {
    return false;
  }
  const column = arr[0].length;

  if (row !== column) {
    return false;
  }

  let first = 0;
  let second = 0;
  let i = 0;
  let j = 0;

  while (i < row && j < column) {
    first += arr[i][j];
    second += arr[i][column - j - 1];
    i++;
    j++;
  }

  return Math.abs(first - second);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr));
