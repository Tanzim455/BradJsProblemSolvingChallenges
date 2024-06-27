let nums=[1, 2, 3, 4, 6, 7, 8, 9,10];
let count=0;
// let sortedNum=nums.sort((a, b)=>a-b);
// console.log(sortedNum);
for (let i = 0; i < nums.length; i++) {
    let diff=Math.abs(nums[i]- nums[i - 1]);
    if(diff>1){
        console.log(nums[i]-1);
    }
    
}
 // Add 1 to the length of the array to account for the missing number
