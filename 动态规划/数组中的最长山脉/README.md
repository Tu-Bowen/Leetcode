# 数组中的最长山脉

https://leetcode-cn.com/problems/longest-mountain-in-array/


枚举山顶，山顶左右都必须小于山顶值，并且必须严格成下降趋势，否则到达山脚，left和right两个指针循环找左右山脚