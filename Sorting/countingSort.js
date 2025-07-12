function counting_sort(arr){
    let maxEl = -Infinity;

    for(let i = 0; i < arr.length; i++){
        maxEl = Math.max(maxEl, arr[i]);
    }

    let freq = Array(maxEl + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        freq[arr[i]] += 1;
    }

    // prefix sum

    for(let i = 1; i < freq.length; i++){
        freq[i] += freq[i-1];
    }

    let output = Array(arr.length);

    for(let i = arr.length - 1; i >= 0; i--){
        let ele = arr[i];
        output[freq[ele] - 1] = ele;
        freq[ele] -= 1;
    }

    return output;
}

const arr = [3, 4, 5, 6, 7, 6, 5, 3, 3, 2, 1];

console.log(counting_sort(arr));