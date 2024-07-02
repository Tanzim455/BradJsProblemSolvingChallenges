<?php 

$password="abcd1234A";
$split_password=str_split($password);

 $uppercase_count=0;
 $lowercase_count=0;
 $numeric_count=0;
if(strlen($password)>8){
    
        for($i=0;$i<count($split_password);$i++){
            if( ctype_lower($split_password[$i])){
                $uppercase_count++;
              
            }
            if( ctype_upper($split_password[$i])){
                $lowercase_count++;
                
            }
            if(is_numeric(($split_password[$i])))
            {
                $numeric_count++;
                

            }
        }
}

echo $uppercase_count;
echo $lowercase_count;
echo $numeric_count;

if($uppercase_count>0 && $lowercase_count>0 && $numeric_count>0){
    echo "Password is valid";
}else{
    echo "Password is invalid";
}

