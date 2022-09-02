<?php

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n) {
        // echo count($nums1);
        $i = $m - 1;
        $j = $n - 1;

        for ($right=$m + $n -1; $right >= 0 ; $right--) {
            $num1 = ($i >= 0) ?  $nums1[$i] : -INF;
            $num2 = ($j >= 0) ?  $nums2[$j] : -INF;

            if($num1 > $num2) {
                $nums1[$right] = $num1;
                $i--;
            }else {
                $nums1[$right] = $num2;
                $j--;
            }
        }
    }
}

$nums1 = [-1,0,0,3,3,3,0,0,0];
$m = 6; 
$nums2 = [1,2,2]; 
$n = 3;

$solution = new Solution();

$solution->merge($nums1, $m, $nums2, $n);

print_r($nums1);