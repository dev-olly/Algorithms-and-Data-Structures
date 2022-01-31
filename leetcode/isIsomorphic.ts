function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hashtable = new Map<string, string>();

  for (let i: number = 0; i < s.length; i++) {
    if (hashtable.has(s[i]) && hashtable.has(t[i])) {
      if (hashtable.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      hashtable.set(s[i], t[i]);
      if (s[i] !== t[i]) {
        hashtable.set(t[i], s[i]);
      }
    }
  }

  return true;
}

const s = 'foo';
const t = 'bar';

console.log(isIsomorphic(s, t));
