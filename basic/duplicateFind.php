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
 for($i=0;$i<count($array_values);$i++){
    echo $array_values[$i];
    if($array_values[$i]===2){
        array_push($indexes,$i);
    }
 }

 var_dump($indexes);
 $values_of_indexes=array_values($indexes);




 
 for($i=0;$i<count($values_of_indexes);$i++){
      echo $array_keys[$values_of_indexes[$i]]." ";
 }

 //Built in optimal solution 

 $filter_values_with_count_two = array_filter($array_count_of_values, fn($q) => $q === 2);


 var_dump($filter_values_with_count_two);
 //Get array keys

 $keys_of_filter=array_keys($filter_values_with_count_two);

 var_dump($keys_of_filter);

//  for($i=0;$i<count($keys_of_filter);$i++){
//      echo $keys_of_filter[$i]." ";
//  }

//for optimized solutions 
echo implode(" ", $keys_of_filter);
