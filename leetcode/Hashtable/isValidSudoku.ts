function isValidSudoku(board: string[][]): boolean {
  const boxes = [];
  for (let i: number = 0; i < 9; i++) {
    const box = new Array(9).fill(0);
    boxes.push(box);
  }
  for (let i: number = 0; i < 9; i++) {
    const hashset = new Set();
    for (let j: number = 0; j < 9; j++) {
      if (board[j][i] === '.') continue;
      if (hashset.has(board[j][i])) return false;
      hashset.add(board[j][i]);
    }
  }
  for (let i: number = 0; i < 9; i++) {
    const rowset = new Set<string>();
    const colset = new Set<string>();
    for (let j: number = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (rowset.has(board[i][j])) return false;
      rowset.add(board[i][j]);
    }
  }

  for (let i: number = 0; i < 9; i++) {
    for (let j: number = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxes[boxIndex][parseInt(board[i][j]) - 1] !== 0) return false;
      boxes[boxIndex][parseInt(board[i][j]) - 1]++;
    }
  }
  return true;
}

const board = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log(isValidSudoku(board));
