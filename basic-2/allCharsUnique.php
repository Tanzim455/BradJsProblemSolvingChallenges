<?php 


//all Characters are unique
$str = "abcdee";  // Replace with your actual string
$charCount = [];  // Create an associative array to keep track of the characters

$areAllCharactersUnique = true;  // Assume all characters are unique initially

// Loop through the string
for ($i = 0; $i < strlen($str); $i++) {
    $char = $str[$i];  // Get the current character

    // If the character is already in the array, set the flag to false and break
    if (isset($charCount[$char])) {
        $areAllCharactersUnique = false;
        echo $str[$i];
        break;
    }

    // Add the current character to the array
     $charCount[$char] = true;
}

// Output the result
if ($areAllCharactersUnique) {
    echo "All characters in the string are unique.";
} else {
    echo "Not all characters in the string are unique.";
}

// $myWords=str_split('abcdee');
// var_dump($myWords);
//  $uniqueArray=[];

// for($i=0;$i<count($nums);$i++){
//     if(!in_array(needle:$nums[$i],haystack:$uniqueArray)){
//          array_push($uniqueArray,$nums[$i]);
//     }
// }

// var_dump($uniqueArray);

// if(count($uniqueArray)===count($nums)){
//     echo "It is true";
// }else{
//     echo "It is false";
// }



//All values are unique
// $myWords=['a','b','c','d','e','f','g','A'];

// $unique_words=count(array_unique($myWords));

// if(count($myWords)===$unique_words){
//          echo true;
// }else{
//     echo false;
// }