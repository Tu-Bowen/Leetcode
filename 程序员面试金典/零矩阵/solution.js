/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let _row = false, _col = false, row = matrix.length, col = matrix[0].length;

    for (let i = 0; i < col; i++) {
        if (matrix[0][i] === 0) _col = true;
    }
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) _row = true;
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    console.log(matrix)
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if(_col){
        for(let i=0;i<col;i++){
            matrix[0][i]=0
        }
    }
    if(_row){
        for(let i=0;i<row;i++){
            matrix[i][0]=0
        }
    }
    return matrix
};

let arr=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  setZeroes(arr)