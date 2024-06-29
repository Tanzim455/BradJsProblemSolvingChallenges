<?php
$word="hello";
$str=str_split($word);

for ($i = count($str)-1; $i >=0; $i--) {
    // Code inside the loop (if any)
     echo $str[$i];
}
//Built in method 
$str_rev=strrev($word);

echo $str_rev;