function rotateLeft(d: number, arr: number[]): number[] {
  // Write your code here
  const output = new Array(arr.length).fill(0);
  const n = arr.length;

  for (let i: number = 0; i < arr.length; i++) {
    const diff = i - d;
    if (diff < 0) {
      output[n + diff] = arr[i];
    } else {
      output[diff] = arr[i];
    }
  }

  return output;
}

const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(2, arr));
