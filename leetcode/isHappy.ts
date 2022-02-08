function isHappy(n: number): boolean {
  const hashset = new Set<number>();
  let sum = sumOfDigitSquare(n);
  while (!hashset.has(sum) && sum > 1) {
    hashset.add(sum);
    sum = sumOfDigitSquare(sum);
  }

  return sum === 1;
}

function sumOfDigitSquare(s) {
  let sum = 0;

  while (s > 9) {
    const lastDigit = s % 10;
    sum += Math.pow(lastDigit, 2);
    s = (s - lastDigit) / 10;
  }
  sum += Math.pow(s, 2);
  return sum;
}

const n = 19;

console.log(isHappy(n));

// console.log(sumOfDigitSquare(n));
