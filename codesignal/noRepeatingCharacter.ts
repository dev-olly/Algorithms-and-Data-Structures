function solution(s: string): string {
  const map = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else {
      map.set(char, 1);
    }
  }

  //   console.log(output);

  for (let i: number = 0; i < s.length; i++) {
    if (map.get(s.charAt(i)) === 1) return s.charAt(i);
  }

  return '_';
}

const s = 'ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof';

console.log(solution(s));
