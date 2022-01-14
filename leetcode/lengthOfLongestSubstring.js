var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  const set = new Set();
  let i = 0;
  let j = 1;
  let count = 0;
  set.add(s[i]);
  while (j < s.length) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }

    set.add(s[j]);
    if (set.size > count) {
      count = set.size;
    }
    j++;
  }

  return count;
};

const s = 'abcabcbb';
// const s = 'abcdga';
// const s = 'abaa';

console.log(lengthOfLongestSubstring(s));
