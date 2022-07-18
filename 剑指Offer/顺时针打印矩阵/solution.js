/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length, n = matrix[0].length, k = m * n, idx = 0, res = [], r = 0, c = 0
    let pointer = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    for (let i = 0; i < k; i++) {
        res.push(matrix[r][c])
        let newr = r + pointer[idx][0]
        let newc = c + pointer[idx][1]
        if (newr < 0 || newr > m - 1 || newc < 0 || newc > n - 1)
        idx=((idx+1)%4)
        r=r+pointer[idx][0]
        c=c+pointer[idx[1]]
    }
    return res
};