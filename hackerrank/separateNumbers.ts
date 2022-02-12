function separateNumbers(s: string): void {
  // Write your code here

  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
    let sub = BigInt(s.slice(0, i + 1));
    const first = sub.toString();
    let newStr = `${sub}`;

    while (newStr.length < s.length) {
      sub++;
      newStr += sub;
    }
    if (newStr === s) {
      console.log('YES', first);

      return;
    }
  }

  console.log('NO');
  return;
}

let s: string = '13';
separateNumbers(s);
