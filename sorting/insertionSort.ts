function insertionSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length - 1; i++) {
    for (let j: number = i + 1; j >= 1; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

const nums = [4, 2, 1, 3, 5, 7, 6];

console.log(insertionSort(nums));
