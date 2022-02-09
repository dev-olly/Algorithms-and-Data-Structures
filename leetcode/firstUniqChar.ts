function firstUniqChar(s: string): number {
  const hashset = new Set<string>();

  for (let i: number = 0; i < s.length; i++) {
    if (hashset.has(s.charAt(i))) {
      hashset.delete(s.charAt(i));
    } else {
      hashset.add(s.charAt(i));
    }
  }

  if (hashset.size === 0) {
    return -1;
  }

  const first = hashset.values().next().value;

  for (let i: number = 0; i < s.length; i++) {
    if (s.charAt(i) === first) {
      return i;
    }
  }
}

const s = 'aadadaad';

console.log(firstUniqChar(s));
