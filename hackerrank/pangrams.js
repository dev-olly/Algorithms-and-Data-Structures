function pangrams(s) {
  // Write your code here
  if (s.length < 26) {
    return 'not pangram';
  }
  const set1 = new Set(s.replace(/ /g, '').toLowerCase());
  return set1.size === 26 ? 'pangram' : 'not pangram';
}

const s = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(s));
