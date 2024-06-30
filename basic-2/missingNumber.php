<?php 


$nums=[1,3,3,4,6,7,9];


for($i=1;$i<count($nums);$i++){
    // echo $nums[$i-1];
    
        if($nums[$i]-$nums[$i-1]>1){
            echo $nums[$i]-1;
        }
      

       
    
    
}