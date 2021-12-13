var maxProfit = function (prices) {
  let profit = 0;
  let smallest = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < smallest) {
      smallest = prices[i];
    } else {
      const diff = prices[i] - smallest;

      if (diff > profit) {
        profit = diff;
      }
    }
  }

  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
