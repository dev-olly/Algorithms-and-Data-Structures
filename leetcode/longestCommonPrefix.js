// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) {
//     return '';
//   }
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, prefix.length - 1);
//     }
//     if (prefix === '') return prefix;
//   }

//   return prefix;
// };

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0].charAt(i);

    for (let j = 1; i < strs.length; j++) {}
  }

  return prefix;
};

// const strs = ['flower', 'flower', 'flower', 'flower'];
// const strs = ['leets', 'leetcode', 'leet', 'leeds'];
const strs = ['', ''];

console.log(longestCommonPrefix(strs));
