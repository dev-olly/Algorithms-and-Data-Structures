function flippingBits(n) {
  let bin = '';

  while (n / 2 > 0) {
    bin = `${bin}${n % 2 === 1 ? '0' : '1'}`;
    n = parseInt(n / 2);
  }

  while (bin.length < 32) {
    bin = `${bin}1`;
  }

  let i = 0;
  sum = 0;

  while (i < 32) {
    if (bin[i] === '1') {
      sum += Math.pow(2, i);
    }
    i++;
  }

  return sum;
}

const n = 9;
console.log(flippingBits(n));
