function isValid(s: string): boolean {
  if (s.length <= 1) {
    return false;
  }

  const map = new Map<string, string>();
  map.set('}', '{');
  map.set(')', '(');
  map.set(']', '[');

  const stack: string[] = [];

  for (let i: number = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const lastItem: string = stack[stack.length - 1];
      if (map.get(s[i]) !== lastItem) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

const str: string = '()[]{}';

console.log(isValid(str));
