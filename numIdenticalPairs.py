def numIdenticalPairs(nums):
    obj = {}
    i = len(nums) - 1
    numberOfPairs = 0
    while i >= 0:
        print(obj)
        if nums[i] in obj:
            obj[nums[i]] += 1
            numberOfPairs += obj[nums[i]]
        else:
            obj[nums[i]] = 0
        i -= 1
    return numberOfPairs

nums = [1,2,3,1,1,3]

print(numIdenticalPairs(nums))