function isPowerOfTwo(x) {
  if (x <= 0) {
    return false;
  }
  return (x & (x - 1)) === 0;
}

const x = -2147483648;

console.log(isPowerOfTwo(x));

// https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/
