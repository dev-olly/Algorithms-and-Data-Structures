function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1.length === 0) {
    return false;
  }
  const firstMap = new Map<string, number>();
  const secondMap = new Map<string, number>();

  for (let i: number = 0; i < s1.length; i++) {
    firstMap.set(s1[i], firstMap.has(s1[i]) ? firstMap.get(s1[i]) + 1 : 1);
    secondMap.set(s2[i], secondMap.has(s2[i]) ? secondMap.get(s2[i]) + 1 : 1);
  }

  for (let i: number = 0; i < s1.length; i++) {
    if (firstMap.get(s1[i]) !== secondMap.get(s1[i])) {
      return false;
    }
  }

  let count: number = 0;

  for (let i: number = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
  }

  return count <= 2;
}

const s1: string = 'aa';
const s2: string = 'ac';

console.log(areAlmostEqual(s1, s2));
