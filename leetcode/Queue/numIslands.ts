// import LinkedList from '../../data structures/LinkedList';

// function numIslands(grid: string[][]): number {
//   const land = '1';
//   const water = '0';
//   const rows = grid.length;
//   const cols = grid[0].length;
//   let islands = 0;
//   for (let i: number = 0; i < rows; i++) {
//     for (let j: number = 0; j < cols; j++) {
//       if (grid[i][j] === land) {
//         islands++;

//         const queue: LinkedList<number[]> = new LinkedList();
//         queue.addLast([i, j]);
//         grid[i][j] = water;
//         while (!queue.isEmpty()) {
//           let [row, col] = queue.popFirst();

//           if (row - 1 >= 0 && grid[row - 1][col] === land) {
//             grid[row - 1][col] = water;
//             queue.addLast([row - 1, col]);
//           }
//           if (row + 1 < rows && grid[row + 1][col] === land) {
//             grid[row + 1][col] = water;
//             queue.addLast([row + 1, col]);
//           }
//           if (col + 1 < cols && grid[row][col + 1] === land) {
//             grid[row][col + 1] = water;
//             queue.addLast([row, col + 1]);
//           }
//           if (col - 1 >= 0 && grid[row][col - 1] === land) {
//             grid[row][col - 1] = water;
//             queue.addLast([row, col - 1]);
//           }
//         }
//       }
//     }
//   }

//   return islands;
// }

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

        const queue: number[][] = [];
        queue.push([i, j]);
        grid[i][j] = water;
        while (queue.length !== 0) {
          let [row, col] = queue.pop();

          if (row - 1 >= 0 && grid[row - 1][col] === land) {
            grid[row - 1][col] = water;
            queue.unshift([row - 1, col]);
          }
          if (row + 1 < rows && grid[row + 1][col] === land) {
            grid[row + 1][col] = water;
            queue.unshift([row + 1, col]);
          }
          if (col + 1 < cols && grid[row][col + 1] === land) {
            grid[row][col + 1] = water;
            queue.unshift([row, col + 1]);
          }
          if (col - 1 >= 0 && grid[row][col - 1] === land) {
            grid[row][col - 1] = water;
            queue.unshift([row, col - 1]);
          }
        }
      }
    }
  }

  return island;
}

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
