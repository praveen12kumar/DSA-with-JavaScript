/**
 * Find All Numbers Disappeared in an Array
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2] 
 */


function findDisappeared(arr){

    for(let i = 0; i < arr.length; i++){
        let curr_ele = Math.abs(arr[i]);
        let curr_ind = curr_ele - 1;

        if(arr[curr_ind] > 0){
            arr[curr_ind] *= -1;
        }
    }

    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            result.push(i+1);
        }
    }

    return result;

}


console.log(findDisappeared([4,3,2,7,8,2,3,1]));