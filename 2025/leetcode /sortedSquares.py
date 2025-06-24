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
        left = 0
        right = len(nums) - 1
        index = right 

        result = [0] * len(nums)

        while index >= 0 :
          leftSquare = nums[left] * nums[left]
          rightSquare = nums[right] * nums[right]

          if leftSquare > rightSquare :
            result[index] = leftSquare
            left += 1
          else :
            result[index] = rightSquare
            right -= 1
      
          index -= 1

        return result

solution = Solution()

print(solution.sortedSquares([-7,-3,2,3,11]))