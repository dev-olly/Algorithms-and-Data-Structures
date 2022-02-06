// Set
// function canPermutePalindrome(s: string): boolean {
//   // racecar - race
//   const hashset = new Set();

//   for (let i: number = 0; i < s.length; i++) {
//     if (hashset.has(s.charAt(i))) {
//       hashset.delete(s.charAt(i));
//     } else {
//       hashset.add(s.charAt(i));
//     }
//   }

//   return hashset.size >= 1;
// }

// Brute-force
function canPermutePalindrome(s: string): boolean {
  let count = 0;
  // loop through the 128 Ascii characters from 0 - 127
  for (let i: number = 0; i < 128; i++) {
    let characterFreq = 0;
    for (let j: number = 0; j < s.length; j++) {
      if (s.charCodeAt(j) === i) {
        characterFreq++;
      }
    }
    count += characterFreq % 2;
  }
  return count <= 1;
}

const s = 'carerac';

console.log(canPermutePalindrome(s));
