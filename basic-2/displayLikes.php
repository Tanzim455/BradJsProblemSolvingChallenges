<?php

$peoples=['Tom','Dick','Harry'];
$count=count($peoples);

// if($count===1){
//     echo "$peoples[0] likes it";
    
// }
// if($count===2){
//     echo "$peoples[0] and $peoples[1] likes it";
    
// }
// if($count===3){
//     echo "$peoples[0],$peoples[1] and $peoples[2] likes it";
    
// }
// if($count>3){
//     echo "{$peoples[0]}, {$peoples[1]} and " . ($count - 2) . " other likes it";

    
// }
//Switch case here 
// switch ($count) {
//     case 1:
//         echo "$peoples[0] likes it";
//         break;
//     case 2:
//         echo "$peoples[0] and $peoples[1] like it";
//         break;
//     case 3:
//         echo "$peoples[0], $peoples[1], and $peoples[2] like it";
//         break;
//     default:
//         echo "{$peoples[0]}, {$peoples[1]}, and " . ($count - 2) . " others like it";
//         break;
// }
//Match
echo match ($count) {
    1 => "$peoples[0] likes it",
    2 => "$peoples[0] and $peoples[1] like it",
    3 => "$peoples[0], $peoples[1], and $peoples[2] like it",
    default => "{$peoples[0]}, {$peoples[1]}, and " . ($count - 2) . " others like it",
};
