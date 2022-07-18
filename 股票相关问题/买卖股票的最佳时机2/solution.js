/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let n=prices.length 
    let dp = new Array()
    for(let i=0;i<n;i++){
        dp.push(new Array(2).fill(0))
    }
    dp[0][0]=0
    dp[0][1]=-prices[0]
    for(let i=1;i<n;i++){
        dp[i][0]=Math.max(dp[i-1][1]+prices[i],dp[i-1][0])
        dp[i][1]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
    }
    return dp[n-1][0]
};

maxProfit([7,1,5,3,6,4])