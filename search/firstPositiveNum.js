
function firstNumber(nums){

    if(nums[0] != 0) return 0;

    let low = 0, high = nums.length -1;
    let ans = 0;
    while(low <= high){
        let mid = Math.floor((high - low)/2 + low)
    

    if(nums[mid] == mid){
        // discard left
        low = mid + 1;
    }
    else{
        ans = mid;
        high = mid -1; 
        }
    }
    return ans;
}


const nums = [0,1, 2, 6, 7, 8, 11, 16];

console.log(firstNumber(nums));