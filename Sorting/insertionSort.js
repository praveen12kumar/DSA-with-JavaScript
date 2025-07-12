function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currenEle = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > currenEle){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currenEle;
    }
}

let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);