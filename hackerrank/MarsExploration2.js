function marsExploration(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 3 === 1 && s[i] !== 'O') {
      count++;
    }

    if (i % 3 === 0 && s[i] !== 'S') {
      count++;
    }
    if (i % 3 === 2 && s[i] !== 'S') {
      count++;
    }
  }

  return count;
}

const s = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS';

console.log(marsExploration(s));
