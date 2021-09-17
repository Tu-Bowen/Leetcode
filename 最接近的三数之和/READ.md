# 最接近的三数之和


**题目来源：**力扣
https://leetcode-cn.com/problems/3sum-closest/

**思路：**
1、给数组从大到小排序
2、遍历数组，选择第一个值，下表为i，然后对i+1到n-1进行双指针，然后判断出最接近target的数组