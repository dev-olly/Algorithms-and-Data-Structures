function recurSum(n) {
  if (n === 0) {
    return n;
  }
  return n + recurSum(n - 1);
}

const n = 3;

console.log(recurSum(n));
