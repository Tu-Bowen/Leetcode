# 最大黑方阵

**题目来源：**力扣面试题
https://leetcode-cn.com/problems/max-black-square-lcci/

**思路：**
动态规划，dp[i][j].x表示下标为i,j的元素左边连续为0的个数，dp[i][j].y表示i,j上边连续为0的个数，取dp.x和dp.y之中最小的那个作为可能的最大子方阵边长，然后判断左上角的那个点是不是满足，不满足就一直缩短边长