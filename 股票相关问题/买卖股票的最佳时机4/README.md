# 买卖股票的最佳时机4


https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/



大体上的思路其实和限制次数为2是一样的，但是

注意：

1.如果2*k>prices.length那么说明k远远大于可以交易的次数的，那么最大交易次数为Math.floor(prices.length/2)

2.dp[j].in代表第i天，买过j只股票，手上有一支股票的最大收益
  dp[j].out代表第i天，手上没有股票的最大收益
  状态转移思路和其他股票问题差不多


3.记住dp[j].out的一个状态是dp[j].in转移的