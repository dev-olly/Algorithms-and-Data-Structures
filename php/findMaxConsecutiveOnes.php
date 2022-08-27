<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums) {
        $max = 0;
        $curr = 0;
        for ($i=0; $i < count($nums); $i++) { 
            if ($nums[$i] == 1) { 
                $curr++;
            }
            else {
                $curr = 0;
            }
            $max = $curr > $max ? $curr : $max;
        }
        return $max;
    }
}

$nums = [1,1,0,1,1,1];

$solution = new Solution();

$solution->findMaxConsecutiveOnes($nums);