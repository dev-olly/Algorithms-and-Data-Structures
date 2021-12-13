function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 1) {
    return true;
  }
  let isIncrease = array[1] - array[0] > 0;
  for (let i = 0; i < array.length - 1; i++) {
    const currentNumber = array[i];
    const nextNumber = array[i + 1];
    const diffBtw2Number = nextNumber - currentNumber;
    if (diffBtw2Number === 0) {
      return true;
    } else {
      if (isIncrease) {
        if (diffBtw2Number <= 0) {
          return true;
        }
      } else {
        if (diffBtw2Number >= 0) {
          return true;
        }
      }
    }
  }
  return false;
}

arr = [1, 5, 10, 1100, 1101, 1102, 9001];

console.log(isMonotonic(arr));
