import Queue from '../../data structures/Queue';

function openLock(deadends: string[], target: string): number {
  const hashset_deadends = new Set<string>([...deadends]);
  const hashset_visited = new Set<string>(['0000']);
  if (target === '0000') return 0;
  if (hashset_deadends.has('0000') || hashset_deadends.has(target)) return -1;

  const queue = new Queue<string>();
  queue.push('0000');

  let turns: number = 0;

  while (!queue.isEmpty()) {
    const size = queue.size();
    turns++;
    if (turns <= 2) console.log(size, queue.toArray());

    for (let i: number = 0; i < size; i++) {
      const current_string = queue.pop();

      for (let j: number = 0; j < 4; j++) {
        const [up, down] = turnWheel(current_string, j);

        if (up === target) return turns;
        if (down === target) return turns;
        if (!hashset_visited.has(up) && !hashset_deadends.has(up)) {
          queue.push(up);
          hashset_visited.add(up);
        }
        if (!hashset_visited.has(down) && !hashset_deadends.has(down)) {
          queue.push(down);
          hashset_visited.add(down);
        }
      }
    }
  }

  return -1;
}

function turnWheel(wheel: string, index: number): string[] {
  const arr: string[] = wheel.split('');
  const digit: number = parseInt(wheel.charAt(index));
  const turnUp = (digit + 1) % 10;
  const turnDown = digit - 1 < 0 ? ((digit - 1) % 10) + 10 : (digit - 1) % 10;
  const up = [...arr];
  const down = [...arr];

  up[index] = `${turnUp}`;
  down[index] = `${turnDown}`;
  return [up.join(''), down.join('')];
}

const deadends: string[] = ['0201', '0101', '0102', '1212', '2002'];
const target: string = '0202';

console.log(openLock(deadends, target));

// console.log(turnWheel('0000', 0));
