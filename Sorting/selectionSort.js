function getMinIndex(arr, i){
    // this function returns the index of the minimum element in the range [i, n-1]
    let minIndex = i;

    for(let j = i + 1; j < arr.length; j++){
        // we go in the remaining array from i+1 to n-1
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }
    return minIndex;

};

function selectionSort(arr){
    // [i, n-1] -> unsorted region

    for(let i = 0; i < arr.length; i++){
        let minimum = getMinIndex(arr, i);
        // swap the ith element with min index

        if(i !== minimum){
            let temp = arr[i];
            arr[i] = arr[minimum];
            arr[minimum] = temp;
        }
    }
}

// let arr = [15, 6, 1, 2, -1, 9];
let arr = [1,2,3,4,5];
selectionSort(arr);

console.log(arr);