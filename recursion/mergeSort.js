function mergeSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  const mid = parseInt(arr.length / 2);
  const left = [];
  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }
  // console.log('left');

  // console.log(left);
  const right = [];
  for (let i = mid; i < arr.length; i++) {
    right[i - mid] = arr[i];
  }

  mergeSort(left);
  mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  return arr;
}

function merge() {}

const nums = [2, 5, 3, 7];

console.log(mergeSort(nums));
