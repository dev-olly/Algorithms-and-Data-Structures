function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  const multiples = [];

  let factor = a[a.length - 1];
  while (factor <= b[0]) {
    const is_num_factor = isFactor(a, factor);

    if (is_num_factor) {
      const is_b_factor = isArFactor(b, factor);
      console.log(factor, b);

      if (is_b_factor) {
        multiples.push(factor);
      }
    }

    factor++;
  }

  return multiples.length;
}

function isFactor(ar, num) {
  for (let i = 0; i < ar.length; i++) {
    if (num % ar[i] !== 0) {
      return false;
    }
  }
  return true;
}

function isArFactor(ar, num) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % num !== 0) {
      return false;
    }
  }
  return true;
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotalX(a, b));
