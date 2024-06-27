const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//take all alphabets to an object


let allalphabets=['a','b','d','e','f','g','i','j'];

//count 

console.log(allalphabets.length);

//take the first letter
let firstLetter=allalphabets[0];
console.log(firstLetter);



let values=Object.values(alphabet)

let index=values.findIndex(v=>v===firstLetter);

let expectedArray=values.slice(index,allalphabets.length);
console.log(expectedArray);
 let array_diff=expectedArray.filter(a=>!allalphabets.includes(a));

array_diff.forEach(a=>{
    console.log(a);
})