function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const hashtable = new Map<string, string>();

  for (let i: number = 0; i < s.length; i++) {
    if (hashtable.has(s[i])) {
      if (hashtable.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      hashtable(s[i]);
    }
  }
}
