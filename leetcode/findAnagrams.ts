function findAnagrams(s: string, p: string): number[] {
  const output = [];
  const n = p.length;
  const alphabets = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  for (let i: number = 0; i < n; i++) {
    alphabets[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i: number = 0; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    if (i >= n) {
      sCount[s.charCodeAt(i - n) - 'a'.charCodeAt(0)]--;
    }

    if (sCount.toString() === alphabets.toString()) {
      output.push(i - n + 1);
    }
  }

  return output;
}

const s = 'abab';
const p = 'ab';

console.log(findAnagrams(s, p));
