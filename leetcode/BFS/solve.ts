import LinkedList from '../../data structures/LinkedList';

function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;
  if (rows < 2 || cols < 2) return;
  const borders: LinkedList<number[]> = new LinkedList();

  for (let row: number = 0; row < rows; row = row + rows - 1) {
    for (let col: number = 0; col < cols; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'E';
        borders.addLast([row, col]);
      }
    }
  }

  for (let col: number = 0; col < cols; col = col + cols - 1) {
    for (let row: number = 0; row < rows; row++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'E';
        borders.addLast([row, col]);
      }
    }
  }

  while (!borders.isEmpty()) {
    const [row, col] = borders.popFirst();

    if (row - 1 >= 0 && board[row - 1][col] === 'O') {
      board[row - 1][col] = 'E';
      borders.addLast([row - 1, col]);
    }
    if (row + 1 < rows && board[row + 1][col] === 'O') {
      board[row + 1][col] = 'E';
      borders.addLast([row + 1, col]);
    }
    if (col + 1 < cols && board[row][col + 1] === 'O') {
      board[row][col + 1] = 'E';
      borders.addLast([row, col + 1]);
    }
    if (col - 1 >= 0 && board[row][col - 1] === 'O') {
      board[row][col - 1] = 'E';
      borders.addLast([row, col - 1]);
    }
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

  console.log(board);
}

const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];

solve(board);

console.log(board);
