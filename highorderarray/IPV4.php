<?php
$input = '123.45.067.89';
$octets = explode('.', $input);

if (count($octets) !== 4) {
    echo 'false';
} else {
    $result = true;
    foreach ($octets as $octet) {
        echo $octet;
        $num = (int)($octet); // Convert the octet to an integer.
        
        var_dump($num);
        var_dump((string)($num));
         if ($num < 0 || $num > 255 || $octet !== (string)($num)) {
             $result = false;
             break;
         }
     }
     echo $result ? 'true' : 'false';
}



    


