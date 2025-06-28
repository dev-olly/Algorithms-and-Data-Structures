class Solution:
    def isValid(self, s: str) -> bool:
      obj = {
        '}': "{",
        ")": "(",
        "]": "["
      }
      stack = []
      strlen = len(s)

      if strlen % 2 != 0:
        return False

      for i in range(0, strlen):
        str_i = s[i]

        if str_i in obj:
          if len(stack) == 0:
            return  False 
          last = stack.pop()
          if last != obj[str_i]:
            return False
        else:
          stack.append(str_i)

      return len(stack) == 0


s = "([)"

solution = Solution()
print(solution.isValid(s))