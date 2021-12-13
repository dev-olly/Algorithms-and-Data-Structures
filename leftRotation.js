function rotLeft(a, d) {
  const newArr = [];
  const maxArrIndex = a.length;

  for (let i = 0; i < a.length; i++) {
    let diff = i - d;
    if (diff < 0) {
      diff = diff + maxArrIndex;
    }

    newArr[diff] = a[i];
  }

  return newArr;
}

const a = [1, 2, 3, 4, 5];

console.log(rotLeft(a, 4));
