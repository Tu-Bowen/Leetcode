/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const RU = [-1, 1], LD = [1, -1]
    let i = 0, j = 0, res = [], to = RU
    let m = mat.length, n = mat[0].length
    while (i < m && j < n) {
        res.push(mat[i][j])
        if (i === m - 1 && j === n - 1)
            break
        let newi = i + to[0]
        let newj = j + to[1]
        if (newi < 0 || newi >= m || newj < 0 || newj >= n) {
            if (to === RU) {
                if (j < n - 1) j = j + 1
                else i = i + 1
                to = LD
            } else {
                if (i < m - 1) i = i + 1
                else j = j + 1
                to = RU
            }
            continue
        }
        i=newi
        j=newj
    }
    return res
};