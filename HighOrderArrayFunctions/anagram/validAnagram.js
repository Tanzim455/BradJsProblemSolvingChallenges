let firstWord='listen';
let sumone=0;
for(i=0;i<firstWord.length;i++){
    sumone+=firstWord[i].charCodeAt(0)-96;
}

console.log(sumone);

let secondWord="silent";

let sumtwo=0;
for(i=0;i<secondWord.length;i++){
    sumtwo+=secondWord[i].charCodeAt(0)-96;
}


if(sumone===sumtwo){
    console.log(true);
}else{
    console.log(false);
}



// Split and sort the characters of both words
let sortedFirstWord = firstWord.split('').sort().join('');
let sortedSecondWord = secondWord.split('').sort().join('');

// Compare the sorted strings
if (sortedFirstWord === sortedSecondWord) {
    console.log(true);  // They are anagrams
} else {
    console.log(false); // They are not anagrams
}

  

