function closestNumbers(arr: number[]): number[] {
  // Write your code here
  arr.sort((a, b) => a - b);

  const output: number[] = [];
  let minimumDifference = Number.MAX_SAFE_INTEGER;

  for (let i: number = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff < minimumDifference) {
      output.length = 0;
      minimumDifference = diff;
      output.push(arr[i - 1], arr[i]);
    } else if (diff === minimumDifference) {
      output.push(arr[i - 1], arr[i]);
    }
  }

  return output;
}

const arr = [5, 2, 3, 4, 1];

console.log(closestNumbers(arr));
