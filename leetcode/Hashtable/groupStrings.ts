function groupStrings(strings: string[]): string[][] {
  const output = [];
  const hashmap = new Map<string, number>();

  for (let i: number = 0; i < strings.length; i++) {
    const key = hash(strings[i]);

    if (hashmap.has(key)) {
      const index = hashmap.get(key);
      output[index].push(strings[i]);
    } else {
      output.push([strings[i]]);
      hashmap.set(key, output.length - 1);
    }
  }

  return output;
}

function hash(s: string): string {
  let hashkey = `${s.length}0`;

  for (let i: number = 1; i < s.length; i++) {
    let index = s.charCodeAt(i) - s.charCodeAt(i - 1);
    if (index < 0) {
      index = index + 26;
    }
    hashkey += index;
  }

  return hashkey;
}

const strings = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'];

// console.log(groupStrings(strings));

console.log(hash('al'));
