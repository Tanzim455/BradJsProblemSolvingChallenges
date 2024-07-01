<?php 

 $nums=[10,20,30,40,10,40];
 $uniqueArray=[];

for($i=0;$i<count($nums);$i++){
    if(!in_array(needle:$nums[$i],haystack:$uniqueArray)){
         array_push($uniqueArray,$nums[$i]);
    }
}

var_dump($uniqueArray);

//Built in method
$unique_array=array_unique($nums);

var_dump($unique_array);