function commonChars(words: string[]): string[] {
  if (words.length === 1) {
    return words[0].split('');
  }

  let baseMap = new Map<string, number>();
  let set = Array.from(new Set([...words[0].split('')]));

  for (let i: number = 0; i < words[0].length; i++) {
    if (baseMap.has(words[0][i])) {
      baseMap.set(words[0][i], baseMap?.get(words[0][i]) + 1);
    } else {
      baseMap.set(words[0][i], 1);
    }
  }

  console.log(baseMap);

  for (let i: number = 1; i < words.length; i++) {
    const map = new Map<string, number>();

    for (let j: number = 0; j < words[i].length; j++) {
      if (map.has(words[i][j])) {
        map.set(words[i][j], map.get(words[i][j]) + 1);
      } else {
        map.set(words[i][j], 1);
      }
    }

    for (let j: number = 0; j < words[i].length; j++) {
      if (!baseMap.has(words[i][j])) {
        map.delete(words[i][j]);
      } else {
        if (baseMap.get(words[i][j]) !== map.get(words[i][j])) {
          map.set(
            words[i][j],
            Math.min(map.get(words[i][j]), baseMap.get(words[i][j]))
          );
        }
      }
    }
    baseMap = map;
    console.log(baseMap);
  }
  const output = [];

  for (let i: number = 0; i < set.length; i++) {
    if (baseMap.has(set[i])) {
      for (let j: number = 0; j < baseMap.get(set[i]); j++) {
        output.push(set[i]);
      }
    }
  }

  return output;
}

const words: string[] = [
  'bcaddcdd',
  'cbcdccdd',
  'ddccbdda',
  'dacbbdad',
  'dababdcb',
  'bccbdaad',
  'dbccbabd',
  'accdddda',
];
console.log(commonChars(words));
