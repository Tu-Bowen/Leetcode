/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    let row = mat.length, col = mat[0].length
    let pre = new Array(), ans = new Array()
    for (let i = 0; i < row; i++) {
        pre.push(new Array(col))
        ans.push(new Array(col))
        pre[i][0] = (i == 0 ? mat[0][0] : (pre[i - 1][0] + mat[i][0]))
        for (let j = 0; j < col; j++) {
            pre[0][j] = (j == 0 ? mat[0][0] : (pre[0][j - 1] + mat[0][j]))
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            pre[i][j] = mat[i][j] + pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1]
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let r1 = i - k, r2 = i + k, c1 = j - k, c2 = j + k
            if (r1 < 0) r1 = 0
            if (r2 >= row) r2 = row - 1
            if (c1 < 0) c1 = 0
            if (c2 >= col) c2 = col - 1
            // if (i == 2 && j == 2) {
            //     console.log(pre[r2][c2])
            // }
            ans[i][j] = pre[r2][c2]
                - (r1 === 0 ? 0 : pre[r1 - 1][c2])
                - (c1 === 0 ? 0 : pre[r2][c1 - 1])
                + ((r1 != 0 && c1 != 0) ? pre[r1 - 1][c1 - 1] : 0)
        }
    }
//    console.log(ans)
    return ans
};

matrixBlockSum(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ], 1)