# 组合总和

**题目来源：**力扣
https://leetcode-cn.com/problems/combination-sum/

dfs(idx,target)表示从下标为idx的元素开始向后匹配和为target的数组，递归终止条件是(idx==数组长度)或者(target==0),然后dfs的过程分为选择idx和不选择idx