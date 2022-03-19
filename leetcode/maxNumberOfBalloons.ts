function maxNumberOfBalloons(text: string): number {
  let count: number = 0;
  if (text.length < 7) return count;
  const set = new Set<string>();
  set.add('b');
  set.add('a');
  set.add('l');
  set.add('o');
  set.add('n');

  return count;
}

const text: string = 'nlaebolko';

console.log(maxNumberOfBalloons(text));
