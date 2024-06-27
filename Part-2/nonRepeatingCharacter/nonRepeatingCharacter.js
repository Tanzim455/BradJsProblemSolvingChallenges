let characters = 'abcde';
let charCount = {}; // Object to keep track of character counts

// Loop through the string to count the occurrences of each character
// for (let i = 0; i < characters.length; i++) {
//     const char = characters[i];
//     if (charCount[char]) {
//         charCount[char]=0;
//     } else {
//         charCount[char] = 1;
//     }
// }





// Array to store non-repeating characters
// let filters=Object.entries(charCount).filter(([key, value]) => value === 1) ;
// filters.forEach(a=>console.log(a[0]));

//
// let array=Object.entries(charCount).filter(([key, value]) => value === 1);

// console.log(array);
//  let allKeys=Object.fromEntries(Object.entries(charCount).filter(([key, value]) => value === 1));
 
//  console.log(allKeys);
// console.log(Object.keys(allKeys));


// Loop through the string again to collect non-repeating characters
// for (let i = 0; i < characters.length; i++) {
//     const char = characters[i];
//     if (charCount[char] === 1) {
//         nonRepeatingCharacters.push(char);
//     }
// }

// // Output the result
// console.log(nonRepeatingCharacters);




// for (const char of characters) {
//     if (charCount[char]) {
//         charCount[char] = charCount[char] + 1;
//     } else {
//         charCount[char] = 1;
//     }
//     // charCount[char] = (charCount[char] || 0) + 1;
// }

// for (const char in charCount) {
//     if (charCount[char] === 1) {
//         console.log(char);
//     }
// }

//with Map() data structure

// const charCountMap = new Map();

// for (const char of characters) {
//     //charCountMap.set(char, (charCountMap.get(char) || 0) + 1);

//     if (charCountMap.has(char)) {
//         // If char is already in the map, increment its count
//         let count = charCountMap.get(char);
//         count += 1;
//         charCountMap.set(char, count);
//     } else {
//         // If char is not in the map, initialize its count to 1
//         charCountMap.set(char, 1);
//     }
    
// }

// for (const [char, count] of charCountMap) {
//     if (count === 1) {
//         console.log(char);
//     }
// }
