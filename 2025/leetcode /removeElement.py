from typing import List

# class Solution:
#     def removeElement(self, nums: List[int], val: int) -> int:
#       i = 0
#       j = len(nums) - 1
#       m = 0

#       for num in nums:
#         if num == val:
#           m += 1

#       while i < j:
#         first = nums[i]
#         last = nums[j]

#         if first != val:
#           i += 1
        
#         if last == val:
#           j -= 1

#         if first == val and last != val:
#           nums[i], nums[j] = nums[j], nums[i]
#           i += 1
#           j -= 1
#       return len(nums) - m

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
      i = 0
      j = len(nums) - 1

      while i <= j:
        first = nums[i]
        last = nums[j]

        if first != val:
          i += 1
        else:
          nums[i] = last
          j -= 1
        
      return i

# class Solution:
#     def removeElement(self, nums: List[int], val: int) -> int:
#       m = 0

#       for i in range(len(nums)):
#         if nums[i] != val:
#           nums[m] = nums[i]
#           m += 1

#       return m 



nums = [0,1,2,2,3,0,4,2]

val = 2

s = Solution()
print(s.removeElement(nums, val))