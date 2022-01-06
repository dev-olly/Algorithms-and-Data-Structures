var checkPerfectNumber = function (num) {
  let sum = 0;

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      sum += i;
      const j = num / i;
      if (j !== i) {
        sum += j;
      }
    }
  }

  return sum - num === num;
};

const num = 28;

console.log(checkPerfectNumber(num));
