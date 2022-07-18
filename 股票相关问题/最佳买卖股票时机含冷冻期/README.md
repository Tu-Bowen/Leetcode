# 买卖股票的最佳时机含冷冻期

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/



分清dp[i][0,1,2]的状态含义：
0 今天结束后，非冷冻且没有股票
1 今天结束后，非冷冻有股票
2 今天结束后，冷冻没股票