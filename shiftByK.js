function shiftedByK(s, k) {
  let shifted = [];
  for (let i = 0; i < s.length; i++) {
    const id = (i + k) % s.length;

    shifted[id] = s[i];
  }

  return shifted.join('');
}

const s = 'hacker';
console.log(shiftedByK(s, 2));
