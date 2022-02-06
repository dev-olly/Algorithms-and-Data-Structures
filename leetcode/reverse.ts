function reverseArray(arr: number[]): number[] {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
