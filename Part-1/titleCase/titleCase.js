let allNums="Hello how are you";
let arr=allNums.split(" ");

let arrArray=[];
for(i=0;i<arr.length;i++){
    arrArray.push(arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase()))
}
console.log(arrArray);
