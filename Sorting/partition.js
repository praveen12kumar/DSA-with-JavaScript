
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivotIndex){
    let pivotEle = arr[pivotIndex];
    let low = 0, high = arr.length - 1;
    let i = low -1;

    swap(arr, pivotIndex, high);

    let j = low;

    while(j < high){
        if(arr[j] < pivotEle){
            i += 1;
            swap(arr, i, j);
        }
        j += 1;
    }
    swap(arr, i+1, high);
};

let arr = [1,6,4,7,2,8,10];

partition(arr, 2);
console.log(arr);