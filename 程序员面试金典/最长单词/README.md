# 最长单词

https://leetcode-cn.com/problems/longest-word-lcci/


有一个动态规划的我不打算去记，太长了，抽象度也不高


递归解法：
find函数：查询w是不是由ws中的单词组成，注意递归结束标志
1.先给words排序，从大到小
2.遍历时，满足find则重新赋值res,遍历到可以从set中删除当前串，由于当前串一定长于后面串，所以后面串不会被前面串组成
