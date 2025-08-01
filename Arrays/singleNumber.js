/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
 */


var singleNumber = function(nums) {
    
    let result = 0;

    for(let i = 0; i < nums.length; i++){
        result = result ^ nums[i];
    }

    return result;
};

console.log(singleNumber([4,1,2,1,2]));