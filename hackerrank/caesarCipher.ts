function caesarCipher(s: string, k: number): string {
  // Write your code here
  const ascii = [];
  for (let i: number = 0; i < s.length; i++) {
    const asciiCode = s.charAt(i).charCodeAt(0);
    if (asciiCode >= 65 && asciiCode <= 90) {
      let diff = asciiCode - 65;
      let shiftChar = ((diff + k) % 26) + 65;
      ascii.push(shiftChar);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      let diff = asciiCode - 97;
      let shiftChar = ((diff + k) % 26) + 97;
      ascii.push(shiftChar);
    } else {
      ascii.push(s[i].charCodeAt(0));
    }
  }

  let newStr = '';

  for (let i: number = 0; i < ascii.length; i++) {
    newStr += String.fromCharCode(ascii[i]);
  }

  return newStr;
}

const s: string = 'middle-Outz';

console.log(caesarCipher(s, 2));
