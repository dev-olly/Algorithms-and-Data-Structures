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
            $num = $nums[$i];
            if($num === 0) {
                $curr = 0;
            }else {
                $curr++;
            }

            if($curr > $max) {
                $max = $curr;
            }
        }
        return $max;
    }
}

$nums = [1,1,0,1,1,1];

$solution = new Solution();

$solution->findMaxConsecutiveOnes($nums);