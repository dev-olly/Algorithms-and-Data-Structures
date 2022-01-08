var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
};

const n = 00000000000000000000000000001011;

console.log(hammingWeight(n));
