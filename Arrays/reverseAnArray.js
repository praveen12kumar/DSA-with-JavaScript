/*
    Given an array, write an algorithm to reverse the same array.
    Note: you should not create a new Array

    Example:
    input: [5, 9, 1, 8, 2, 3]
    output:[3, 2, 8, 1, 9, 5]

*/



function reverse(arr){

    let start = 0;
    let end = arr.length-1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp; 
        start++;
        end--;
    }

    return arr;

}

let arr = [5, 9, 1, 8, 2, 3, 4];
reverse(arr);

console.log(arr);