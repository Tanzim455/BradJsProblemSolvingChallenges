<?php
$array_one=[10,20,30,40,50];

$array_two=[10,20,30,40];

//Using array filter 

$filter_values_with_array_one = array_filter($array_one, fn($q) =>in_array(haystack:$array_two,needle:$q));

print_r($filter_values_with_array_one);

//Using array_intersect 
$array_common=array_intersect($array_one,$array_two);

var_dump($array_common);