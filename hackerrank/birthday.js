function birthday(s, d, m) {
  // Write your code here

  let i = 0;
  let count = 0;
  while (i <= s.length - m) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }

    console.log(i);

    if (sum === d) {
      count++;
    }

    i++;
  }

  return count;
}

const s = [4];
const d = 4;
const m = 1;

console.log(birthday(s, d, m));
