def numberOfSubstrings(s):
        """
        :type s: str
        :rtype: int
        """
        
        d = {}
        res = 0
        for i in s:
            if i not in d:
                d[i] = 1
            else:
                d[i] += 1
            res += d[i]
        return res

print(numberOfSubstrings('abcba'))
