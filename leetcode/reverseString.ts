function reverseString(s: string[]): void {
  const len = s.length;
  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
    const newPosition = len - i - 1;
    if (i !== newPosition) {
      [s[i], s[newPosition]] = [s[newPosition], s[i]];
    }
  }
}

const s = ['H', 'a', 'n', 'm', 'a', 'h'];

reverseString(s);
