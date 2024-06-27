let nums=[10,20,30,40,50];
let max=nums[0];
for (let index = 1; index < nums.length; index++) {
    if(nums[index]>max){
        max=nums[index];
      
    }
    
}

// const nums = [10, 20, 30, 40, 50];
const maxNum = Math.max(...nums);

console.log(maxNum);