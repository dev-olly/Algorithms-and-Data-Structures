function solution(s1: string, s2: string): number {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (map1.has(s1.charAt(i))) {
      map1.set(s1.charAt(i), map1.get(s1.charAt(i)) + 1);
    } else {
      map1.set(s1.charAt(i), 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (map2.has(s2.charAt(i))) {
      map2.set(s2.charAt(i), map2.get(s2.charAt(i)) + 1);
    } else {
      map2.set(s2.charAt(i), 1);
    }
  }
  console.log(map1);

  for (let i = 0; i < s1.length; i++) {
    const a = map1.get(s1.charAt(i));
    const b = map2.get(s1.charAt(i));

    if (a && b) {
      map1.delete(s1.charAt(i));
      map2.delete(s1.charAt(i));

      count += Math.min(a, b);
    }
  }

  return count;
}

const s1 = 'aabcc';
const s2 = 'adcaa';

console.log(solution(s1, s2));
