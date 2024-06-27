let string='helloworldL';
let count=0;
for(i=0;i<string.length;i++){
    if(string[i].includes('f')){
        count++;
    }
}

console.log(count);

let str_split=string.split("");

let filteredString=str_split.filter(split=>split==='l');

console.log(filteredString.length);