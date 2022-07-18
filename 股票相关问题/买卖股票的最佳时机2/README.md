# 买卖股票的最佳时机2


可以多次买卖股票

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/


dp[i][0] 表示第i+1天手上有0张股票
dp[i][1] 表示第i+1天手上有1张股票


状态转移
dp[i][0]=Math.max(dp[i-1][1]+prices[i],dp[i-1][0])
dp[i][1]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1])