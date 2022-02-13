function groupStrings(strings: string[]): string[][] {
  const output = [];
  const hashmap = new Map<string, number>();

  for (let i: number = 0; i < strings.length; i++) {
    const key = generateHashKey(strings[i]);

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

function generateHashKey(s: string): string {
  let key = `${s.length}`;
  let diff = 0;
  for (let j: number = s.length - 1; j >= 1; j--) {
    diff += Math.abs(s[j].charCodeAt(0) - s[j - 1].charCodeAt(0));

    if (diff > 12) {
      diff = 26 - diff;
    }
  }
  key += diff;

  return key;
}

const strings = ['cpjtwqcdwbldwwrryuclcngw', 'huoybvhibgqibbwwdzhqhslb'];
// const strings = ['az', 'ba'];

// console.log(groupStrings(strings));
console.log(generateHashKey(strings[1]));
