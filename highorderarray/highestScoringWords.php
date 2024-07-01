<?php 

// $str='man I need a taxi up to ubud';



// //split it to array
// $str_split=explode(" ",$str);
// print_r($str_split);
// $scores=[];
// $sum=0;

// $text = "man I need a taxi up to ubud";
// $characters =explode(" ",$text);
// $score=0;
//  print_r($characters);
//  $scores=[];

//  $scores = array_map(function($word){
//     var_dump($word);
//     $score = 0;

//     foreach (str_split($word) as $w) {
//         $score += ord($w[0]);
//     }

//     return $score;
// }, $characters);

// var_dump($scores);
// //Find the highest score 
// $max=max($scores);

// echo $max;
// $max_score_index=array_search(haystack:$scores,needle:$max);
// if(!is_array($max_score_index)){
//     echo $characters[$max_score_index];
// }
  //Using forEach 
  $str='man I need a taxi up to ubud';
  $characters =explode(" ",$str); // Example array
  print_r(ord($characters[0][1]));
$scores = [];

foreach ($characters as $word) {
    $score = 0;
     var_dump(str_split($word));
    foreach (str_split($word) as $char) {
        $score += ord($char);
    }
    array_push($scores, $score);
}

print_r($scores);


