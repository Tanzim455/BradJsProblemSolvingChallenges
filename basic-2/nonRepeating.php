<?php 

$str = "abcdeeff";  // Replace with your actual string
$charCount = [];  // Create an associative array to keep track of the characters

$areAllCharactersUnique = true;  // Assume all characters are unique initially
$repeatingCharacter=[];
// Loop through the string
for ($i = 0; $i < strlen($str); $i++) {
   // Get the current character

    // If the character is already in the array, set the flag to false and break
    if (isset($charCount[$str[$i]])) {
        
        $repeatingCharacter[]=$str[$i];
        
    }
   
    // Add the current character to the array
     $charCount[$str[$i]] = true;
}

 print_r($repeatingCharacter);
 $str_split=str_split($str);
 $filter_values_with_array_one = array_filter($str_split, fn($q) =>!in_array(haystack:$repeatingCharacter,needle:$q));



 var_dump($filter_values_with_array_one);

