<?php

class Solution {

    
    // brute force (non in-place operation 0(N) time and 0(N) space)
    function bruteDuplicateZeros(&$arr) {
        $nums = [];
        $count =  count($arr);
        for ($i=0; $i < $count; $i++) { 
            $num = $arr[$i];
            if($num == 0) {
                array_push($nums, 0, 0);
            }else {
                array_push($nums, $num);
            }
        }


        $arr = array_slice($nums, 0, $count);
    }

    function duplicateZeros(&$arr) {
        // How many zeros is in the array that we can duplicate
        /** not all zeros can be duplicated, 
         *  the zeros at the right boundary for example cannot be duplicated 
         * cause the array is the same size*/ 

         $duplicatableZeros = 0;
         $arrSize = count($arr) - 1;
        
         /**the reason for this $i < $arrSize - $duplicatableZeros; 
          * the more duplicatable zeros we have, the lesser the chance of the next zero been duplicatable,
          cause the array is of a fixed size, for example [1, 0, 0, 0, 5, 6], the third zero cannot be duplicatable, 
          cause the previous 2 zeros  will be duplicated and 5 and 6 will be displaced*/
         for ($i=0; $i <= $arrSize - $duplicatableZeros; $i++) { 
            if($arr[$i] === 0) {
                if($i === $arrSize - $duplicatableZeros) {
                    $arr[$arrSize] = 0;
                    $arrSize--;
                }else {
                    $duplicatableZeros++;
                }
            }
         }

        $startFrom = $arrSize - $duplicatableZeros;

        for ($i=$startFrom; $i >= 0 ; $i--) { 
            if($arr[$i] == 0) {
                $arr[$i + $duplicatableZeros] = 0;
                $duplicatableZeros--;
                $arr[$i + $duplicatableZeros] = 0;
            }else {
                $arr[$i + $duplicatableZeros] = $arr[$i];
            }
        }
    }
}

$arr = [1,0,2,3,0,4,5,0];

$solution = new Solution();

$solution->duplicateZeros($arr);

print_r($arr);