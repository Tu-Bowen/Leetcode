/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length, dp = new Array()
    for (let i = 0; i < n; i++) {
        dp.push(new Array(5).fill(0))
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    dp[0][3] = -prices[0]
    dp[0][4] = 0
    for (let i = 1; i < n; i++) {
        dp[i][0] = 0
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
        dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]+prices[i])
        dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
        dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3]+prices[i])
    }
    return Math.max(dp[n-1][2],dp[n-1][4])
};