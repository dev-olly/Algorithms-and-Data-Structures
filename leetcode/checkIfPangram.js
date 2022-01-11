var checkIfPangram = function (sentence) {
  const set1 = new Set(sentence);
  return set1.size === 26;
};

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/discuss/1164135/Simple-solution-no-setmap
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/discuss/1355353/Simple-or-Easy-or-O(1)-java-Solution
