<?php 

for($i=1;$i<6;$i++){
  $first_num=rand(min:1,max:6);
  $second_num=rand(min:1,max:6);
  $sum=$first_num+$second_num;
  $result='';
  echo $sum;
  if($sum===7 || $sum===11){
       $result='You have won';

  }else if($sum===2 || $sum===3 || $sum===12){
    $result='You have lost';
  }else{
    $result='Roll dice again';
  }
     $arr=[
        'dice1'=>$first_num,
        'dice2'=>$second_num,
        'result'=>$result

     ];

     var_dump($arr);

}