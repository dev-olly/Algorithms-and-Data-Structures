function numIslands(grid: string[][]): number {
  const land = '1';
  const water = '0';
  const rows = grid.length;
  const cols = grid[0].length;
  let island = 0;

  for (let i: number = 0; i < rows; i++) {
    for (let j: number = 0; j < cols; j++) {
      if (grid[i][j] === land) {
        island++;
        dfs(grid, i, j, rows, cols);
      }
    }
  }
  return island;
}

function dfs(
  grid: string[][],
  row: number,
  col: number,
  rows: number,
  cols: number
): void {
  if (
    row < 0 ||
    row > rows - 1 ||
    col < 0 ||
    col > cols - 1 ||
    grid[row][col] === '0'
  ) {
    return;
  }
  grid[row][col] = '0';
  dfs(grid, row - 1, col, rows, cols); // top of node
  dfs(grid, row + 1, col, rows, cols); // bottom of node
  dfs(grid, row, col - 1, rows, cols); // left of node
  dfs(grid, row, col + 1, rows, cols); // right of node
}

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
