function countOne(n) {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
}

const num = 9;

console.log(countOne(num));
