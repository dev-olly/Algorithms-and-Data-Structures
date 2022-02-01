function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hashtable = new Map<string, string>();
  const thashtable = new Map<string, string>();

  for (let i: number = 0; i < s.length; i++) {
    if (hashtable.has(s[i])) {
      if (hashtable.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      hashtable.set(s[i], t[i]);
    }

    // t[i]
    if (thashtable.has(t[i])) {
      if (thashtable.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      thashtable.set(t[i], s[i]);
    }
  }
  return true;
}

const s = 'paper';
const t = 'title';

console.log(isIsomorphic(s, t));
