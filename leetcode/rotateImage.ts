function rotate(matrix: number[][]): void {
  let mat = [];

  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;

  for (let i: number = 0; i <= rows; i++) {
    mat.push(new Array(cols + 1).fill(0));
  }

  for (let i: number = 0; i <= rows; i++) {
    for (let j: number = 0; j <= cols; j++) {
      mat[j][rows - i] = matrix[i][j];
    }
  }

  for (let i: number = 0; i <= rows; i++) {
    for (let j: number = 0; j <= cols; j++) {
      matrix[i][j] = mat[i][j];
    }
  }

  //   matrix = [...mat];

  console.log(matrix);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));
