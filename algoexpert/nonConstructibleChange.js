function nonConstructibleChange(coins) {
  // Write your code here.
  if (coins.length === 0) {
    return 1;
  }

  coins.sort((a, b) => a - b);
  console.log(coins);

  let i = 0;
  let sum = 0;
  while (i < coins.length) {
    if (coins[i] > sum + 1) {
      const lowest = sum + 1;
      return lowest;
    }
    sum += coins[i];
    i++;
  }
  return sum + 1;
}

const coins = [1, 1, 1, 1, 1];

console.log(nonConstructibleChange(coins));
