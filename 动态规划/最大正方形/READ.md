# 最大正方形

https://leetcode-cn.com/problems/maximal-square/

**思路**动态规划


**状态方程**：
if matrix[i][j]=="1"

dp[i][j]=min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;**//当前点是1，那么看它左上，左，上的三个方向的正方形，取最小的正方形+1作为边长**

else

dp[i][j]=0;