function checkInclusion(s1: string, s2: string): boolean {
  const alphabets = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  for (let i: number = 0; i < s1.length; i++) {
    alphabets[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i: number = 0; i < s2.length; i++) {
    sCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

    if (i >= s1.length) {
      sCount[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    }

    if (sCount.toString() === alphabets.toString()) {
      return true;
    }
  }

  return false;
}

const s1 = 'ab';
const s2 = 'eidboaoo';

console.log(checkInclusion(s1, s2));
