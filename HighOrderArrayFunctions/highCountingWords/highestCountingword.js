let allValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};
//27,9,28,1,54,48
// Original names as a string
let str = 'what time are we climbing up the volcano';

// Split the string into individual names
let split = str.split(" ");
console.log(split);

 let nameArr = [];
for (let i = 0; i < split.length; i++) {
    let tempArrName = [];
    let charSplit = split[i].split("");
    tempArrName.push(charSplit);
    nameArr.push(tempArrName);
}

// // Flatten the array
 let namesTwo = nameArr.flat();
 console.log(namesTwo);

let newArr = [];
let tempArr=[];
// Loop through namesTwo to convert each character to its corresponding value
 for (let i = 0; i < namesTwo.length; i++) {
      let tempArr = [];
     for (let j = 0; j < namesTwo[i].length; j++) {
        let char = namesTwo[i][j].toLowerCase(); // Convert to lowercase to match keys in allValues
        if (allValues[char] !== undefined) {
            tempArr.push(allValues[char]);
        }
     }
     newArr.push(tempArr);
}

console.log(newArr); 
// Output the newArr

let numsArr = [];
for (let i = 0; i < newArr.length; i++) {
    let sum = 0;
    newArr[i].forEach(n => {
        sum += n;
    });
    numsArr.push(sum);
}

console.log(numsArr); 
// Output the numsArr with sums of each sub-array

let maxNum = Math.max(...numsArr);

// Output the highest sum

// Index of the highest number
 let indexOfHighestNumber = numsArr.findIndex(n => n === maxNum);

// Name with the highest index
 console.log(indexOfHighestNumber); 
// Output the string with highest value
 console.log(namesTwo[indexOfHighestNumber].join("")); 

