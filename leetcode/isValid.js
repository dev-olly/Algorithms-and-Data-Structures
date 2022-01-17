var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      if (s[i] === ')') {
        if (!map.has('(')) {
          return false;
        } else {
          map.set('(', map.get('(') - 1);
          if (map.get('(') === 0) {
            map.delete('(');
          }
        }
      } else if (s[i] === '}') {
        if (!map.has('{')) {
          return false;
        } else {
          map.set('{', map.get('{') - 1);
          if (map.get('{') === 0) {
            map.delete('{');
          }
        }
      } else if (s[i] === ']') {
        if (!map.has('[')) {
          return false;
        } else {
          map.set('[', map.get('[') - 1);
          if (map.get('[') === 0) {
            map.delete('[');
          }
        }
      } else {
        map.set(s[i], 1);
      }
    }
  }

  return map.size === 0;
};

const s = '()[]{}';

console.log(isValid(s));
