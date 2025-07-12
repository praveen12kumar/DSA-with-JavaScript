function merge(arr, m1, n1, m2, n2) {
    let a = Array(n1 - m1 + 1);
    let b = Array(n2 - m2 + 1);
    
    let k = 0;
    for (let i = m1; i <= n1; i++) {
        a[k++] = arr[i];
    }

    k = 0;
    for (let i = m2; i <= n2; i++) {
        b[k++] = arr[i];
    }

    let result = [];
    let start1 = 0, start2 = 0;
    k = 0;

    while (start1 < a.length && start2 < b.length) {
        if (a[start1] <= b[start2]) {
            result[k++] = a[start1++];
        } else {
            result[k++] = b[start2++];
        }
    }

    while (start1 < a.length) {
        result[k++] = a[start1++];
    }

    while (start2 < b.length) {
        result[k++] = b[start2++];
    }

    // Copy result back into original array from m1 to n2
    for (let i = 0; i < result.length; i++) {
        arr[m1 + i] = result[i];
    }
}

function mergeSort(arr, i, j) {
    if (i >= j) return;

    let mid = Math.floor((i + j) / 2);
    mergeSort(arr, i, mid);
    mergeSort(arr, mid + 1, j);
    merge(arr, i, mid, mid + 1, j);
}
