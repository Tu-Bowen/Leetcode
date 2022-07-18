/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array()
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(1))
    }
    // dp[0][0] = 1
    // for (let i = 1; i < m; i++) {
    //     dp[i][0] = dp[i - 1][0] 
    // }
    // for (let i = 1; i < n; i++) {
    //     dp[0][i] = dp[0][i - 1] + 1
    // }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};