function solution(a: number[]): number {
  const output = new Array(a.length).fill(0);

  for (let i: number = 0; i < a.length; i++) {
    output[a[i] - 1]++;
    if (output[a[i] - 1] > 1) return a[i];
  }
}
