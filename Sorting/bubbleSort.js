function bubbleSort(arr){
    // this function applied adjacent comparisons and immediate swapping with adjacent element
    

    for(let i = 0; i < arr.length; i++){
        // we just need n-1 iterations because after than we weill be only left with smallest element
        let flag = false;
        for(let j = 0; j < arr.length - i -1; j++){
            if(arr[j] > arr[j+1]){
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(!flag) break;
    }
}

let arr = [15, 6, 1, 2, -1, 9];
bubbleSort(arr);
console.log(arr);