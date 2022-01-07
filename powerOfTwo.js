function isPowerOfTwo(x) {
  if (x === 0) {
    return false;
  }

  while (x % 2 === 0) {
    x /= 2;
  }

  return x === 1;
}

console.log(isPowerOfTwo(4));
