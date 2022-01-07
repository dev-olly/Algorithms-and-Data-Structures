var isPowerOfFour = function (n) {
  if (n < 1) {
    return false;
  }

  const baseFour = parseInt(n, 10).toString(4);

  return /^10*$/.test(baseFour);
};

const num = 64;

console.log(isPowerOfFour(num));
