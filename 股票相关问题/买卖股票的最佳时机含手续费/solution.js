/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const n = prices.length
    let dp = new Array()
    for (let i = 0; i < n; i++) {
        dp.push(new Array(2))
    }
    dp[0][0] = 0 
    dp[0][1] = -prices[0]
    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices)
    }
    return dp[n-1][0]
};