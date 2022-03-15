function solution(n: number): number {
  if (n <= 1) return n;
  let area = 1;
  for (let i: number = 2; i <= n; i++) {
    area += 4 * (i - 1);
  }

  return area;
}

const n = 5;

console.log(solution(n));
