# 布尔运算

https://leetcode-cn.com/problems/boolean-evaluation-lcci/


1.dp[i][j][k]表示的是从i到j，结果为k（0或1）的括号选择情况个数


2.最外层循环是字符串长度，内部第一层层循环是左侧起点，最内层是从l遍历到r的遍历

3.如果在遍历截取字符串时，遍历到运算符时，根据运算符来执行相应状态转移式子