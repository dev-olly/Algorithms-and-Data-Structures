var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length < 2) {
    return s.length;
  }

  const map = new Map();
  let i = 0;
  let j = i + 1;
  let count = 0;

  map.set(s[i], 1);

  while (j < s.length) {
    if (!map.has(s[j])) {
      while (map.size >= 2) {
        map.set(s[i], map.get(s[i]) - 1);

        if (map.get(s[i]) === 0) {
          map.delete(s[i]);
        }
        i++;
      }
      map.set(s[j], 1);
    } else {
      map.set(s[j], map.get(s[j]) + 1);
    }

    if (count < j - i + 1) {
      count = j - i + 1;
    }
    j++;
  }

  return count;
};

s = 'eceba';
console.log(lengthOfLongestSubstringTwoDistinct(s));
