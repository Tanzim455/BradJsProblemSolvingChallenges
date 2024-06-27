// let arr=[10,20,30,40,50];

// let arr2=[25,20,10,70,30,40,90];

//

let arr = ["scale", "happy", "strength",
    "peace", "happy", "happy"];

function removeDuplicates(arr) {
let unique = [];
arr.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
});
return unique;
}

console.log(removeDuplicates(arr));

let set = new Set(arr);
console.log(set);
console.log(Array.from(set));

console.log(Object.keys(set));
