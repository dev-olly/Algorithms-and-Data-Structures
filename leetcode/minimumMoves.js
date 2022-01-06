var minimumMoves = function (s) {
  let count = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === 'O') {
      i++;
    } else {
      count++;
      i += 3;
    }
  }

  return count;
};

const s = 'XXOX';

console.log(minimumMoves(s));
