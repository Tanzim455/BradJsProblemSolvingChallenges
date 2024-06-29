<?php 

$nums=[10,20,40,50];
$firstNum=$nums[0];
for($i=0;$i<count($nums);$i++){
     if($nums[$i]>$firstNum){
        $firstNum=$nums[$i];
        
     }
}

echo $firstNum;
//By built in methods 
$max=max($nums);

echo $max;