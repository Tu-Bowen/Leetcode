# 最长回文字串


https://leetcode-cn.com/problems/longest-palindromic-substring/

**思路**

动态规划

状态方程：dp[i][j]=dp[i+1][j-1]&&s[i]==s[j]

注意：

* 两个相邻的的元素组成回文串的情况单独看，j-i==1&&s[i]==s[j]这样判断
* 对于行的循环需要从下向上，否则
i行的更新依靠i+1的条件会出问题
