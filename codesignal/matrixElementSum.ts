function solution(matrix: number[][]): number {
  let count = 0;

  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i: number = 0; i < rows; i++) {
    for (let j: number = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        if (i + 1 < rows) {
          matrix[i + 1][j] = 0;
        }
      }
      count += matrix[i][j];
    }
  }

  //   for (let i: number = 0; i < rows; i++) {
  //     for (let j: number = 0; j < cols; j++) {
  //       count += matrix[i][j];
  //     }
  //   }

  return count;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(solution(matrix));
