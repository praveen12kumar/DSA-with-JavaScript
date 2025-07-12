


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivotIndex, low, high){
    let pivotEle = arr[pivotIndex];
    //let low = 0, high = arr.length - 1;
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
    return i+1;
};

function pickRandom(low, high){
    return Math.floor(Math.random() * (high - low) + low);
}


function quickSort(arr, i, j) {
    if (i >= j) return;

    let pivotIndex = pickRandom(i, j);
    let pivot = partition(arr, pivotIndex, i, j);
    quickSort(arr, i, pivot - 1);
    quickSort(arr, pivot + 1, j);
}


const arr = [3, 5, 10, 23, 2, 8, 9, 9];

quickSort(arr, 0, arr.length - 1);
console.log(arr);