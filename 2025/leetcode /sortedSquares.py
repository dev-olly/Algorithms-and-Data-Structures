from typing import List

# class Solution:
#     def sortedSquares(self, nums: List[int]) -> List[int]:
#         index = 0
#         while index < len(nums):
#           num = nums[index]
#           nums[index] = num * num
#           index += 1

#         nums.sort()
#         return nums

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        abs_num = []

        for num in nums:
          abs_num.append(num * num)

        i = 0
        j = len(nums) - 1 

        while i < j:
          first = abs_num[i]
          last = abs_num[j]
          
          if (first > last):
            abs_num[i], abs_num[j] = abs_num[j], abs_num[i]

          j -= 1

        return abs_num

solution = Solution()

print(solution.sortedSquares([-4,-1,0,3,10]))