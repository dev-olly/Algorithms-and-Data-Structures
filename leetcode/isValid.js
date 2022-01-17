var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }

  const map = new Map();
  map.set('}', '{');
  map.set(')', '(');
  map.set(']', '[');

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const lastItem = stack[stack.length - 1];
      if (map.get(s[i]) !== lastItem) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};

const s = '()[]{}';

console.log(isValid(s));
