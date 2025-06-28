class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      hashmap = {}
      start = 0
      max_length = 0

      for i, ch in enumerate(s):
          if ch in hashmap and hashmap[ch] >= start:
            start = hashmap[ch] + 1

          hashmap[ch] = i
          max_length = max(max_length, i - start + 1)

      return max_length

        
        
s = "abcabcbb"
# s = "bbbbb"
sol = Solution()

print(sol.lengthOfLongestSubstring(s))