function solution(statues: number[]): number {
  statues.sort((a, b) => a - b);

  let count = 0;

  for (let i: number = 0; i < statues.length - 1; i++) {
    let next = statues[i] + 1;
    while (next !== statues[i + 1]) {
      next++;
      count++;
    }
  }

  return count;
}

const statues = [6, 2, 3, 8];

console.log(solution(statues));
