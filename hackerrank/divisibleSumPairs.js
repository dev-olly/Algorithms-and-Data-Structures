function divisibleSumPairs(k, ar) {
  // Write your code here
  const map = new Map();
  let noOfPair = 0;

  for (let i = 0; i < ar.length; i++) {
    const remainder = ar[i] % k;
    let diff = k - remainder;
    if (diff === k) {
      diff = 0;
    }

    if (map.has(diff)) {
      noOfPair += map.get(diff);
    }
    if (map.has(remainder)) {
      let count = map.get(remainder);
      map.set(remainder, count + 1);
    } else {
      map.set(remainder, 1);
    }
  }

  return noOfPair;
}

const ar = [-1, 1, -2, 2, -3, 3, -4, 4];
// const ar = [1, 3, 2, 6, 1, 2];
const k = 3;

console.log(divisibleSumPairs(k, ar));
