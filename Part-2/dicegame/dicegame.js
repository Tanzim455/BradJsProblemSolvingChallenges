
//Run this loop 10 times 

for(i=0;i<5;i++){
    let dice1=Math.floor(Math.random() * 6);

    let dice2=Math.floor(Math.random() * 6);
    let sum=dice1+dice2;
    let result='';
    if(sum===1 || sum===7){
         result='Won'
    }else if(sum===2 || sum===3 || sum===12){
       result='Lose'
    
    }else{
        result='Roll again'
    }
    let arr=[
        {dice1:dice1},
        {dice2:dice2},
        {sum:sum},
        {result:result}
        
    ];
    
    console.log(arr);
}