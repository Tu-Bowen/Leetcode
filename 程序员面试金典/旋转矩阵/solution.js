/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let t = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = t
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < parseInt(matrix[0].length / 2); i++) {
            let t = matrix[j][i]
            matrix[j][i] = matrix[j][matrix[0].length - i-1]
            matrix[j][matrix[0].length - i-1] = t
        }
    }
    return matrix
};

let arr = [[5, 1, 9, 11], 
           [2, 4, 8, 10], 
           [13, 3, 6, 7], 
           [15, 14, 12, 16]]

console.log(rotate(arr))