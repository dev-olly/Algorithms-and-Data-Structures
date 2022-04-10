function backspaceCompare(s: string, t: string): boolean {
  const firstStack = [];
  const secondStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '#') firstStack.pop();
    else firstStack.push(char);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    if (char === '#') secondStack.pop();
    else secondStack.push(char);
  }

  if (firstStack.length !== secondStack.length) return false;

  for (let i = 0; i < firstStack.length; i++) {
    if (firstStack[i] !== secondStack[i]) return false;
  }

  return true;
}
