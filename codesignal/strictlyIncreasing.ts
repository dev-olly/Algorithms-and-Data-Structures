function strictIncreasing(arr: number[]): boolean {
  const b: number[] = [];

  for (let i: number = 0; i < Math.floor(arr.length / 2); i++) {
    const right = arr.length - i - 1;
    b.push(arr[i]);
    if (right !== i) {
      b.push(arr[right]);
    }
  }

  if (b.length < arr.length) {
    b.push(arr[Math.floor(arr.length / 2)]);
  }

  for (let i: number = 1; i < b.length; i++) {
    if (b[i] < b[i - 1]) return false;
  }

  return true;
}

const arr = [1, 3, 5, 6, 4, 2];

console.log(strictIncreasing(arr));
