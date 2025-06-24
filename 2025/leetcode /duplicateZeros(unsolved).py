from typing import List

# See: https://www.notion.so/Duplicate-Zeros-65b8f733af884794b37eb7d9cbc2e627?pvs=4
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        
        zerosThatCanBeDuplicated = 0
        i = 0
        arrCount = len(arr)
        lastDisplacableIndex = arrCount - 1

        while i <= lastDisplacableIndex:
          if arr[i] == 0:
            if (i == lastDisplacableIndex):
              # If the zero is the last element in the array before displacement
              # We do this by transferring the zero to the last element in the complete array
              arr[lastDisplacableIndex + zerosThatCanBeDuplicated] = 0
            else: 
              zerosThatCanBeDuplicated += 1
            
            lastDisplacableIndex -= 1
              
            
          i += 1
        

        i = lastDisplacableIndex
        while i >= 0:
          num = arr[i]
          if num != 0:
            arr[i + zerosThatCanBeDuplicated] = num
          else:
            arr[i + zerosThatCanBeDuplicated] = 0
            arr[i + zerosThatCanBeDuplicated - 1] = 0
            zerosThatCanBeDuplicated -= 1
          i -= 1  


solution = Solution()

solution.duplicateZeros([1,0,2,3,0,4,5,0])
# solution.duplicateZeros([1,0,2,3,0,4,5,0])
