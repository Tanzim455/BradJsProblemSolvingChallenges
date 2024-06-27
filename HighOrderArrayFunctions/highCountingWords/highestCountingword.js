let word = 'what time are we climbing up the volcano';
let split_words = word.split(' ');

console.log(split_words);

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
  
  console.log(allValues);
  

let obj = {};

// Create obj with keys from split_words
for (let i = 0; i < split_words.length; i++) {
    obj[split_words[i]] = '';
}

console.log(obj);

// Get keys of obj
let arrayKeys = Object.keys(obj);
let splitKeys = [];
let filteredObjNums = {};

// Loop through each key in arrayKeys
arrayKeys.forEach(a => {
    // Split the key into an array of characters
    let allSplit = a.split("");
    // Add the array of characters to splitKeys
    splitKeys.push(allSplit);

    // Filter allValues to include only those key-value pairs where the key is included in allSplit
    
});

console.log(splitKeys[0]);

let filters=[];

for(i=0;i<splitKeys.length;i++){
    filters.push(Object.entries(allValues).filter(([key, value]) => splitKeys[i].includes(key)));
}
 

filters.forEach((subArray, index) => {
    let sum = 0;
    subArray.forEach(item => {
        if (typeof item[1] === 'number') {
            sum += item[1];
        }
    });
    filteredObjNums[`array${index + 1}`] = sum;
});

console.log(filteredObjNums);
 let objNumValues=Object.values(filteredObjNums);

 console.log(objNumValues);
// console.log(obj);
let objNumKeys=Object.keys(obj);
objNumKeys.forEach((element, index) => {
    obj[element] = objNumValues[index];
});
console.log(obj);

let ValuesOfFilteredObj=Object.values(obj);

let MaxNum=Math.max(...ValuesOfFilteredObj);

console.log(MaxNum);

let filteredString=Object.entries(obj).filter(([key, value]) =>value===MaxNum);

console.log(filteredString);

if(filteredString.length===1){
    console.log(filteredString[0][0]);
}
let flatten_string=filteredString.flat();

for (let i = 0; i < flatten_string.length; i++) {
    if (typeof flatten_string[i] !== 'number') {
        console.log(flatten_string[i]);
    }
}



// console.log(filtredString.length);

// console.log(filtredString.flat());

