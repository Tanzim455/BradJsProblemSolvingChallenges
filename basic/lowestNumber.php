<?php 

$nums=[10,20,40,50,5];
$firstNum=$nums[0];

$first_num=$nums[0];

for($i=0;$i<count($nums);$i++){
    if($nums[$i]<$firstNum){
        $firstNum=$nums[$i];
    }
}

echo $firstNum;

$min=min($nums);

echo $min;