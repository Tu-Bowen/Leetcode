# 搜索旋转数组


https://leetcode-cn.com/problems/search-rotate-array-lcci/


1.旋转数组的题目一定要注意，有序(递增)数组无论旋转多少次，数组永远满足两段有序数组（左递增，右递增）

2.如果有满足的arr[mid] === target，一定要继续寻找，因为寻找的是下标最小的

3.二分查找循环结束的判断要加上=，并且判断left是否等于target，返回left下标

4.需要把mid和最左侧值比较，判断mid位于那一段有序数组

5.如果最左侧的值和mid值一样，需要把left左移