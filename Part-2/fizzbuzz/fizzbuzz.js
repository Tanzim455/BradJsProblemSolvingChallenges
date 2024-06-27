
for(i=0;i<=100;i++){
    const arr=[];
    if(i%3===0 && i%5===0){
        arr.push('FizzBuzz');
    } 
    if(i%3===0){
        arr.push('Fizz');
    }
    if(i%5===0){
        arr.push('Buzz')
    }else{
        arr.push(i)
    }

    console.log(arr);
}