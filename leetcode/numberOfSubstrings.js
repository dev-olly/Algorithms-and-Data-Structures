var numberOfSubstrings = function (s) {
  let noOfSubStrings = 0;
  const obj = new Map();

  for (i = s.length - 1; i >= 0; i--) {
    if (obj.get(s[i])) {
      obj.set(s[i], obj.get(s[i]) + 1);
    } else {
      obj.set(s[i], 1);
    }

    noOfSubStrings += obj.get(s[i]);
  }

  return noOfSubStrings;
};

const s = 'abcba';

console.log(numberOfSubstrings(s));
