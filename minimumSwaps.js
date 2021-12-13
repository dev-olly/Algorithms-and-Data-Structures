function minimumSwaps(arr) {
  let numberOfSwaps = 0;
  const pair = {};
  for (let i = 0; i < arr.length; i++) {
    pair[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      const temp = arr[i];
      const j = pair[i + 1];

      arr[i] = i + 1;
      arr[j] = temp;
      pair[i];
      numberOfSwaps++;
    }
  }

  return numberOfSwaps;
}

const arr = [4, 3, 1, 2];
console.log(minimumSwaps(arr));
