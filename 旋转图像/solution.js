/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate_ = function(matrix) {

    const n=matrix.length;

    for(let i=0;i<parseInt(n/2);i++){
        for(let j=0;j<parseInt((n+1)/2);j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[n-j-1][i]
            matrix[n-j-1][i]=matrix[n-i-1][n-j-1]
            matrix[n-i-1][n-j-1]=matrix[j][n-i-1]
            matrix[j][n-i-1]=temp;
        }

    }
    console.log(matrix)
    return matrix
};

var rotate=function(matrix){
    let n= matrix.length;
    for(let i=0;i<parseInt(n/2);i++){
        for(let j=0;j<n;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[n-i-1][j]
            matrix[n-i-1][j]=temp
        }
    }

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }

    console.log(matrix)
}
rotate([[1,2,3],[4,5,6],[7,8,9]]);