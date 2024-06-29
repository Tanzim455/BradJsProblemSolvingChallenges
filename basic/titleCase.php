<?php 


//Built in methods
 $str = "Hello world how are you";
//split it to a string
$str_array=$words = explode(" ", $str);

var_dump($str);

for ($i = 0; $i < count($str_array); $i++) {
    $str_array[$i] = ucwords($str_array[$i]);
    echo $str_array[$i] . " ";
}

