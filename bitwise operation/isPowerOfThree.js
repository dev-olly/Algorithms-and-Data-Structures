var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }
  // convert to base three using parseInt(num, baseFrom).toString(baseTo);

  const baseThree = parseInt(n, 10).toString(3);

  return /^10*$/.test(baseThree);
};

const n = 27;

console.log(isPowerOfThree(n));
