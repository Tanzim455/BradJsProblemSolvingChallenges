let allAlphabets = ['a', 'b', 'c', 'd', 'e']; // Example array, change as needed

// function areElementsUnique(array) {
//     let uniqueElements = new Set();

//     for (let i = 0; i < array.length; i++) {
//         if (uniqueElements.has(array[i])) {
//             return false; // Duplicate found
//         }
//         uniqueElements.add(array[i]);
//     }

//     return true; // No duplicates found
// }

// console.log(areElementsUnique(allAlphabets)); // Outputs: true



 // Replace with your desired string

 const str = "abcde";  // Replace with your actual string
 const charCount = {};  // Create an object to keep track of the characters
 
 let areAllCharactersUnique = true;  // Assume all characters are unique initially
 
 // Loop through the string
 for (let i = 0; i < str.length; i++) {
   const char = str[i];  // Get the current character
 
   // If the character is already in the object, set the flag to false and break
   if (charCount[char]) {
     areAllCharactersUnique = false;
     break;
   }
 
   // Add the current character to the object
   charCount[char] = true;
 }
 
 // Output the result
 console.log(areAllCharactersUnique);
 






  // If no characters are repeated, return true
 

