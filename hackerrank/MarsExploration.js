function marsExploration(s) {
  // Write your code here
  let changedLetter = 0;

  for (let i = 0; i < s.length / 3; i++) {
    const substr = s.slice(3 * i, 3 * i + 3);

    for (let j = 0; j < 3; j++) {
      if (j % 2 === 0 && substr[j] !== 'S') {
        changedLetter++;
      } else if (j % 2 === 1 && substr[j] !== 'O') {
        changedLetter++;
      }
    }
  }

  return changedLetter;
}

const s = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS';

console.log(marsExploration(s));
