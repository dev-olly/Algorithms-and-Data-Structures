function lengthOfLastWord(s: string): number {
  const arr = s.split(' ').filter((item) => item);
  console.log(arr);

  return arr[arr.length - 1].length;
}

const s = '   fly me   to   the moon  ';

console.log(lengthOfLastWord(s));
