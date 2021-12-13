from collections import Counter

def solution(A):
    firstNeeded = {val: 1 for val in set(A)}
    missingVac = len(firstNeeded)
    # create start and end windows for the current window
    # as well as for the result window
    cur_i = result_i = result_j = 0
    for cur_j, num in enumerate(A, 1):
        if firstNeeded[num] > 0:
            missingVac -= 1
        firstNeeded[num] -= 1

        if not missingVac:
            while cur_i < cur_j and firstNeeded[A[cur_i]] < 0:
                firstNeeded[A[cur_i]] += 1
                cur_i += 1
            # update the maximum length of the current window
            if not result_j or cur_j - cur_i <= result_j - result_i:
                result_i, result_j = cur_i, cur_j
    return result_j - result_i

