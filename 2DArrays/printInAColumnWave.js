


function printArray(arr, m, n){
    let str="";
    
    for(let i = 0; i  < n; i++){   // column

        if(i % 2 == 0){
            for(let j = 0; j < m; j++){  // row
            str += arr[j][i] + " ";
            }
        }
        else{
            for(let j = m-1; j >=0; j--){
                str += arr[j][i] + " ";
            }
        }
    }
    console.log(str);

}





let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let n = 3, m = 3;
printArray(arr, m, n);