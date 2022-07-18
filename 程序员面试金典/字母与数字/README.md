# 字母与数字

https://leetcode-cn.com/problems/find-longest-subarray-lcci/


前缀和
1.s统计的是字母数量与数字数量不同的值的最小下标，
2.特殊情况：s[0]=-1，如果start从0开始统计到end是最终答案，那么需要使用s[0]
3.注意规范使用js中的map，设置键值对用set，获取值用get，判断用has
4.如果差值在map中出现过，那么说明这是数组的一个数字和字母数量相等的点，否则记录为该差值的第一个