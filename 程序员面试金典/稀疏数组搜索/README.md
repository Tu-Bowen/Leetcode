# 稀疏数组搜索


https://leetcode-cn.com/problems/sparse-array-search-lcci/



1.二分查找

2.如果left或者right当前的字符串为空，那么不断右移或者左移

3.需要注意一点，如果mid为空，那么我们需要注意将mid在left和right范围内向左移动

4.js中字符串可以直接使用 =、<、> 来比较(从第一个开始比较，如果碰到不同，会返回当前这个不同的ASCALL码比较情况)