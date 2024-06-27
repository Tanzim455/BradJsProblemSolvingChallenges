let str='makkami';

let reversedArray=[];

for (let i = str.length - 1; i >= 0; i--) {
     reversedArray.push(str[i])
    //another way 
    
}

let str_join=reversedArray.join("");

console.log(str_join);

//With built in functions 
let reverseString=str.split("").reverse("").join("");

console.log(reverseString);