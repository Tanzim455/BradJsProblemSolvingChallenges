
//Check between 2 arrays and remove duplicates
let arr=[10,20,30,40,50];

let arr2=[25,20,10,70,30,40,90];

//Find all matching values in second array from first array
let matching_values_from_first_array=arr2.filter(values=>arr.includes(values));

console.log(matching_values_from_first_array);


let set1=new Set(arr);
let intersection=[];
// for(num of arr2){
//     if(set1.has(num)){
//         intersection.push(num);
//     }
    
// }
// console.log(intersection);

// arr2.forEach(a=>{
//     if(set1.has(a)){
//         intersection.push(a);
//     }
// })
// console.log(intersection);
arr2.forEach(a=>{
    if(arr.includes(a)){
        intersection.push(a);
    }
});
console.log(intersection);
