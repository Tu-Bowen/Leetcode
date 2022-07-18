# 鸡蛋掉落

https://leetcode-cn.com/problems/super-egg-drop/


从n层楼找到目标楼层最多需要n次，dp[i][j]表示i次操作，j个鸡蛋最多可以验证多高的楼层
* dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i - 1][j]
这是状态转移方程，dp[i - 1][j - 1]表示第i次操作鸡蛋碎了，dp[i - 1][j]表示第i次操作鸡蛋没碎，1是当前楼层