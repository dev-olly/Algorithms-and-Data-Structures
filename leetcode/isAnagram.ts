// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const hashtable = new Map<string, number>();

//   for (let i: number = 0; i < s.length; i++) {
//     if (hashtable.has(s[i])) {
//       hashtable.set(s[i], hashtable.get(s[i]) + 1);
//     } else {
//       hashtable.set(s[i], 1);
//     }
//   }

//   for (let i: number = 0; i < t.length; i++) {
//     if (!hashtable.has(t[i])) {
//       return false;
//     }
//     hashtable.set(t[i], hashtable.get(t[i]) - 1);
//     if (hashtable.get(t[i]) === 0) {
//       hashtable.delete(t[i]);
//     }
//   }

//   return hashtable.size === 0;
// }

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const alphabets = new Array(26).fill(0);

  for (let i: number = 0; i < s.length; i++) {
    alphabets[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i: number = 0; i < t.length; i++) {
    alphabets[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    if (alphabets[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) {
      return false;
    }
  }

  return true;
}

const s = 'car';
const t = 'rat';

console.log(isAnagram(s, t));
