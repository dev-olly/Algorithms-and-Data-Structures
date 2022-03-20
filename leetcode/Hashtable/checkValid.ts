function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  for (let i: number = 0; i < n; i++) {
    const hashset = new Set<number>();
    for (let j: number = 0; j < n; j++) {
      if (hashset.has(matrix[i][j])) return false;
      hashset.add(matrix[i][j]);
    }
  }

  for (let i: number = 0; i < n; i++) {
    const hashset = new Set<number>();
    for (let j: number = 0; j < n; j++) {
      if (hashset.has(matrix[j][i])) return false;
      hashset.add(matrix[j][i]);
    }
  }
  return true;
}

const matrix = [
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
];

console.log(checkValid(matrix));
