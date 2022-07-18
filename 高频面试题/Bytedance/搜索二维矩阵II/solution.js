/**
 * 搜索二维矩阵I
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let x = 0, y = n - 1
    while (x < m && y >= 0) {
        if (matrix[x][y] === target) return true
        else if (matrix[x][y] < target) x++
        else y--
    }
    return false
};
/**
 * 搜索二维矩阵II
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    if (m === 0)return false
    let r = n * m - 1, l = 0
    while (l <= r) {
        let mid = (r+l)>>1
        let x = Math.floor(mid / n), y = (mid % n)
        if (matrix[x][y] === target) return true
        else if (matrix[x][y] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return false
};
console.log(searchMatrix([[1, 1]], 2))