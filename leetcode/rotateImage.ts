// function rotate(matrix: number[][]): void {
//   let mat = [];

//   const rows = matrix.length - 1;
//   const cols = matrix[0].length - 1;

//   for (let i: number = 0; i <= rows; i++) {
//     mat.push(new Array(cols + 1).fill(0));
//   }

//   for (let i: number = 0; i <= rows; i++) {
//     for (let j: number = 0; j <= cols; j++) {
//       mat[j][rows - i] = matrix[i][j];
//     }
//   }

//   for (let i: number = 0; i <= rows; i++) {
//     for (let j: number = 0; j <= cols; j++) {
//       matrix[i][j] = mat[i][j];
//     }
//   }

//   //   matrix = [...mat];

//   console.log(matrix);
// }

function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let i: number = 0; i < Math.floor(n / 2) + (n % 2); i++) {
    for (let j: number = 0; j < Math.floor(n / 2); j++) {
      console.log(i, j);

      const x = n - i - 1;
      const y = n - j - 1;

      const temp = matrix[y][i];
      matrix[y][i] = matrix[x][y];
      matrix[x][y] = matrix[j][x];
      matrix[j][x] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);
