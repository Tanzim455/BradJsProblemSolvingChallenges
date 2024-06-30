<?php 

$alphas = range('a', 'z');


$myWords=['a' ,'b','c','d','f'];

$count_of_array=count($myWords);

$first_word_index=array_search(haystack:$alphas,needle:$myWords[0]);

echo $first_word_index;

$preferred_array=array_slice(array:$alphas,offset:$first_word_index,length:$count_of_array);

print_r($preferred_array);

//difference between arrays
// $missing_number= array_filter($preferred_array, fn($q) =>!in_array(haystack:$myWords,needle:$q));

//preferred_way
$missing_number=array_diff($preferred_array,$myWords);

// print_r($missing_number);
if(count($missing_number)>1){
    for($i=0;$i<count($missing_number);$i++){
       echo $missing_number[$i];
    }
}else{
   $value=array_values($missing_number);
   echo $value[0];
}



