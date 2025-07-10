
// print the whole array row by row

function printArray(arr){
    
    for(let i = 0; i < arr.length; i++){
        let str = "";
        for(let j = 0; j < arr[i].length; j++){
            str += arr[i][j] + " "; // arr[i][j] -> element at ith row and jth column
        }
        console.log(str);
    }
};

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let n = 3, m = 3;
printArray(arr);