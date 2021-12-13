def countKAverageSubarrays(arr, n, k):
    # To Store the final answer
    res = 0
 
    # Calculate all subarrays
    for L in range(n):
        sum = 0
        for R in range(L,n,1):
            # Calculate required average
            sum += arr[R]
            len1 = (R - L + 1)
 
            # Check if average
            # is equal to k
            if (sum % len1 == 0):
                avg = sum // len1
 
                # Required average found
                if (avg == k):
 
                    # Increment res
                    res += 1
             
    return res
 
