<?php 


$str='Javascript is awesome';
//['Javascript','is','awesome'] use explode

$str_array=explode(" ",$str);
 array_unshift($str_array,'#');


// print_r($str_array);

for($i=0;$i<count($str_array);$i++){
    echo str_replace($str_array[$i][0],ucfirst($str_array[$i][0]),$str_array[$i]);
    // echo $str_array[$i];
}
// foreach ($str_array as $word) {
//     echo str_replace($word[0], ucfirst($word[0]), $word);
// }
//with array map 
// $mapped_array=array_map(array:$str_array,callback:function($str){
//       return str_replace($str[0], ucfirst($str[0]), $str);
// });
//  print_r($mapped_array);

