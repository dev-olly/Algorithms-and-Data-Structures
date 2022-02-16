function longestPalindrome(s: string): number {
  let count = 0;
  const hashset = new Set<string>();
  for (let i: number = 0; i < s.length; i++) {
    if (hashset.has(s.charAt(i))) {
      hashset.delete(s.charAt(i));
      count += 2;
    } else {
      hashset.add(s.charAt(i));
    }
  }

  return count === s.length ? count : count + 1;
}

const s = 'abccccdd';

console.log(longestPalindrome(s));
// console.log(s.length);
