<?php

class Solution {

     // brute force O(n ^ 2)
    function bruteForce($nums) {
        for ($i=0; $i < count($nums); $i++) { 
            $nums[$i] = $nums[$i] * $nums[$i];

        }
        for ($i=0; $i < count($nums); $i++) { 
            for ($j=$i+1; $j < count($nums); $j++) { 
                if($nums[$i] > $nums[$j]) {
                    $temp= $nums[$i];
                    $nums[$i] =$nums[$j];
                    $nums[$j]=$temp;
                }
            }
        }

        return $nums;
    }

    function sortedSquares($nums) {
        for ($i=0; $i < count($nums); $i++) { 
            $nums[$i] = $nums[$i] * $nums[$i];

        }

        $arr = array_fill(0, count($nums), 0);
        $left = 0;
        $right = count($nums) - 1;

        for ($i=count($nums) - 1; $i >= 0 ; $i--) { 
           $leftNumber = $nums[$left];
           $rightNumber = $nums[$right];

           if($leftNumber < $rightNumber) {
            $arr[$i] = $rightNumber;
            $right--;
           }else {
            $arr[$i] = $leftNumber;
            $left++;
           }

        }

        return $arr;
    }
}

$nums = [-4,-1,0,3,10];

$solution = new Solution();

print_r($solution->sortedSquares($nums));