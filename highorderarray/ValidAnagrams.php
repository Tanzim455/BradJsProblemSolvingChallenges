<?php 

 $first_word='node';
 $split_one = str_split($first_word);
 sort($split_one);
// $second_word='deno';

// $split_one=str_split($first_word);

//  $split_two=str_split($second_word);

 $second_word = 'deno'; // Example word
$split_two = str_split($second_word); // Split the word into an array of characters
sort($split_two);
var_dump($split_two);
//  var_dump($split_two);
if(count($split_one)===count($split_two)){
     for($i=0;$i<count($split_one);$i++){
        if($split_one[$i] !== $split_two[$i]){
                 echo "It is not an anagram";
                 break;
        }else{
            echo "It is an anagram";
            break;
        }
     }
}


//Built in way 
// $split_one=str_split($first_word);

// $split_two=str_split($second_word);


// var_dump($split_one);

// var_dump($split_two);
// $difference=array_diff($split_one,$split_two);

// if(!count($difference)){
//     echo "It is an anagram";
// }else{
//     echo "It is not an anagram";
// }

