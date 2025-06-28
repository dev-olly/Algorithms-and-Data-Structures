from typing import List

# Two Pointers 

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
      i = 0
      j = len(numbers) - 1

      while i < j:
        num_i = numbers[i]
        num_j = numbers[j]

        sum_i_j = num_i + num_j

        if sum_i_j > target:
          j -= 1
        elif sum_i_j < target:
          i += 1
        else:
          return [i+1, j+1]

numbers = [5,25,75]
target = 100

sol = Solution()
print(sol.twoSum(numbers, target))