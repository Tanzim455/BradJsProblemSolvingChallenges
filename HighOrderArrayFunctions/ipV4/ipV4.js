let nums='123.045.067.089';

let num_split=nums.split("");


let results=[];
num_split.forEach(a=>{
    if(a !== '.'){
        results.push(a);
    }
})
let count=0;
results.forEach(r=>{
    if(r>=0 && r<=256){
         count++;
    }
});

if(count ===4 && results.length===4){
    console.log(true);
}else{
    console.log(false);
}


