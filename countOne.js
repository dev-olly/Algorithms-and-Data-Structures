function countOne(n) {
  let count = 0;

  while (n) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }

  return count;
}

const num = 9;

console.log(countOne(num));
