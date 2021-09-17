# 跳跃游戏

**题目来源：**力扣
https://leetcode-cn.com/problems/jump-game/


**思路：**
使用一个数组，dp[i]表示下标为位置可以跳到最远的距离，max为整个数组中可以跳到的最远距离，每次计算之前需要判断i是否可以到达，可到达的条件为i<=max