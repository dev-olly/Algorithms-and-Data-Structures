class Solution:
    def divideBy(self, num: int, count: int) -> int:
        if num < 10:
            return count
        count += 1
        return self.divideBy(num/10, count)
    
    def findNumbers(self, nums) -> int:
        even = 0
        for num in nums:
          count = 0
          while num >= 10:
            num = num / 10
            count += 1
          
          if count > 0 and count % 2 == 1:
            even += 1

          # evenCount = self.divideBy(num, count=0)
          # if evenCount%2 == 1:
          #   even += 1
        return even

solution = Solution()

print(solution.findNumbers([100000]))