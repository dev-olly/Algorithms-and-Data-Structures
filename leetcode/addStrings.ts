function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let rem = 0;
  let s = '';

  while (i >= 0 && j >= 0) {
    let sum = parseInt(num1[i]) + parseInt(num2[j]) + rem;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;

    s = `${sum}${s}`;
    i--;
    j--;
  }

  while (i >= 0) {
    let sum = parseInt(num1[i]) + rem;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;

    s = `${sum}${s}`;
    i--;
  }
  while (j >= 0) {
    let sum = parseInt(num2[j]) + rem;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;

    s = `${sum}${s}`;
    j--;
  }

  if (rem > 0) {
    s = `${rem}${s}`;
  }
  return s;
}

const num1 = '11';
const num2 = '123';

console.log(addStrings(num1, num2));
