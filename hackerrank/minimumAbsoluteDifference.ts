function minimumAbsoluteDifference(arr: number[]): number {
  // Write your code here
  let min = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);
  for (let i: number = 1; i < arr.length; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
  }
  return min;
}

const arr = [3, -7, 0];

console.log(minimumAbsoluteDifference(arr));
