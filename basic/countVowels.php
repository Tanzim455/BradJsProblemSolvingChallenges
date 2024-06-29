<?php 

$string='missisipi';

$str_split=str_split($string);

$vowels=['a','e','i','o','u'];
$count=0;
for($i=0;$i<count($str_split);$i++){
    if(in_array(needle:$str_split[$i],haystack:$vowels)){
        $count++;
    }
}
echo $count;