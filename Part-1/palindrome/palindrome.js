let str='makkam';

let reversedArray=[];

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedArray.push(str[i])
// }
// let str_conversion=reversedArray.join("");

// if(str===str_conversion){
//     console.log("Its true");
// }else{
//     console.log("Its false");
// }

//with strrev

let str_rev=str.split("").reverse().join("");

if(str===str_rev){
    console.log("Its true");
}else{
    console.log("Its false");
}


