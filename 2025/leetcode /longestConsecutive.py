from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
      hashset = set(nums)

      max_count = 0
      for num in nums:
        left_neighbor = num - 1
        if left_neighbor not in hashset:
          sequence_length = 1

          while (num + sequence_length) in hashset:
            sequence_length += 1

          max_count = max(sequence_length, max_count)
      return max_count


sol = Solution()
print(sol.longestConsecutive([100,4,200,1,3,2]))