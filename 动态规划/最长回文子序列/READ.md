# 最长回文子序列

https://leetcode-cn.com/problems/longest-palindromic-subsequence/


**思路：** 动态规划


**状态方程**


**if  s[i] == s[j]**
**dp[i][j] = max ( dp [i+1] [j-1] + 2 , dp[i+1][j] , dp[i] [j-1] )** 

**else**
**dp[i][j] = max ( dp[i+1] [j-1] ,dp[i+1][j],dp[i][j-1])**

**注意**

* 由于我们更新行是由i+1得到i所以从下向上，更新列是由j-1得到j所以从左到右
* 注意，由于我们需要使用（i+1，j-1）坐标的值，所以我们必须考虑j-i==1的情况，否则运算出问题
* **理解**dp[i][j]是从下标i到下标j之间最长子序列的长度，dp[i+1] [j-1]为排除两端，dp[i+1] [j]为排除前面的，dp[i] [j-1]为排除后面的