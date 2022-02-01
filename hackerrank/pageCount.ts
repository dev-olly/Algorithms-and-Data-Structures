function pageCount(n: number, p: number): number {
  const totalFlip = Math.floor(n / 2);
  const numberOfFlips = Math.floor(p / 2);
  const fromBack = Math.abs(totalFlip - numberOfFlips);

  return Math.min(numberOfFlips, fromBack);
}

const n = 6;
const p = 2;

console.log(pageCount(n, p));
