function hourglassSum(arr) {
  const indexes = [];
  const rows = arr.length;
  const columns = arr[0].length;
  if (rows !== columns) {
    return;
  }
  const maxRows = 3;
  const maxColumns = 3;
  let i = 0;
  let j = 0;
  const sumofArray = [];

  while (i <= maxRows) {
    while (j <= maxColumns) {
      let sum = 0;

      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      sumofArray.push(sum);
      j++;
    }
    i++;
    j = 0;
  }

  return Math.max(...sumofArray);
}

const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

hourglassSum(arr);
