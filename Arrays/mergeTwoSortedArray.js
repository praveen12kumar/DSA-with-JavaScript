/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored 
inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. 
nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/


var merge = function(nums1, m, nums2, n) {
    let result = [];
    let start1 = 0, start2 = 0;
    let k = 0;
    
    while(start1 < m && start2 < n){
        if(nums1[start1] <= nums2[start2]){
            result[k++] = nums1[start1++];
        }
        else{
            result[k++] = nums2[start2++];
        }
    }

    while(start1 < m){
        result[k++] = nums1[start1++];
    }

    while(start2 < n){
        result[k++] = nums2[start2++];
    }

    for(let i = 0; i < result.length; i++){
        nums1[i] = result[i];
    }
    
};

const num1 = [1,2,3];
const num2 = [2,5,6];

 merge(num1, 3, num2, 3);
console.log(num1);