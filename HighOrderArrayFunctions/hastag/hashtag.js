let result = '';
let string = 'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140';

let allString = string.split(" ");

let arr = [];
// allString.unshift('#');

if(string.length>0){
    for (let i = 0; i < allString.length; i++) {
       
         
        arr.push(allString[i].replace(allString[i].charAt(0),allString[i].charAt(0).toUpperCase()))
        
    }
    arr.unshift('#');


    // Join the array into a single string
     result = arr.join('');
    if(result.length>140){
        console.log(false);
    }else{
        console.log(result);
    }

}else{
    console.log(false);
}

// Add '#' at the beginning of the array

