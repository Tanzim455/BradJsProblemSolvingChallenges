<?php 

$str='hello';
$search_string='q';
$str_split=str_split($str);

$count=0;
for($i=0;$i<count($str_split);$i++){
    if(in_array(haystack:$str_split,needle:$str_split[$i]===$search_string)){
            $count++;
            
    }
   
}

echo $count;

$str_contains=str_contains(haystack:$str,needle:$search_string);

if($str_contains){
    $string_count=substr_count(haystack:$str,needle:$search_string);
    echo $string_count;
}else{
    echo "Str not found";
}




