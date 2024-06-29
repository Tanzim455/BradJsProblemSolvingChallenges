<?php 

// $nums = [];


// // $fizz = '';
// for ($i = 1; $i <=100; $i++) {
//     if ($i % 3 === 0 &&  $i% 5 === 0) {
//         array_push($nums,"FizzBuzz");
//     } elseif ($i % 3 === 0) {
//       array_push($nums,"Fizz");
//     } elseif ($i % 5 === 0) {
//       array_push($nums,"Buzz");
//     } else {
//       array_push($nums,$i);
//     }
// }


// var_dump($nums);

// $range_nums = range(1, 100);

// var_dump($range_nums);

// Create an array from 1 to 100
$nums = [];
for ($i = 1; $i <= 100; $i++) {
    $nums[] = $i;  // This is slightly more efficient than array_push()
}

// Create the FizzBuzz string
$fizz = '';
for ($i = 0; $i < count($nums); $i++) {
    if ($nums[$i] % 3 === 0 && $nums[$i] % 5 === 0) {
        $fizz .= "FizzBuzz ";  // Added space here
    } elseif ($nums[$i] % 3 === 0) {
        $fizz .= "Fizz ";
    } elseif ($nums[$i] % 5 === 0) {
        $fizz .= "Buzz ";
    } else {
        $fizz .= $nums[$i] . " ";  // No need to cast to string
    }
}

// Convert the string to an array
$fizz_array = explode(" ", trim($fizz));  // trim() removes the trailing space

// Output the result
var_dump($fizz_array);
echo "Count: " . count($fizz_array);  // This should now be 100

