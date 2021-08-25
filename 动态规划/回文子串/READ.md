# 回文子串

**思路**动态规划


**状态方程**

dp(i,j)表示是否i到j之间的字符串是否是回文串

if s[i]==s[j]&&(j-i<2||dp(i+1,j-1))
dp(i,j)=true
并且统计回文串数量+1

else
dp(i,j)=false