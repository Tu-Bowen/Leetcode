/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let pre = new Array(m).fill().map(() => new Array(n))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i===0){
                pre[i][j]=(j===0?matrix[0][0]:pre[i][j-1]+matrix[i][j])
                continue
            }   
            if(j===0){
                pre[i][j]=pre[i-1][j]+matrix[i][j]
                continue
            }     
            pre[i][j]=pre[i-1][j]+pre[i][j-1]-pre[i-1][j-1]+matrix[i][j]
        }
    }
    this.pre=pre
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let pre=this.pre
    if(row1===0&&col1===0)return pre[row2][col2]
    if(row1===0)return pre[row2][col2]-pre[row1][col1-1]
    if(col1===0)return pre[row2][col2]-pre[row1-1][col1] 
    return pre[row2][col2]+pre[row1-1][col1-1]-pre[row1][col1-1]-pre[row1-1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */