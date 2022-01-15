var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (k === 0) return k;
  if (s.length <= 1) return s.length;
  const map = new Map();
  let i = 0;
  let j = i + 1;
  map.set(s[i], 1);
  let count = 0;
  while (j < s.length) {
    if (!map.has(s[j])) {
      if (map.size < k) {
        map.set(s[j], 1);
      } else {
        while (map.size >= k) {
          map.set(s[i], map.get(s[i]) - 1);
          if (map.get(s[i]) === 0) {
            map.delete(s[i]);
          }
          i++;
        }
        map.set(s[j], 1);
      }
    } else {
      map.set(s[j], map.get(s[j]) + 1);
    }
    const diff = j - i + 1;
    if (count < diff) {
      count = diff;
    }
    j++;
  }
  return count;
};

const s = 'aba';
const k = 1;

console.log(lengthOfLongestSubstringKDistinct(s, k));
