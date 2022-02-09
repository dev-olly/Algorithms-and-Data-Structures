// function isHappy(n: number): boolean {
//   const hashset = new Set<number>();
//   let sum = getNext(n);
//   while (!hashset.has(sum) && sum > 1) {
//     hashset.add(sum);
//     sum = getNext(sum);
//   }

//   return sum === 1;
// }

function getNext(s) {
  let sum = 0;

  while (s > 9) {
    const lastDigit = s % 10;
    sum += Math.pow(lastDigit, 2);
    s = (s - lastDigit) / 10;
  }
  sum += Math.pow(s, 2);
  return sum;
}

function isHappy(n: number): boolean {
  let slow = getNext(n);
  let fast = getNext(getNext(n));

  while (slow !== fast && fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}

const n = 2;

console.log(isHappy(n));

// console.log(sumOfDigitSquare(n));
