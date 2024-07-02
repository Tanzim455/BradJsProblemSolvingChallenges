<?php 


$cars = [
  ['make' => 'Toyota', 'model' => 'Camry', 'year' => 2020, 'mileage' => 38000],
  ['make' => 'Honda', 'model' => 'Civic', 'year' => 2019, 'mileage' => 32000],
  ['make' => 'Chevrolet', 'model' => 'Impala', 'year' => 2021, 'mileage' => 17500],
  ['make' => 'Audi', 'model' => 'R8', 'year' => 2020, 'mileage' => 13000],
  ['make' => 'Tesla', 'model' => 'Model 3', 'year' => 2018, 'mileage' => 50000]
];

//Average mileague of all cars

 $mileague_of_all_cars=array_column(array:$cars,column_key:"mileage");


// $average=array_sum($mileague_of_all_cars)/count($mileague_of_all_cars);

// echo $average;
//Max mileague
$max_mileague=max($mileague_of_all_cars);

$car_with_highest_mileague=array_filter(array:$cars,callback:fn($m)=>$m['mileage']===$max_mileague);
if(count($car_with_highest_mileague)===1){
    $car=array_values($car_with_highest_mileague);
    // echo $car[0]['make'];
     ['make' => $make] = $car[0];
     echo $make;
}
$min_mileague=min($mileague_of_all_cars);
//Car with minimum milieague
$car_with_highest_mileague=array_filter(array:$cars,callback:fn($m)=>$m['mileage']===$min_mileague);
if(count($car_with_highest_mileague)===1){
    $car=array_values($car_with_highest_mileague);
    // echo $car[0]['make'];
     ['make' => $make] = $car[0];
     echo $make;
}
//sum of mileague of all cars
$sum=array_sum($mileague_of_all_cars);

echo $sum;

  