function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;
  if (rows < 2 || cols < 2) return;
  const borders: number[][] = [];

  for (let row: number = 0; row < rows; row = row + rows - 1) {
    for (let col: number = 0; col < cols; col++) {
      if (board[row][col] === 'O') {
        borders.push([row, col]);
      }
    }
  }

  for (let col: number = 0; col < cols; col = col + cols - 1) {
    for (let row: number = 0; row < rows; row++) {
      if (board[row][col] === 'O') {
        borders.push([row, col]);
      }
    }
  }
  function dfs(board: string[][], row, col): void {
    // over the borders
    if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) {
      return;
    }

    if (board[row][col] !== 'O') {
      return;
    }

    board[row][col] = 'E';

    dfs(board, row - 1, col);
    dfs(board, row + 1, col);
    dfs(board, row, col - 1);
    dfs(board, row, col + 1);
  }

  for (let i: number = 0; i < borders.length; i++) {
    dfs(board, borders[i][0], borders[i][1]);
  }
  for (let i: number = 0; i < rows; i++) {
    for (let j: number = 0; j < cols; j++) {
      if (board[i][j] === 'E') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
}

const board = [
  ['X', 'X', 'X'],
  ['X', 'O', 'X'],
  ['X', 'X', 'X'],
];

solve(board);

console.log(board);
