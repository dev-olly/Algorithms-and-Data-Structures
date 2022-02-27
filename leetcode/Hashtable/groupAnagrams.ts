function groupAnagrams(strs: string[]): string[][] {
  const output = [];

  const hashmap = new Map<string, number>();

  for (let i: number = 0; i < strs.length; i++) {
    const sorted = strs[i]
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('');
    if (hashmap.has(sorted)) {
      const index = hashmap.get(sorted);
      output[index].push(strs[i]);
    } else {
      output.push([strs[i]]);
      hashmap.set(sorted, output.length - 1);
    }
  }

  return output;
}

// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const strs = ['a'];

console.log(groupAnagrams(strs));
