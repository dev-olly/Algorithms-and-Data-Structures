from typing import List
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
      m = 0
      i = 1
      arr_count = len(nums)

      while i < arr_count:
        last_edited = nums[m]
        current_scan = nums[i]

        if last_edited == current_scan:
          i += 1
        else:
          m += 1
          nums[m] = current_scan
          i += 1
      
      return m + 1

nums = [1,1,2]


s = Solution()
print(s.removeDuplicates(nums))