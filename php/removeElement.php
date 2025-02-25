<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        $i = 0;
        $j = count($nums) -1;

        if($i === $j) {
            if($nums[$i] == $val) {
                $nums = [];
            }
        }else {
            while($i < $j) {
                $curr = $nums[$i];
                $last = $nums[$j];

                if($curr === $val) {
                    if ($last === $val) {
                        while ($j > $i) {
                            if($nums[$j] !== $val) {
                                break;
                            }
                            // $nums[$j] = null;
                            $j--;
                        }
                    }else {
                        // $tmp = $curr;
                        $nums[$i] = $last;
                        $nums[$j] = null;
                        $i++;
                        $j--;
                    }
                }else {
                    $i++;
                }
            }
            $nums = array_slice($nums, 0, $j+1);
        }
    }

    function newRemoveElement(&$nums, $val) {
        $i = 0;
        for ($j = 0; $j < count($nums); $j++) {
            if ($nums[$j] != $val) {
                $nums[$i] = $nums[$j];
                $i++;
            }
        }
        return $i;
    }
}


$nums = [0,1,2,2,3,0,4,2];
$val = 2;

$solution = new Solution();
$solution->newRemoveElement($nums, $val);

print_r($nums);
