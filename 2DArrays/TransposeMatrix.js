/*
    Given a 2D integer array matrix, return the transpose of matrix.

    The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
    Example 1:

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[1,4,7],[2,5,8],[3,6,9]]
    Example 2:

    Input: matrix = [[1,2,3],[4,5,6]]
    Output: [[1,4],[2,5],[3,6]]

*/


var transpose = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    // m -> rows
    // n -> clumns
    if(m == n){
        for(let row = 0; row < m; row++){
            for(let col = row; col < n; col++){
                let temp = matrix[row][col];
                matrix[row][col] = matrix[col][row];
                matrix[col][row] = temp;
            }
        }
        
        return matrix;
    }

    let result = Array.from({length: n}, ()=> Array(m).fill(0));
    // create a new 2D array of size n x m and fill it with zeros

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            result[col][row] = matrix[row][col];
        }
    }

    return result;

    
};


let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let n = 3, m = 3;
transpose(arr);

console.log(arr);