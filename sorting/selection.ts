function selectionSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}

const nums = [4, 2, 1, 3, 5, 7, 6];

console.log(selectionSort(nums));
