from typing import List

# Also to research the Bruteforce way to solving this

#  to write about
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      max_count = nums[0]
      count = nums[0]
      i = 1
      arr_len = len(nums)

      while i < arr_len:
        count  = count + nums[i]
        if count < nums[i]:
          count = nums[i]
        
        max_count = max(max_count, count)
        i += 1

      return max_count


sol = Solution()
nums = [5,4,-1,7,8]
print(sol.maxSubArray(nums))