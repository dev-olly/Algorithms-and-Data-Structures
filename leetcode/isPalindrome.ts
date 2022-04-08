function isPalindrome(s: string): boolean {
  const set = new Set([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ]);
  const lowerCase = s.toLowerCase();
  const newStr = lowerCase.split('').filter((char) => set.has(char));

  for (let i: number = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const s = 'A man, a plan, a canal: Panama';

console.log(isPalindrome(s));
