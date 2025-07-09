/**
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */


var findMaxConsecutiveOnes = function(nums) {
    let maximum = 0;
    let count = 0;

    for(let num of nums){
        if(num == 1){
            count++;
        }
        else{
            maximum = Math.max(maximum, count);
            count = 0;
        }
    }
    return  Math.max(maximum, count);
};

console.log(findMaxConsecutiveOnes([1,1,1,1,0,0,1,1,1]));