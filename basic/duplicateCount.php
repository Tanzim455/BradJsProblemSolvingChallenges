<?php 

$nums=[10,20,30,40,10,40];

//Built in method 

//count the values of each array
$array_count_of_values=array_count_values($nums);



// var_dump($array_count_of_values);

$array_keys=array_keys($array_count_of_values);

var_dump($array_keys);

 $array_values=array_values($array_count_of_values);

 var_dump($array_values);
$indexes=[];
$count=0;
 for($i=0;$i<count($array_values);$i++){
    
    if($array_values[$i]===2){
        $count++;
        
    }
 }

 echo $count." ";