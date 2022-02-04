function pickingNumbers(a: number[]): number {
  // Write your code here
  a.sort((a, b) => a - b);
  let result = 0;
  let count = 1;
  let sub = a[0]; // subsequence first item

  for (let i: number = 1; i < a.length; i++) {
    if (a[i] === sub || sub + 1 === a[i]) {
      count++;
    } else {
      result = Math.max(result, count);
      sub = a[i];
      count = 1;
    }
  }

  return Math.max(result, count);
}

const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];

console.log(pickingNumbers(a));

// https://programmercave0.github.io/blog/2020/03/28/Picking-Numbers-HackerRank-Challenge-Cpp-Implementation
