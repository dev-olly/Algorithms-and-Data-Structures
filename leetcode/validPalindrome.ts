function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  let count = 0;
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      count++;
      j--;
    } else {
      i++;
      j--;
    }
  }

  i = 0;
  j = s.length - 1;
  let newCount = 0;

  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      newCount++;
      i++;
    } else {
      i++;
      j--;
    }
  }

  return Math.min(newCount, count) <= 1;
}

const s = 'cbbcc';

console.log(validPalindrome(s));
