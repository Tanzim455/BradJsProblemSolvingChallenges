<?php 

$nums=[10,20,21,22,23];

$filter_even_nums=array_filter(array:$nums,callback:fn($n)=>$n%2===0);

print_r($filter_even_nums);

$map_to_squares=array_map(array:$filter_even_nums,callback:fn($fil_nav)=>pow($fil_nav,2));

//Sum of the squares

$sum_of_even_squares=array_reduce(array:$map_to_squares,callback:fn($previous,$current)=>$previous+$current);

print_r($sum_of_even_squares);