from typing import List

# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#       output = []

#       i = 0
#       j = i + 1

#       numCount = len(nums)

#       for i in range(0, numCount):
#         nums_i = nums[i]
#         for j in range(i+1, numCount):
#           nums_j = nums[j]
#           summed = nums_i + nums_j 

#           if summed == target:
#             output = [i, j]

#       return output

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      output = []
      hashmap = dict()
      i = 0

      numCount = len(nums)

      for i in range(0, numCount):
        nums_i = nums[i]
        if nums_i in hashmap:
          return [hashmap[nums_i], i]
        diff = target - nums_i
        
        hashmap[diff] = i


      return output


nums = [3,3]
target = 6

sol = Solution()
print(sol.twoSum(nums, target))