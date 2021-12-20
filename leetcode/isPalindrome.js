var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x /= 10;
  }

  return revertedNumber == x || x == revertedNumber / 10;
};

let x = 11;

console.log(isPalindrome(x));

// console.log(x[0]);
