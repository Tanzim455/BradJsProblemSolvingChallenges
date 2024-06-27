let nums=[10,15,20,50,45];

let filtered_nums=nums.filter(n=>n%2===0);

let half_nums=filtered_nums.map(n=>n/2);

console.log(half_nums);



let sum = half_nums.reduce((accumulator, currentValue) =>  accumulator + currentValue,0);

  console.log(sum);

  //Bring all in one line 
  