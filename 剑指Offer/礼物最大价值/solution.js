/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let m = grid.length
    if (m === 0) return 0
    let n = grid[0].length
    let dp = new Array()
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n))
    }
    dp[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+grid[i][j]
        }
    }
    return dp[m-1][n-1]
};