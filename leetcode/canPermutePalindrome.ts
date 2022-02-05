function canPermutePalindrome(s: string): boolean {
  // racecar - race
  const hashset = new Set();

  for (let i: number = 0; i < s.length; i++) {
    if (hashset.has(s.charAt(i))) {
      hashset.delete(s.charAt(i));
    } else {
      hashset.add(s.charAt(i));
    }
  }

  console.log(hashset);

  return hashset.size >= 1;
}

const s = 'code';

console.log(canPermutePalindrome(s));
