/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
    let dp = new Array()
    for (let i = 0; i < n + 1; i++) {
        dp.push(new Array(2).fill(Number.MAX_VALUE))
        dp[i][0]=i
    }
    dp[0][1]=0 
    for (let i = 1; i <= n; i++) {//从第i层向下扔，碎了dp[j-1][0]，没碎dp[i-j][1]
        for (let j = 1; j <= n; j++) {
            let temp = Math.max(dp[i-j][1],dp[j-1][0])
            dp[i][1]=Math.min(dp[i][1],(temp===Number.MAX_VALUE?Number.MAX_VALUE:temp+1))
        }
    }
    return dp[n][1]
};