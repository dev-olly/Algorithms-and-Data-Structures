import LinkedList from '../../data structures/LinkedList';

function wallsAndGates(rooms: number[][]): void {
  const room = 2147483647;

  const wall = -1;
  const gate = 0;
  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue: LinkedList<number[]> = new LinkedList();

  for (let i: number = 0; i < rooms.length; i++) {
    for (let j: number = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === gate) {
        queue.addLast([i, j]);
      }
    }
  }

  while (!queue.isEmpty()) {
    const [row, col] = queue.popFirst();
    // upwards
    if (row > 0 && rooms[row - 1][col] === room) {
      rooms[row - 1][col] = rooms[row][col] + 1;
      queue.addLast([row - 1, col]);
    }

    // Downwards
    if (row < rooms.length - 1 && rooms[row + 1][col] === room) {
      rooms[row + 1][col] = rooms[row][col] + 1;
      queue.addLast([row + 1, col]);
    }

    // Left
    if (col > 0 && rooms[row][col - 1] === room) {
      rooms[row][col - 1] = rooms[row][col] + 1;
      queue.addLast([row, col - 1]);
    }

    // Right
    if (col < rooms[0].length - 1 && rooms[row][col + 1] === room) {
      rooms[row][col + 1] = rooms[row][col] + 1;
      queue.addLast([row, col + 1]);
    }
  }

  console.log(rooms);
}

const rooms = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

wallsAndGates(rooms);
