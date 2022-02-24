import LinkedList from '../../data structures/LinkedList';

function numIslands(grid: string[][]): number {
  const land = '1';
  const water = '0';
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: LinkedList<number[]> = new LinkedList();
  const set = new Set<number[]>();
  let islands = 0;
  for (let i: number = 0; i < rows; i++) {
    for (let j: number = 0; j < cols; j++) {
      if (grid[i][j] === land) {
        queue.addLast([i, j]);
      }
    }
  }
  if (queue.isEmpty()) {
    return islands;
  }

  console.log(queue.toArray());

  while (!queue.isEmpty) {
    const [row, col] = queue.popFirst();
    set.add([row, col]);

    // get all directions
    const directions = [];
    if (row > 0) {
      directions.push([row - 1, col]);
    }
    if (row < rows - 1) {
      directions.push([row + 1, col]);
    }
    if (col > 0) {
      directions.push([row, col - 1]);
    }
    if (col < cols - 1) {
      directions.push([row, col + 1]);
    }

    for(let i: number = 0; i < directions.length; i++) {
     
    }
  }
  return 1;
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numIslands(grid));
