function caesarChipher(text, shift) {
  const output = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!isNaN(char)) {
      output.push(char);
      continue;
    }
    const charCode = char.charCodeAt(0);
    // uppercase A - Z
    if (charCode >= 65 && charCode <= 90) {
      const diff = charCode - 65;
      const newCharCode = ((diff + shift) % 26) + 65;
      output.push(String.fromCharCode(newCharCode));
    } else if (charCode >= 97 && charCode <= 122) {
      const diff = charCode - 97;
      const newCharCode = ((diff + shift) % 26) + 97;
      output.push(String.fromCharCode(newCharCode));
    } else {
      output.push(char);
    }
  }
  return output.join('');
}

console.log(caesarChipher('Samodan195 Ollyboy121', 3));
