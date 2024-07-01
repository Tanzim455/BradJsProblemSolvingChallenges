<?php 

$products = [
    ["name" => "Apple", "price" => 0.5, "quantity" => 10],
    ["name" => "Banana", "price" => 0.3, "quantity" => 20],
    ["name" => "Orange", "price" => 0.6, "quantity" => 15]
];
$sum=0;
//reduce 
// foreach($products as $product){
//     $sum+=$product['price'] * $product['quantity'];
// }
//  echo $sum;

$sum = array_reduce($products, fn($carry, $product)=> $carry + ($product['price'] * $product['quantity']), 0);

echo $sum; 
