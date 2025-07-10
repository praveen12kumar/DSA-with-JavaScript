


function matrixMultiply(matrix1, matrix2){

    let m1 = matrix1.length;
    let n1 = matrix1[0].length;

    let m2 = matrix2.length;
    let n2 = matrix2[0].length;

    if(n1 != m2){
        return -1;
    }

    let result = Array.from({length: m1}, ()=> Array(n2).fill(0));

    

}