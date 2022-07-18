# 堆箱子


https://leetcode-cn.com/problems/pile-box-lcci/submissions/


1.对箱子数组排序，排序可以保证不会有重复的箱子被选择

2.dp[i]是以排序之后的第i+1个箱子为第一个箱子的最大高度

3.从后往前遍历数组，如果长宽高都满足要求，则选择为第二个箱子，那么dp[i] = dp[j] +firstboxheight

4.最终选择dp数组中最大的那个