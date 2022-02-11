function aVeryBigSum(ar: number[]): number {
  // Write your code here
  let sum = 0;
  for (let i: number = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));
