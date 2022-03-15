import LinkedList from '../../data structures/LinkedList';

function numSquares(n: number): number {
  const perfectSquares = [];
  const steps: number[] = new Array(n).fill(0);

  for (let i: number = 1; i * i <= n; i++) {
    perfectSquares.push(i * i);
    steps[i * i - 1] = 1;
  }

  if (perfectSquares[perfectSquares.length - 1] === n) return 1;

  const queue = new LinkedList<number>();
  for (let i: number = 0; i < perfectSquares.length; i++) {
    queue.addLast(perfectSquares[i]);
  }

  let count = 1;
  while (!queue.isEmpty()) {
    const size = queue.size();
    count++;

    for (let i: number = 0; i < size; i++) {
      const last = queue.popFirst();
      for (let j: number = 0; j < perfectSquares.length; j++) {
        const sumWithPerfectSquare = last + perfectSquares[j];

        if (sumWithPerfectSquare === n) return count;
        if (sumWithPerfectSquare < n && steps[sumWithPerfectSquare - 1] === 0) {
          steps[sumWithPerfectSquare - 1] = count;
          queue.addLast(sumWithPerfectSquare);
        }
        if (sumWithPerfectSquare > n) break;
      }
    }
  }

  return count;
}

const n = 13;

console.log(numSquares(n));
