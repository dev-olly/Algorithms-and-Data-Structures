function commonChars(words: string[]): string[] {
  if (words.length === 1) {
    return words[0].split('');
  }

  const baseMap = new Map<string, number>();
  for (let i: number = 0; i < words[0].length; i++) {
    if (baseMap.has(words[0][i])) {
      baseMap.set(words[0][i], baseMap?.get(words[0][i]) + 1);
    } else {
      baseMap.set(words[0][i], 1);
    }
  }

  for (let i: number = 1; i < words.length; i++) {
    const map = new Map<string, number>();
    for (let j: number = 0; j < words[i].length; j++) {
      if (map.has(words[0][i])) {
        map.set(words[0][i], map?.get(words[0][i]) + 1);
      } else {
        map.set(words[0][i], 1);
      }
    }
  }

  return [];
}

const words: string[] = ['bella', 'label', 'roller'];
console.log(commonChars(words));
