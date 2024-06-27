 let resultone = "";
let resulttwo= '';
 let resultthree='';
// //Random numbers from 1-10

// for (let i = 1; i <=10; i++) {
    
    
//     if(i<=3){
//         resultone += i;
//     }

//     if(i>3 && i<=6){
//        resulttwo += `${i}`;
      
//     }
//     if(i>6){
//        resultthree+=i;
//     }
    
// }



// console.log(`(${resultone}) ${resulttwo}-${resultthree}`);

//In case of an array 
 let nums=[5,1,9,4,7,8,9,10,12,14]
for (let i = 0; i <nums.length; i++) {
    
    
    if(i<=2){
        resultone += nums[i];
    }

    if(i>2 && i<=5){
       resulttwo += `${nums[i]}`;
      
    }
    if(i>=6){
       resultthree+=nums[i];
    }
    
}

console.log(`(${resultone}) ${resulttwo}-${resultthree}`);



let first_slice=nums.slice(0,3).join("");
let second_slice=nums.slice(3,6).join("");
let third_slice=nums.slice(6).join("")

console.log(`(${first_slice}) ${second_slice}-${third_slice}`);



// Convert the array to a string
let numsString = nums.join("");

// Use substring to extract the desired parts
let first_sub_slice = numsString.substring(0, 3);
let second_sub_slice = numsString.substring(3, 6);
let third_sub_slice = numsString.substring(6);

console.log(`(${first_sub_slice}) ${second_sub_slice}-${third_sub_slice}`);




