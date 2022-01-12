var romanToInt = function (s) {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  let number = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === 'I') {
      if (s[i + 1] !== 'I' && s[i + 1] !== undefined) {
        number += map.get(s[i + 1]) - map.get(s[i]);
        i += 2;
      } else {
        number += map.get(s[i]);
        i++;
      }
    } else if (s[i] === 'X') {
      if ((s[i + 1] === 'L' || s[i + 1] === 'C') && s[i + 1] !== undefined) {
        number += map.get(s[i + 1]) - map.get(s[i]);
        i += 2;
      } else {
        number += map.get(s[i]);
        i++;
      }
    } else if (s[i] === 'C') {
      if ((s[i + 1] === 'D' || s[i + 1] === 'M') && s[i + 1] !== undefined) {
        number += map.get(s[i + 1]) - map.get(s[i]);
        i += 2;
      } else {
        number += map.get(s[i]);
        i++;
      }
    } else {
      number += map.get(s[i]);
      i++;
    }
  }

  return number;
};

const s = 'MCMXCIV';

console.log(romanToInt(s));

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
