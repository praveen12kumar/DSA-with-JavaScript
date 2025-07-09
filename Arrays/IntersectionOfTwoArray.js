/*
    Intersection of Two Arrays
    Given two integer arrays nums1 and nums2, return an array of their intersection. 
    Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/


var intersection = function(nums1, nums2) {
    let freq_map = {};
    let result = [];
    for(let num of nums1){
        if(freq_map[num]){
            freq_map[num]++;
        }
        else{
            freq_map[num] = 1;
        }
    }
    for(let num of nums2){
        if(freq_map[num] > 0){
            result.push(num);
            freq_map[num] = 0;
        }
    }

    // for(let num in freq_map){
    //     if(freq_map[num] == 0){
    //         result.push(Number(num)); // ✅ convert back to number
    //     }
    // }

    return result;
};

console.log(intersection([4,9,5], [9,4,9,8,4]));