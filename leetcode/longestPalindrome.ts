function longestPalindrome(s: string): number {
  let count = 0;
  const hashmap = new Map<string, number>();
  for (let i: number = 0; i < s.length; i++) {
    if (hashmap.has(s[i])) {
      hashmap.set(s[i], hashmap.get(s[i]) + 1);
    } else {
      hashmap.set(s[i], 1);
    }
  }

  if (hashmap.size == 1) {
    return s.length;
  }
  for (const [key, value] of hashmap) {
    if (value % 2 === 0) {
      count += value;
    } else {
      count += value - 1;
    }
  }

  return count === s.length ? count : count + 1;
}

const s = 'abccccdd';

console.log(longestPalindrome(s));
// console.log(s.length);
