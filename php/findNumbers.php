<?php

class Solution {

     private function findNumberLength($num) {
        $length = 1;

        while($num >= 10) {
            $num = ($num -  ($num % 10)) / 10;
            
            $length++;
        }
        return $length;
    }

    private function isEven($num) {
        return $this->findNumberLength($num) % 2 === 0;
    }

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findNumbers($nums) {
        $evenCounts = 0;
        for ($i=0; $i < count($nums); $i++) { 
            $isNumberEven = $this->isEven($nums[$i]);
            if ($isNumberEven) {
                $evenCounts++;
            }
        }

        return $evenCounts;
    }
}

$nums = [100000];

$solution = new Solution();

echo $solution->findNumbers($nums);