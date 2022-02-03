function findAnagrams(s: string, p: string): number[] {
  const start = [];
  const n = p.length;
  const alphabets = new Array(26).fill(0);
  for (let i: number = 0; i < p.length; i++) {
    alphabets[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  let i = 0;
  let j = i + n - 1;

  while (j < s.length) {
    const copy = [...alphabets];

    const sub = s.substring(i, j + 1);

    let anagram = true;

    for (let k: number = 0; k < sub.length; k++) {
      copy[sub.charCodeAt(k) - 'a'.charCodeAt(0)]--;
      if (copy[sub.charCodeAt(k) - 'a'.charCodeAt(0)] < 0) {
        anagram = false;
        break;
      }
    }

    if (anagram) {
      start.push(i);
    }
    i++;
    j++;
  }

  return start;
}

const s = 'abab';
const p = 'ab';

console.log(findAnagrams(s, p));
