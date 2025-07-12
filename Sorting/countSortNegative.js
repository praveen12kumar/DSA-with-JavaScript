function counting_sort(arr){
    let maxEl = -Infinity;
    let minEl = Infinity;

    for(let i = 0; i < arr.length; i++){
        maxEl = Math.max(maxEl, arr[i]);
        minEl = Math.min(minEl, arr[i]);
    }

    let freq = Array(maxEl -minEl + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
       let currEle = arr[i] - minEl;
       freq[currEle] += 1;
    }

    // prefix sum

    for(let i = 1; i < freq.length; i++){
        freq[i] += freq[i-1];
    }

    let output = Array(arr.length);

    for(let i = arr.length - 1; i >= 0; i--){
        let curr_ele = arr[i] - minEl;
        output[freq[curr_ele] - 1] = arr[i];
        freq[curr_ele] -= 1;
    }

    return output;
}

const arr = [3, 4, -5, 6, -7, 6, 5, 3, 3, 2, 1];

console.log(counting_sort(arr));