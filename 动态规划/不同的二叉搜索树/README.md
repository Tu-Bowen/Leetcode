# 不同的二叉搜索树


https://leetcode-cn.com/problems/unique-binary-search-trees/



动态规划，dp[i]表示以i为根节点的二叉搜索树的个数
* dp[i]=dp[i]+dp[j-1]*dp[i-j]