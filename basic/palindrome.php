<?php 

$word="hello";
 $str=str_split($word);
 print_r($str);
//first looped variable;
$reverse='';
for ($i =count($str)-1; $i>=0; $i--) {
    // Code inside the loop (if any)
    // $first=$str[$i];
    // echo $str[$i];
    $reverse.=$str[$i];
}

if($word===$reverse){
    echo 1;
}else{
    echo 0;
}


