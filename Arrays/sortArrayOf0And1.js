// Given an arrays of 0's and 1's. Sort the array in such a way that 
// all 0's come first and then all 1's. 
// The relative order of 0's and 1's should be same as in the original array.


function sortArray(arr){

    let low = 0;
    let high = 0;

    while(high < arr.length){
        if(arr[high] == 0){
            let temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high++;
        }
        else{
            high++;
        }
    }

    return arr;
}





let arr = new Array(1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0);

console.log(sortArray(arr));