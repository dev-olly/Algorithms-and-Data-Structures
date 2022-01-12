function birthday(s, d, m) {
  // Write your code here

  const sum = [0];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    sum[i + 1] = s[i] + sum[i];
  }

  for (let i = 0; i < sum.length; i++) {
    if (sum[i + m] - sum[i] === d) {
      count++;
    }
  }

  return count;
}

const s = [4];
const d = 4;
const m = 1;

console.log(birthday(s, d, m));
