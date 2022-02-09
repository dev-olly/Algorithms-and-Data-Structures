function addDigits(num: number): number {
  if (num < 10) {
    return num;
  }

  let sum = sumDigits(num);

  while (sum >= 10) {
    sum = sumDigits(sum);
  }

  return sum;
}

function sumDigits(num) {
  let sum = 0;

  while (num > 0) {
    let temp = num % 10;
    sum += temp;
    num = (num - temp) / 10;
  }

  return sum;
}

const num = 38;

console.log(addDigits(num));
