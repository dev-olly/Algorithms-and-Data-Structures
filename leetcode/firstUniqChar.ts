function firstUniqChar(s: string): number {
  if (s.length === 1) {
    return 0;
  }
  const hashmap = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    if (hashmap.has(s.charAt(i))) {
      hashmap.set(s.charAt(i), hashmap.get(s.charAt(i)) + 1);
    } else {
      hashmap.set(s.charAt(i), 1);
    }
  }
  let first = '';
  for (let i: number = 0; i < s.length; i++) {
    if (hashmap.get(s.charAt(i)) == 1) {
      return i;
    }
  }

  return -1;
}

const s = 'aadadaad';

console.log(firstUniqChar(s));
