function detectCapitalUse(word: string): boolean {
  if (!word.length) return false;
  const map = new Map<string, number>();
  if (word[0] === word[0].toUpperCase()) {
    map.set('upper', 1);
  } else {
    map.set('upper', 0);
  }
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      if (map.get('upper') === i) {
        map.set('upper', map.get('upper') + 1);
      } else {
        return false;
      }
    }
  }

  return map.get('upper') === word.length
    ? true
    : map.get('upper') <= 1
    ? true
    : false;
}

const word = 'FlaG';
// const word = 'usa';

console.log(detectCapitalUse(word));
